import ReCapchaWrapper from '../Recapcha';
import NewsletterForm from '@/components/NewsletterSubscribe/NewsletterForm';

const NewsletterSubscribe = () => {
  return <ReCapchaWrapper children={<NewsletterForm />} />;
};

export default NewsletterSubscribe;
