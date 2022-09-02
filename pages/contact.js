import ContactUsForm from './ContactUsForm';
import contactUsFormStyles from '@/styles/Contact.module.scss';

export default function ContactUs() {
  return (
    <div className={contactUsFormStyles.contact}>
      <div className={contactUsFormStyles.contact__formAndDecorations}>
        <img src='/images/svg/yellow-bracket.svg' className={contactUsFormStyles.contact__yellowBracket} />
        <ContactUsForm />
        <img src='/images/svg/yellow-colon.svg'  className={contactUsFormStyles.contact__yellowColon} />
      </div>
    </div>
  );
}
