import { CardInterface } from './CardInterface';
import { CardStyles } from './styles';

export function Card({ card }) {
  return <CardInterface card={card} styledComponents={CardStyles} />;
}
