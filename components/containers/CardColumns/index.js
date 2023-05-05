import { CardsColumnsInterface } from './CardColumnsInterface';
import { Card } from '@/components/containers/Card';

export function CardsColumns({ cards }) {
  return <CardsColumnsInterface cards={cards} cardComponent={Card} />;
}
