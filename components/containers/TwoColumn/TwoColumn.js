import Image from 'next/image';
import ButtonLink from '@/components/buttons/ButtonLink/ButtonLink';
import Container from '@/components/containers/Container/Container';
import styles from '@/styles/TwoColumn.module.scss';
import S from './styles';

export default function TwoColumn({
  image,
  altTag,
  title,
  content,
  rowOrder,
  color,
  bgColor,
  link,
  customInnerClass,
  customBtnClass,
  linkText = 'Learn more',
  secondTextColumn,
  openNewTab,
}) {
  // Add rowOrder="row-reverse" prop to the component to reverse its order on desktop

  return (
    <S.TwoColumnWrapper
      className={styles.wrapper}
      $color={color}
      $bgColor={bgColor}
    >
      <Container
        customClass={
          customInnerClass
            ? `${styles.inner} ${styles[customInnerClass]}`
            : styles.inner
        }
        styles={{ flexDirection: rowOrder }}
      >
        <S.InnerContent>
          {title && <S.Title $color={color}>{title}</S.Title>}
          <S.Content>{content}</S.Content>
          {link && (
            <ButtonLink
              link={link}
              customClassName={customBtnClass}
              openNewTab={openNewTab}
            >
              {linkText}
            </ButtonLink>
          )}
        </S.InnerContent>
        {secondTextColumn && secondTextColumn}
        {!secondTextColumn && image && (
          <S.InnerImageWrapper>
            <S.InnerImage src={image} alt={altTag} fill />
          </S.InnerImageWrapper>
        )}
      </Container>
    </S.TwoColumnWrapper>
  );
}
