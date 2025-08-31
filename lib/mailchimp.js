const API_KEY = process.env.MAILCHIMP_API_KEY;
const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
const API_SERVER = API_KEY?.split('-')[1];

if (!API_KEY || !AUDIENCE_ID || !API_SERVER) {
  throw new Error('Mailchimp environment variables are not set correctly.');
}

export async function subscribeToMailchimp(email, firstName) {
  const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `apikey ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: firstName,
      },
    }),
  });

  const data = await response.json();

  if (response.status == 200 || data.title === 'Member Exists') {
    return { success: true };
  }
  return { success: false, error: data };
}
