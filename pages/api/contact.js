// Sends email to hello@webdevpath.co when user submit the form in "Contact Us" page
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' });
    return;
  }

  try {
    const {
      name,
      email: emailAddress,
      subject,
      message,
      subscribe,
      gReCaptchaToken,
    } = req.body;

    // verify recaptcha token
    const reCaptchaValidation = await (
      await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${gReCaptchaToken}`,
      })
    ).json();

    if (reCaptchaValidation.success) {
      // receiverEmail: The email will be sent here
      const receiverEmail = 'hello@webdevpath.co';
      // sendgridEmail: This is the email verfied by sendgrid
      // the email will appear to be sent from this email
      // If a non verified email is used, we get a 403 error
      const sendgridEmail = 'hello@webdevpath.co';

      const emailContent = `
        <b>Name:</b> ${name} <br/>
        <b>Email:</b> <a href='mailto:${emailAddress}'>${emailAddress}</a><br/><br/>
        <u><b>Subject:</b> ${subject}</u><br/>
        <b>Message:</b> ${message} <br/>
        <b>Subscribe?:</b> ${subscribe ? 'Yes' : 'No'}
      `;

      const email = {
        to: receiverEmail,
        from: {
          email: sendgridEmail,
          name: 'Web Dev Path',
        },
        replyTo: {
          email: emailAddress,
          name,
        },
        subject: `New message from ${name} via webdevpath.co 'Contact Us' Form`,
        content: [
          {
            type: 'text/html',
            value: emailContent,
          },
        ],
      };
      await sendgrid.send(email);
      res.status(200).json({ status: 'OK' });
    } else {
      return res.status(422).json({
        status: 'error',
        message: 'Invalid ReCaptcha',
      });
    }
  } catch (e) {
    return res.status(500).json({
      status: 'error',
      message: `Error: ${e.message}`,
    });
  }
};
