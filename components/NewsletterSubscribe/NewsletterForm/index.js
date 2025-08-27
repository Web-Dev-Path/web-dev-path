import { useEffect, useState } from 'react';
import Image from 'next/image';
import { decode } from 'html-entities';
import { NewsLetterSubmitButton } from '@/components/buttons/SubmitButton';
import styles from './NewsletterForm.module.scss';
import Container from '@/components/containers/Container';

const NewsletterForm = ({ status, message, subscribe, getReCaptchaToken }) => {
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reCaptchaFail, setReCaptchaFail] = useState(false);

  useEffect(() => {
    if (status === 'success') {
      setName('');
      setEmail('');
    }
  }, [status]);

  const validateReCaptcha = async () => {
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    const gReCaptchaToken = await getReCaptchaToken();
    if (!gReCaptchaToken) return false;

    try {
      const response = await fetch('/api/validateReCaptcha', {
        method: 'POST',
        body: JSON.stringify({ email, name, gReCaptchaToken }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return response.ok ? true : false;
    } catch (error) {
      console.log(error?.message || 'Something went wrong');
      return false;
    }
  };

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = async event => {
    event.preventDefault();

    setReCaptchaFail(false);
    setError(null);

    if (!name) {
      setError('Please enter a name');
      return null;
    }

    if (!email) {
      setError('Please enter a valid email address');
      return null;
    }

    const confirmValidateRecaptcha = await validateReCaptcha();
    if (!confirmValidateRecaptcha) {
      setReCaptchaFail(true);
    } else {
      subscribe({
        EMAIL: email,
        MERGE1: name,
      });

      event.target.reset();
      setReCaptchaFail(false);
    }
  };

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = event => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  };

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = message => {
    if (!message) {
      return null;
    }
    const result = message?.split('-') ?? null;
    if ('0' !== result?.[0]?.trim()) {
      return decode(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? decode(formattedMessage) : null;
  };

  return (
    <section className={styles.section}>
      <Container className={styles.innerContainer}>
        <h2 className={styles.title}>
          Sign up for news
          <span className={styles.rightChevron}>
            <Image
              src='/images/svg/right-chevron.svg'
              height={18}
              width={18}
              alt='Right Chevron SVG'
            />
          </span>
        </h2>
        <div>
          <form className={styles.form} onSubmit={handleFormSubmit}>
            <input
              className={styles.inputName}
              onChange={event => setName(event?.target?.value ?? '')}
              type='text'
              name='name'
              value={name}
              placeholder='name'
            />
            <input
              className={styles.inputEmail}
              onChange={event => setEmail(event?.target?.value ?? '')}
              type='email'
              name='email'
              value={email}
              placeholder='email'
              onKeyUp={event => handleInputKeyEvent(event)}
            />
            <NewsLetterSubmitButton label='Subscribe' />
          </form>

          <div className={styles.formInfo}>
            {reCaptchaFail && (
              <div className={styles.formSending}>
                Please, refresh your screen and try it again.
              </div>
            )}

            {status === 'sending' && (
              <div className={styles.formSending}>Sending...</div>
            )}
            {status === 'error' || error ? (
              <div
                className={styles.formError}
                dangerouslySetInnerHTML={{
                  __html: error || getMessage(message),
                }}
              />
            ) : null}
            {status === 'success' && status !== 'error' && !error && (
              <div
                className={styles.formSuccess}
                dangerouslySetInnerHTML={{ __html: decode(message) }}
              />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewsletterForm;
