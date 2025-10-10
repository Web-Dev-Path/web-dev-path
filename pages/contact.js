import { useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Bracket from '@/components/decorations/Bracket';
import bracketStyles from '@/components/decorations/Bracket/Bracket.module.scss';
import ContactUsCards from '@/components/ContactUs/ContactUsCards';
import ContactUsFormSubscribe from '@/components/ContactUs';
import styles from '@/styles/pages/contact.module.scss';
export default function ContactUs() {
  const subjectFilled = useRef(false);
  const searchParams = useSearchParams();
  const subjectParam = searchParams.get('subject');
  const [param, setParam] = useState(subjectParam || '');
  const [message, setMessage] = useState([]);

  function updateSubject(state, value) {
    subjectFilled.current = state;
    setParam(value);
  }

  subjectParam && !subjectFilled.current && updateSubject(true, subjectParam);
  !subjectParam && subjectFilled.current && updateSubject(false, '');

  return (
    <>
      <div className={styles.contactUsContainer}>
        <div className={styles.formWrapper}>
          <div className={styles.formAndDecorations}>
            <Bracket className={bracketStyles.yellowBracket} />
            <ContactUsFormSubscribe
              key={param}
              subject={param}
              setMsg={setMessage}
            />
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
      </div>
      <ContactUsCards />
    </>
  );
}
