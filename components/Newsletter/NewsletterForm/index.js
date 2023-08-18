import { createRef, useState } from 'react';
import Image from 'next/image';
import { decode } from 'html-entities';
import ReCAPTCHA from 'react-google-recaptcha';
import { NewsLetterSubmitButton } from '@/components/buttons/SubmitButton';
import S from './styles';

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

const NewsletterForm = ({ status, message, subscribe }) => {
  console.log('props on NLF::: ', status, message, subscribe);
  /////////////////// temp stuff
  const t = new Date();
  const tday = t.getDate() > 9 ? t.getDate() : '0' + t.getDate();
  const thour = t.getHours() > 9 ? t.getHours() : '0' + t.getHours();
  const tmonth =
    t.getMonth() + 1 > 9 ? t.getMonth() + 1 : '0' + (t.getMonth() + 1);
  const tminute = t.getMinutes() > 9 ? t.getMinutes() : '0' + t.getMinutes();
  const tname = tday + '' + tmonth + '' + thour + '' + tminute;
  const temail = `tony.kieling+${tname}@gmail.com`;
  const [name, setName] = useState(tname);
  const [email, setEmail] = useState(temail);

  const [error, setError] = useState(null);
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  const recaptchaRef = createRef();
  const [reCaptchaFail, setReCaptchaFail] = useState(false);

  const onReCAPTCHAChange = () => {
    console.log('new recaptcha!!!!!!!!!!!!!');
    recaptchaRef.current.reset();
  };

  const validateReCaptcha = async reCaptchaToken => {
    // If the reCAPTCHA code is null or undefined indicating that
    // the reCAPTCHA was expired then return early
    if (!reCaptchaToken) {
      setReCaptchaFail(true);
      return;
    }

    try {
      const response = await fetch('/api/validateReCaptcha', {
        method: 'POST',
        body: JSON.stringify({ email, name, gReCaptchaToken: reCaptchaToken }),
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

    // const validateRecaptcha = await recaptchaRef.current.execute();
    const token = await recaptchaRef.current.executeAsync();
    console.log('----------going to check recaptcha', token);
    const confirmValidateRecaptcha = await validateReCaptcha(token);
    console.log('confirmValidateRecaptcha::: ', confirmValidateRecaptcha);

    if (!confirmValidateRecaptcha) {
      setReCaptchaFail(true);
    } else {
      // const isFormValidated  -- onValidate return nothing, so no need it
      subscribe({
        EMAIL: email,
        MERGE1: name,
      });

      // console.log("isFormValidated::: ", isFormValidated)
      event.target.reset();
      setEmail('');
      setName('');
      setReCaptchaFail(false);
    }

    // recaptchaRef.current.reset();
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

            <ReCAPTCHA
              ref={recaptchaRef}
              size='invisible'
              sitekey={SITE_KEY}
              onChange={onReCAPTCHAChange}
            />
          </S.Form>

          <S.FormInfo>
            {/* just in case when reCaptcha issue happens */}
            {reCaptchaFail && (
              <S.FormSending>
                Please, refresh your screen and try again.
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
