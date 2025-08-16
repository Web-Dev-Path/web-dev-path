import { useState } from 'react';
import ContactUsFormSubscribe from '@/components/ContactUs';
import ContactUsCards from '@/components/ContactUs/ContactUsCards';
import styles from '@/styles/pages/contact.module.scss';
import Bracket from '@/components/decorations/Bracket';
import bracketStyles from '@/components/decorations/Bracket/Bracket.module.scss';
export default function ContactUs() {
  const [message, setMessage] = useState([]);

  return (
    <>
      <div className={styles.contactUsContainer}>
        <div className={styles.formAndDecorations}>
          <Bracket className={bracketStyles.yellowBracket} />
          <ContactUsFormSubscribe setMsg={setMessage} />
          <img
            className={styles.yellowColon}
            src='/images/svg/yellow-colon.svg'
            alt=''
          />
          <div className={styles.responseMessage}>
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
