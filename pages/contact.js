import { useState } from 'react';
import ContactUsFormSubscribe from '@/components/ContactUs';
import ContactUsCards from '@/components/ContactUs/ContactUsCards';
import S from '@/styles/pages/contactStyles';
import Bracket from '@/components/decorations/Bracket';
import bracketStyles from '@/components/decorations/Bracket/Bracket.module.scss';
export default function ContactUs() {
  const [message, setMessage] = useState([]);

  return (
    <>
      <S.ContactUsContainer>
        <S.FormAndDecorations>
          <Bracket className={bracketStyles.yellowBracket} />
          <ContactUsFormSubscribe setMsg={setMessage} />
          <S.YellowColon src='/images/svg/yellow-colon.svg' />
          <S.ResponseMessage>
            {message?.map((m, i) => (
              <span key={i}>
                {m}
                <br />
              </span>
            ))}
          </S.ResponseMessage>
        </S.FormAndDecorations>
      </S.ContactUsContainer>
      <ContactUsCards />
    </>
  );
}
