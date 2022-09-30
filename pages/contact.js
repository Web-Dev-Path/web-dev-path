import { useState } from 'react';
import { ContactUsFormSubscribe } from '../components/ContactUsForm';
import contactUsFormStyles from '@/styles/Contact.module.scss';
import Bracket from '@/components/decorations/Bracket';

export default function ContactUs() {
  const [message, setMessage] = useState([]);
  const [subStatus, setSubStatus] = useState('');
  const [subMsg, setSubMsg] = useState('');

  return (
    <div className={contactUsFormStyles.contact}>
      <div className={contactUsFormStyles.contact__formAndDecorations}>
        <Bracket className={contactUsFormStyles.contact__yellowBracket} />
        <div>
          <ContactUsFormSubscribe
            setMsg={setMessage}
            setSubStatus={setSubStatus}
            setSubMsg={setSubMsg} />
          <div className={contactUsFormStyles.contact__response_message}>
            {message?.map(m => <>{m}<br /></>)}
            {subStatus && `Subscription Status: ${subStatus}`}<br />
            {subMsg}
          </div>
        </div>
        <img
          src='/images/svg/yellow-colon.svg'
          className={contactUsFormStyles.contact__yellowColon}
        />
      </div>

    </div>
  );
}
