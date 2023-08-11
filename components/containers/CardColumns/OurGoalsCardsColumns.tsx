import { CardColumn } from 'types';
import { CardsColumnsInterface } from './CardColumnsInterface';
import { AboutUsCard } from '@/components/containers/Card/AboutUsCard';

export function OurGoalsCardsColumns({ cards }: CardColumn) {
  return <CardsColumnsInterface cards={cards} cardComponent={AboutUsCard} />;
}
