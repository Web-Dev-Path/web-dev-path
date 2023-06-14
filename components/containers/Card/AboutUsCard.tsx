import { CardInterface } from './CardInterface';
import { AboutUsCardStyles } from './styles';

export function AboutUsCard({ card }) {
  return <CardInterface card={card} styledComponents={AboutUsCardStyles} />;
}
