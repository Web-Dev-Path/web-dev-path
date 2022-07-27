import { createRef, useState } from 'react';
import Image from 'next/image';
import { decode } from 'html-entities';
import Container from '@/components/containers/Container';
import newsletterStyles from '@/styles/Newsletter.module.scss';
import ReCAPTCHA from 'react-google-recaptcha';

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

const NewsletterForm = ({ status, message, onValidated }) => {
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const recaptchaRef = createRef();

  const onReCAPTCHAChange = async captchaCode => {
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    if (!captchaCode) {
      return;
    }
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        body: JSON.stringify({ email, name, captcha: captchaCode }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        // If the response is ok than show the success console.log
        console.log('Email registered successfully');
      } else {
        // Else throw an error with the message returned
        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      console.log(error?.message || 'Something went wrong');
    } finally {
      // Reset the reCAPTCHA when the request has failed or succeeded
      if (recaptchaRef?.current) {
        recaptchaRef.current.reset();
      }

      setEmail('');
      setName('');
    }
  };

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = event => {
    event.preventDefault();

    setError(null);

    if (!name) {
      setError('Please enter a name');
      return null;
    }

    if (!email) {
      setError('Please enter a valid email address');
      return null;
    }

    recaptchaRef.current.execute();

    const isFormValidated = onValidated({ EMAIL: email });

    event.target.reset();

    // On success return true
    return name && email && email.indexOf('@') > -1 && isFormValidated;
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
    <section className={newsletterStyles.newsletter}>
      <Container className={newsletterStyles.newsletter__inner}>
        <h2 className={newsletterStyles.newsletter__title}>
          Sign up for news
          <span className={newsletterStyles.newsletter__right_chevron}>
            <Image
              src='/images/svg/right-chevron.svg'
              height={18}
              width={18}
              alt='Right Chevron SVG'
              className={newsletterStyles.newsletter__right_chevron_image}
            />
          </span>
        </h2>
        <div>
          <form
            className={newsletterStyles.newsletter__form}
            onSubmit={handleFormSubmit}
          >
            <input
              className={`${newsletterStyles.newsletter__input} ${newsletterStyles.newsletter__name}`}
              onChange={event => setName(event?.target?.value ?? '')}
              type='text'
              name='name'
              value={name}
              placeholder='name'
            />
            <input
              className={`${newsletterStyles.newsletter__input} ${newsletterStyles.newsletter__email}`}
              onChange={event => setEmail(event?.target?.value ?? '')}
              type='email'
              name='email'
              value={email}
              placeholder='email'
              onKeyUp={event => handleInputKeyEvent(event)}
            />
            <button
              className={newsletterStyles.newsletter__button}
              type='submit'
            >
              Subscribe
            </button>

            <ReCAPTCHA
              ref={recaptchaRef}
              size='invisible'
              sitekey={SITE_KEY}
              onChange={onReCAPTCHAChange}
            />
          </form>

          <div className={newsletterStyles.newsletterFormInfo}>
            {status === 'sending' && (
              <div className={newsletterStyles.newsletterFormSending}>
                Sending...
              </div>
            )}
            {status === 'error' || error ? (
              <div
                className={newsletterStyles.newsletterFormError}
                dangerouslySetInnerHTML={{
                  __html: error || getMessage(message),
                }}
              />
            ) : null}
            {status === 'success' && status !== 'error' && !error && (
              <div
                className={newsletterStyles.newsletterFormSuccess}
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
