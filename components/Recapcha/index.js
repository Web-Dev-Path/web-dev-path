import { cloneElement, useRef } from 'react';
import GoogleReCAPTCHA from 'react-google-recaptcha';

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

const ReCapchaWrapper = ({ children }) => {
  const reCAPTCHARef = useRef(null);

  const getReCaptchaToken = async () => {
    await reCAPTCHARef.current.reset();
    const token = await reCAPTCHARef.current.executeAsync();
    return token;
  };

  const childWithProps = cloneElement(children, { getReCaptchaToken });

  return (
    <GoogleReCAPTCHA
      ref={reCAPTCHARef}
      size='invisible'
      sitekey={RECAPTCHA_SITE_KEY}
    >
      {childWithProps}
    </GoogleReCAPTCHA>
  );
};

export default ReCapchaWrapper;
