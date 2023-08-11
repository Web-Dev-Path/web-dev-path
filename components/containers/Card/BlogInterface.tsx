import { Tag } from '@/components/blog/Tag';
import Link from 'next/link';
import { CardProps } from 'types';

export function BlogInterface({ card, styledComponents }: CardProps) {
  const LinkComponent = card?.link?.startsWith('http') ? (
    <a href={card?.link} target='_blank' rel='noopener noreferrer'>
      {card?.linkText}
    </a>
  ) : (
    <Link href={card?.link ?? '/'}>{card?.linkText}</Link>
  );
  const S = styledComponents;

  return (
    <S.Card>
      {card?.image && (
        <S.ImageWrapper>
          <S.CardImage src={card?.image} alt={card?.altTag} fill />
        </S.ImageWrapper>
      )}

      <S.Title title={card?.title}>{card?.title}</S.Title>
      {card?.tagList && card?.tagList.length > 0 ? (
        <S.TagContainer>
          {card?.tagList.slice(0, 8).map((tag, i) => (
            <Tag key={i} text={tag} />
          ))}
        </S.TagContainer>
      ) : null}
      <S.ContentWrapper>
        <p>
          {card?.content} {card?.link && LinkComponent}
        </p>
      </S.ContentWrapper>
    </S.Card>
  );
}
