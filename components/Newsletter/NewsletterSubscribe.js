import Mailchimp from '../Mailchimp';
import NewsletterForm from '@/components/Newsletter/NewsletterForm';

const NewsletterSubscribe = () => {
  return <Mailchimp child={<NewsletterForm />} />;
};

export default NewsletterSubscribe;
