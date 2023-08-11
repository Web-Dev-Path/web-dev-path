import { CardColumn } from 'types';
import { CardsColumnsInterface } from './CardColumnsInterface';
import { ContactUsCard } from '@/components/containers/Card/ContactUsCard';

export function ContactCardsColumns({ cards }: CardColumn) {
  return <CardsColumnsInterface cards={cards} cardComponent={ContactUsCard} />;
}
