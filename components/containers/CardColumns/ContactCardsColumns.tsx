import { CardsColumnsInterface } from './CardColumnsInterface';
import { ContactUsCard } from '@/components/containers/Card/ContactUsCard';

export function ContactCardsColumns({ cards }) {
  return <CardsColumnsInterface cards={cards} cardComponent={ContactUsCard} />;
}
