import { CardsColumnsInterface } from './CardColumnsInterface';
import { AboutUsCard } from '@/components/containers/Card/AboutUsCard';

export function OurGoalsCardsColumns({ cards }) {
  return <CardsColumnsInterface cards={cards} cardComponent={AboutUsCard} />;
}
