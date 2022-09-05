import ContactUsForm from './ContactUsForm';
import contactUsFormStyles from '@/styles/Contact.module.scss';
import Bracket from '@/components/decorations/Bracket';

export default function ContactUs() {
  return (
    <div className={contactUsFormStyles.contact}>
      <div className={contactUsFormStyles.contact__formAndDecorations}>
        <Bracket className={contactUsFormStyles.contact__yellowBracket} />
        <ContactUsForm 
          customClassName={contactUsFormStyles.contact__button}
          type='submit'
          link='/'
          linkText='Submit'
        />
        <img
          src='/images/svg/yellow-colon.svg'
          className={contactUsFormStyles.contact__yellowColon}
        />
      </div>
    </div>
  );
}
