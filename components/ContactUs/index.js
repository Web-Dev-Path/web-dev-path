import React from 'react';
import ReCapchaWrapper from '../Recapcha';
import ContactUsForm from '@/components/ContactUs/ContactUsForm';

const ContactUs = ({ setMsg }) => {
  return (
    <ReCapchaWrapper children={<ContactUsForm setResponseMessage={setMsg} />} />
  );
};

export default ContactUs;
