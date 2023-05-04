import { createRef, useState } from 'react';
import Image from 'next/image';
import { decode } from 'html-entities';
import ReCAPTCHA from 'react-google-recaptcha';
import Container from '@/components/containers/Container';
import SubmitButton from '@/components/buttons/SubmitButton';
import S from './styles';

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
            <SubmitButton label='Subscribe' $buttonType='newsletter__button' />

            <ReCAPTCHA
              ref={recaptchaRef}
              size='invisible'
              sitekey={SITE_KEY}
              onChange={onReCAPTCHAChange}
            />
          </S.Form>

          <S.FormInfo>
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
