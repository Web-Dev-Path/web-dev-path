import { CardInterface } from './CardInterface';
import { CardStyles } from './styles';

export function ContactUsCard({ card }) {
  return <CardInterface card={card} styledComponents={CardStyles} />;
}
