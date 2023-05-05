import { CardsColumnsInterface } from './CardColumnsInterface';
import { BlogCard } from '@/components/containers/Card/BlogCard';

export function BlogCardsColumns({ cards }) {
  return (
    <CardsColumnsInterface
      cards={cards}
      cardComponent={BlogCard}
      customClass='blog'
    />
  );
}
