import contactCardStyles from '@/styles/ContactUsCards.module.scss';
import CardsColumns from './containers/CardsColumns';
import RevealContentContainer from './containers/RevealContentContainer';

export default function ContactUsCards() {
  return (
    <div className={contactCardStyles.contactCards}>
      <RevealContentContainer>
        <CardsColumns
          titles={['FAQ', 'Blog', 'Repository']}
          images={[
            '/images/svg/faq-icon.svg',
            '/images/svg/blog-icon.svg',
            '/images/svg/repository-icon.svg',
          ]}
          altTags={['FAQ', 'Blog', 'Repository']}
          content={[
            'Find the main questions about the project.',
            'Share your projects and ideas with our community.',
            'Check out our codebase and guidelines.',
          ]}
          links={[
            'https://github.com/Web-Dev-Path/web-dev-path/wiki/FAQ',
            '/blog',
            'https://github.com/Web-Dev-Path/web-dev-path',
          ]}
          linkText={['Our FAQ', 'Our Blog', 'Our Repository']}
          customClass='contact-cards'
        />
      </RevealContentContainer>
    </div>
  );
}
