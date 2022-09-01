import ContactUsForm from "./ContactUsForm"
import contactUsFormStyles from "@/styles/Contact.module.scss"

export default function ContactUs() {
  return (
  <section className={contactUsFormStyles.contact}>
    <ContactUsForm />
  </section>
  );
}
