export default async function handler(req, res) {
  const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

  const { body, method } = req;

  // Extract the email, name, and captcha code from the request body
  const { email, name, captcha } = body;

  if (method === 'POST') {
    // If email or captcha are missing return an error
    if (!email || !name || !captcha) {
      return res.status(422).json({
        message: 'Unprocessable request, please provide the required fields',
      });
    }

    try {
      // Ping the google recaptcha verify API to verify the captcha code you received
      const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${captcha}`,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
          },
          method: 'POST',
        }
      );
      const captchaValidation = await response.json();

      if (captchaValidation.success) {
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
