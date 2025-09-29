import React from 'react';
import ReCapchaWrapper from '../Recapcha';
import ContactUsForm from '@/components/ContactUs/ContactUsForm';

const ContactUs = ({ subject, setMsg }) => {
  return (
    <ReCapchaWrapper
      children={<ContactUsForm subject={subject} setResponseMessage={setMsg} />}
    />
  );
};

export default ContactUs;
