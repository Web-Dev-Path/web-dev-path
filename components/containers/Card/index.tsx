import { CardProps } from 'types';
import { CardInterface } from './CardInterface';
import { CardStyles } from './styles';

export function Card({ card }: CardProps) {
  return <CardInterface card={card} styledComponents={CardStyles} />;
}
