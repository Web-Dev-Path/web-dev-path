import ButtonLink from '@/components/buttons/ButtonLink';
import TwoColumnStyles from './styles';

export default function TwoColumn({
  image,
  altTag,
  title,
  content,
  rowOrder,
  color,
  bgColor,
  link,
  customBtnClass,
  $btnColorScheme,
  linkText = 'Learn more',
  secondTextColumn,
  openNewTab,
  $contentType,
}) {
  //Set Styles based on content type
  const S = TwoColumnStyles[$contentType]
    ? TwoColumnStyles[$contentType]
    : TwoColumnStyles.base;

  // Add rowOrder="row-reverse" prop to the component to reverse its order on desktop
  return (
    <S.TwoColumnWrapper $color={color} $bgColor={bgColor}>
      <S.InnerContainer
        $contentType={$contentType}
        styles={{ flexDirection: rowOrder }}
      >
        <S.InnerContent $contentType={$contentType}>
          {title && <S.Title $color={color}>{title}</S.Title>}
          <S.Content $contentType={$contentType}>{content}</S.Content>
          {link && (
            <ButtonLink
              link={link}
              $colorScheme={$btnColorScheme}
              openNewTab={openNewTab}
            >
              {linkText}
            </ButtonLink>
          )}
        </S.InnerContent>
        {secondTextColumn && secondTextColumn}
        {!secondTextColumn && image && (
          <S.InnerImageWrapper $contentType={$contentType}>
            <S.InnerImage
              $contentType={$contentType}
              src={image}
              alt={altTag}
              fill
            />
          </S.InnerImageWrapper>
        )}
      </S.InnerContainer>
    </S.TwoColumnWrapper>
  );
}
