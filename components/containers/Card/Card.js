import Image from 'next/image';
import Link from 'next/link';
// import styles from '@/styles/Card.module.scss';
import S from './styles';
import { Tag } from '@/components/blog/Tag/Tag';

export default function Card({
  card: { image, altTag, title, content, link, linkText, tagList },
  $cardType,
}) {
  const LinkComponent = link?.startsWith('http') ? (
    <a href={link} target='_blank' rel='noopener noreferrer'>
      {linkText}
    </a>
  ) : (
    <Link href={link}>{linkText}</Link>
  );
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
