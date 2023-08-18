import MailchimpSubscribe from 'react-mailchimp-subscribe';
import NewsletterForm from '@/components/mailchimp/NewsletterForm';

const NewsletterSubscribe = () => {
  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={props => {
        const { subscribe, status, message } = props || {};
        return (
          <NewsletterForm
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
            // onValidated={formData => {
            //   console.log("status + message: ", status, message);
            //   const t = subscribe(formData);
            //   console.log("ttttttttttttt: ", t);
            //   console.log("status + message: ", status, message);
            // }}
          />
        );
      }}
    />
  );
};

export default NewsletterSubscribe;
