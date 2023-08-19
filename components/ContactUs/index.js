import React from 'react';
import Mailchimp from '../Mailchimp';
import ContactUsForm from '@/components/ContactUs/ContactUsForm';

const ContactUs = ({ setMsg }) => {
  // ContactUsForm component is not handling message (printing "Success" and so on),
  // because it is being done externally - see /pages/contact.js.
  // So, it requires the function (setMsg) to be passed down as a prop to <ContactUsForm>.
  // Just pointing since it is a different approach used by Newsletter component.

  return <Mailchimp child={<ContactUsForm setResponseMessage={setMsg} />} />;
};

export default ContactUs;
