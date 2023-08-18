// Sends email to hello@webdevpath.co when user submit the form in "Contact Us" page
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async (email, name, subject, message, subscribe) => {
  try {
    // receiverEmail: The email will be sent here
    //   const receiverEmail = 'hello@webdevpath.co';
    const receiverEmail = 'tony.kieling+wdp@gmail.com';
    // sendgridEmail: This is the email verfied by sendgrid
    // the email will appear to be sent from this email
    // If a non verified email is used, we get a 403 error
    //   const sendgridEmail = 'hello@webdevpath.co';
    const sendgridEmail = 'tony.kieling+sendgrid@gmail.com';

    const emailContent = `
        <b>Name:</b> ${name} <br/>
        <b>Email:</b> <a href='mailto:${email}'>${email}</a><br/><br/>
        <u><b>Subject:</b> ${subject}</u><br/>
        <b>Message:</b> ${message} <br/>
        <b>Subscribe?:</b> ${subscribe ? 'Yes' : 'No'}
      `;

    const emailMessage = {
      to: receiverEmail,
      from: {
        email: sendgridEmail,
        name: 'Web Dev Path',
      },
      replyTo: {
        email,
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
    await sendgrid.send(emailMessage);
    return {
      status: 'okay',
    };
  } catch (e) {
    return {
      status: 'error',
      message: `Error: ${e.message}`,
    };
  }
};
