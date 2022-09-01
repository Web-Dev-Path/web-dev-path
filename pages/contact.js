import ContactUsForm from "./ContactUsForm"
import Container from "@/components/containers/Container";
import contactUsFormStyles from "@/styles/Contact.module.scss"

export default function ContactUs() {
  return (
  <section className={contactUsFormStyles.contact}>
    <ContactUsForm />
  </section>
  );
}
