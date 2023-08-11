import { Tag } from '@/components/blog/Tag';
import Link from 'next/link';
import { CardProps } from 'types';

export function CardInterface({ card, styledComponents }: CardProps) {
  const { image, altTag, title, content, link, linkText, tagList } = card;

  const LinkComponent = link?.startsWith('http') ? (
    <a href={link} target='_blank' rel='noopener noreferrer'>
      {linkText}
    </a>
  ) : (
    <Link href={link ?? '/'}>{linkText}</Link>
  );
  const S = styledComponents;

  return (
    <S.Card>
      {image && (
        <S.ImageWrapper>
          <S.CardImage src={image} alt={altTag} fill />
        </S.ImageWrapper>
      )}

      <S.Title title={title}>{title}</S.Title>
      {tagList && tagList.length > 0 ? (
        <S.TagContainer>
          {tagList.slice(0, 8).map((tag, i) => (
            <Tag key={i} text={tag} />
          ))}
        </S.TagContainer>
      ) : null}
      <S.ContentWrapper>
        <p>
          {content} {link && LinkComponent}
        </p>
      </S.ContentWrapper>
    </S.Card>
  );
}
