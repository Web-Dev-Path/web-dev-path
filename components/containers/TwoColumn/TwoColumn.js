import Image from 'next/image';
import ButtonLink from '@/components/buttons/ButtonLink/ButtonLink';
import Container from '@/components/containers/Container/Container';
import * as TwoColumnStyles from './styles';

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
  $contentType,
}) {
  //Set Styles base don content type
  let S;
  switch ($contentType) {
    case 'our-process':
      S = TwoColumnStyles.OurProcess;
    case 'get-started':
      S = TwoColumnStyles.GetStarted;
    case 'our-purpose':
      S = TwoColumnStyles.OurPurpose;
    case 'our-background':
      S = TwoColumnStyles.OurBackground;
    case 'get-involved':
      S = TwoColumnStyles.GetInvolved;
    case 'non-profit':
      S = TwoColumnStyles.NonProfit;
    case 'wanna-learn-more':
      S = TwoColumnStyles.WannaLearnMore;
    case 'questions':
      S = TwoColumnStyles.QuestionsMore;
    case 'two-text-columns':
      S = TwoColumnStyles.TwoTextColumns;
    case 'second-text-column':
      S = TwoColumnStyles.SecondTextColumn;
    default:
      S = TwoColumnStyles.Base;
  }
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
              customClassName={customBtnClass}
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
