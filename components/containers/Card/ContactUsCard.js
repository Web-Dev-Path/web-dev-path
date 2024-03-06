import { CardInterface } from './CardInterface';
import { ContactUsCardStyles } from './styles';

export function ContactUsCard({ card }) {
  return <CardInterface card={card} styledComponents={ContactUsCardStyles} />;
}
