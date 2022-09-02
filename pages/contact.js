import ContactUsForm from './ContactUsForm';
import contactUsFormStyles from '@/styles/Contact.module.scss';

export default function ContactUs() {
  return (
    <div className={contactUsFormStyles.contact}>
      <div className={contactUsFormStyles.formAndDecorations}>
        <img src='/images/svg/yellow-bracket.svg' />
        <ContactUsForm />
        <img src='/images/svg/yellow-colon.svg' />
      </div>
    </div>
  );
}
