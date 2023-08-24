import React from 'react';
import Mailchimp from '../Mailchimp';
import ContactUsForm from '@/components/ContactUs/ContactUsForm';

const ContactUs = ({ setMsg }) => {
  return <Mailchimp child={<ContactUsForm setResponseMessage={setMsg} />} />;
};

export default ContactUs;
