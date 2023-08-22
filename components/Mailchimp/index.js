import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { cloneElement, useRef } from 'react';
import GoogleReCAPTCHA from 'react-google-recaptcha';

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

const Mailchimp = ({ child }) => {
  const reCAPTCHARef = useRef(null);
  let childToBeRendered = cloneElement(child);

  const getReCaptchaToken = async () => {
    // console.log('getting tokennnnnnnnnnnn');
    await reCAPTCHARef.current.reset();
    const token = await reCAPTCHARef.current.executeAsync();
    console.log('new token::: ', token);
    return token;
  };

  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={({ subscribe, status, message }) => {
        childToBeRendered = {
          ...childToBeRendered,
          props: {
            ...child.props,
            subscribe,
            status,
            message,
            getReCaptchaToken,
          },
        };

        return (
          <GoogleReCAPTCHA
            ref={reCAPTCHARef}
            size='invisible'
            sitekey={RECAPTCHA_SITE_KEY}
          >
            {childToBeRendered}
          </GoogleReCAPTCHA>
        );
      }}
    />
  );
};

export default Mailchimp;
