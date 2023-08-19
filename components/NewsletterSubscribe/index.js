import Mailchimp from '../Mailchimp';
import NewsletterForm from '@/components/NewsletterSubscribe/NewsletterForm';

const NewsletterSubscribe = () => {
  return <Mailchimp child={<NewsletterForm />} />;
};

export default NewsletterSubscribe;
