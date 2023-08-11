import { BlogInterface } from './BlogInterface';
import { BlogCardStyles } from './styles';
import { CardProps } from 'types';

export function BlogCard({ card }: CardProps) {
  return <BlogInterface card={card} styledComponents={BlogCardStyles} />;
}
