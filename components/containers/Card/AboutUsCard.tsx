import { CardProps } from 'types';
import { CardInterface } from './CardInterface';
import { AboutUsCardStyles } from './styles';

export function AboutUsCard({ card }: CardProps) {
  return <CardInterface card={card} styledComponents={AboutUsCardStyles} />;
}
