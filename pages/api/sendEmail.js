// Sends email to hello@webdevpath.co when user submit the form in "Contact Us" page

import { Client } from 'node-mailjet';
import { encode } from 'html-entities';

const mailjet = new Client({
  apiKey: process.env.MAILJET_API_KEY,
  apiSecret: process.env.MAILJET_API_SECRET,
});

export default async (email, name, subject, message, subscribe) => {
  // receiverEmail: The email will be sent here
  const receiverEmail = 'hello@webdevpath.co';

  // mailJetEmail: This is the email verified by mailjet
  // the email will appear to be sent from this email
  // If a non-verified email is used, it just fails silently
  const mailjetEmail = 'support@webdevpath.co';

  try {
    const safeName = encode(name);
    const safeEmail = encode(email);
    const safeSubject = encode(subject);
    const safeMessage = encode(message);

    const data = {
      Messages: [
        {
          From: {
            Email: mailjetEmail,
            name: 'Web Dev Path',
          },
          To: [
            {
              Email: receiverEmail,
            },
          ],
          Subject: `New message from ${safeName} via webdevpath.co 'Contact Us' Form`,
          HTMLPart: `
            <b>Name:</b> ${safeName} <br/>
            <b>Email:</b> <a href='mailto:${safeEmail}'>${safeEmail}</a><br/><br/>
            <u><b>Subject:</b> ${safeSubject}</u><br/>
            <b>Message:</b> ${safeMessage} <br/>
            <b>Subscribe?:</b> ${subscribe ? 'Yes' : 'No'}
          `,
        },
      ],
    };

    await mailjet.post('send', { version: 'v3.1' }).request(data);

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
