import Image from 'next/image';
import { cloneElement } from 'react';
import Link from 'next/link';
import { Tag } from '@/components/blog/Tag';

export function CardInterface({
  card: { image, altTag, title, content, link, linkText, tagList },
  styledComponents,
  $cardType,
}) {
  const LinkComponent = link?.startsWith('http') ? (
    <a href={link} target='_blank' rel='noopener noreferrer'>
      {linkText}
    </a>
  ) : (
    <Link href={link}>{linkText}</Link>
  );
  const S = styledComponents;
  return (
    <S.Card $cardType={$cardType}>
      {image && (
        <S.ImageWrapper $cardType={$cardType}>
          <S.CardImage src={image} alt={altTag} $cardType={$cardType} fill />
        </S.ImageWrapper>
      )}

      <S.Title $cardType={$cardType} title={title}>
        {title}
      </S.Title>
      {tagList && tagList.length > 0 ? (
        <S.TagContainer>
          {tagList.slice(0, 8).map((tag, i) => (
            <Tag key={i} text={tag} />
          ))}
        </S.TagContainer>
      ) : null}
      <S.ContentWrapper $cardType={$cardType}>
        <p>
          {content} {link && LinkComponent}
        </p>
      </S.ContentWrapper>
    </S.Card>
  );
}

// export const ContactCard = cloneElement(Card, { $cardType: 'contact-cards' });
