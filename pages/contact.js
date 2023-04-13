import { useState } from 'react';
import { ContactUsFormSubscribe } from '@/components/ContactUsForm/ContactUsForm';
import ContactUsCards from '@/components/ContactUsCards';
import contactUsFormStyles from '@/styles/Contact.module.scss';
import Bracket from '@/components/decorations/Bracket';

export default function ContactUs() {
  const [message, setMessage] = useState([]);

  return (
    <>
      <div className={contactUsFormStyles.contact}>
        <div className={contactUsFormStyles.contact__formAndDecorations}>
          <Bracket className={contactUsFormStyles.contact__yellowBracket} />
          <ContactUsFormSubscribe setMsg={setMessage} />
          <img
            src='/images/svg/yellow-colon.svg'
            className={contactUsFormStyles.contact__yellowColon}
          />
          <div className={contactUsFormStyles.contact__response_message}>
            {message?.map((m, i) => (
              <span key={i}>
                {m}
                <br />
              </span>
            ))}
          </div>
        </div>
      </div>
      <ContactUsCards />
    </>
  );
}
