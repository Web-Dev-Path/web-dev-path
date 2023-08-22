import { useEffect, useState } from 'react';
import Image from 'next/image';
import { decode } from 'html-entities';
import { NewsLetterSubmitButton } from '@/components/buttons/SubmitButton';
import S from './styles';

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
    <S.Section>
      <S.InnerContainer>
        <S.Title>
          Sign up for news
          <S.RightChevron>
            <Image
              src='/images/svg/right-chevron.svg'
              height={18}
              width={18}
              alt='Right Chevron SVG'
            />
          </S.RightChevron>
        </S.Title>
        <div>
          <S.Form onSubmit={handleFormSubmit}>
            <S.InputName
              onChange={event => setName(event?.target?.value ?? '')}
              type='text'
              name='name'
              value={name}
              placeholder='name'
            />
            <S.InputEmail
              onChange={event => setEmail(event?.target?.value ?? '')}
              type='email'
              name='email'
              value={email}
              placeholder='email'
              onKeyUp={event => handleInputKeyEvent(event)}
            />
            <NewsLetterSubmitButton label='Subscribe' />
          </S.Form>

          <S.FormInfo>
            {/* just in case when reCaptcha issue happens */}
            {reCaptchaFail && (
              <S.FormSending>
                Please, refresh your screen and try it again.
              </S.FormSending>
            )}

            {status === 'sending' && <S.FormSending>Sending...</S.FormSending>}
            {status === 'error' || error ? (
              <S.FormError
                dangerouslySetInnerHTML={{
                  __html: error || getMessage(message),
                }}
              />
            ) : null}
            {status === 'success' && status !== 'error' && !error && (
              <S.FormSuccess
                dangerouslySetInnerHTML={{ __html: decode(message) }}
              />
            )}
          </S.FormInfo>
        </div>
      </S.InnerContainer>
    </S.Section>
  );
};

export default NewsletterForm;
