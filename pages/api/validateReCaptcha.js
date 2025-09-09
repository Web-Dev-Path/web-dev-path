import sendEmail from './sendEmail.js';
import { subscribeToMailchimp } from '../../lib/mailchimp';

export default async function handler(req, res) {
  const { method } = req;

  if (method === 'POST') {
    const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
    // Extract the email, name, and captcha code from the request body
    // in case it is a call from the ContactUsForm, it will contain
    // data used to send email, as well
    const { name, email, subject, message, subscribe, gReCaptchaToken } =
      req.body;

    // If email or captcha are missing return an error
    if (!email || !name || !gReCaptchaToken) {
      return res.status(422).json({
        message: 'Unprocessable request, please provide the required fields',
      });
    }

    try {
      // Ping the google recaptcha verify API to verify the captcha code you received
      const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${gReCaptchaToken}`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
          },
          method: 'POST',
        },
      );
      const captchaValidation = await response.json();
      if (captchaValidation.success) {
        // in case this call is coming from ContactUsForm, it will send an email too
        if (subject || message) {
          // it sends the email
          const sendEmailOK = await sendEmail(
            email,
            name,
            subject,
            message,
            subscribe,
          );

          if (sendEmailOK.status !== 'okay') {
            return res.status(400).json({ message: sendEmailOK.message });
          }
        }

        if (subscribe) {
          const result = await subscribeToMailchimp(email, name);
          if (!result.success) {
            console.error('Mailchimp subscribe failed: ', result.error);
            return res
              .status(400)
              .json({ message: result.error?.detail || 'Subscription failed' });
          }
        }

        // Return 200 if everything is successful
        return res.status(200).send('OK');
      }

      return res.status(422).json({
        message: 'Unprocessable request, Invalid captcha code',
      });
    } catch (error) {
      console.log(error);
      return res.status(422).json({ message: 'Something went wrong' });
    }
  }
  // Return 404 if someone pings the API with a method other than
  // POST
  return res.status(404).send('Not found');
}
