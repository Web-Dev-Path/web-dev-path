import { CardColumn } from 'types';
import { CardsColumnsInterface } from './CardColumnsInterface';
import { Card } from '@/components/containers/Card';

export function CardsColumns({ cards }: CardColumn) {
  return <CardsColumnsInterface cards={cards} cardComponent={Card} />;
}
