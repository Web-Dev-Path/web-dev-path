import { CardInterface } from './CardInterface';
import { BlogCardStyles } from './styles';

export function BlogCard({ card }) {
  return <CardInterface card={card} styledComponents={BlogCardStyles} />;
}
