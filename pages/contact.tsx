import { useState } from 'react';
import { ContactUsFormSubscribe } from '@/components/ContactUsForm';
import ContactUsCards from '@/components/ContactUsCards';
import S from '@/styles/pages/contactStyles';

export default function ContactUs() {
  const [message, setMessage] = useState([]);

  return (
    <>
      <S.ContactUsContainer>
        <S.FormAndDecorations>
          <S.YellowBracket />
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
