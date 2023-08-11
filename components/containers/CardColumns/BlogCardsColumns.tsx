import { CardColumn } from 'types';
import { CardsColumnsInterface } from './CardColumnsInterface';
import { BlogCard } from '@/components/containers/Card/BlogCard';

export function BlogCardsColumns({ cards }: CardColumn) {
  return (
    <CardsColumnsInterface
      cards={cards}
      cardComponent={BlogCard}
      customClass='blog'
    />
  );
}
