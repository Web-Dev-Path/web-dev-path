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
            'images/svg/FAQ-icon.jpg',
            'images/svg/blog-icon.svg',
            'images/svg/resository-icon.svg',
          ]}
          altTags={['FAQ', 'Blog', 'Repository']}
          content={[
            'You can find the main questions about the project.',
            'You can share your projects and ideas to all our community.',
            'You can see most used codes, guidelines and more.',
          ]}
          // links={['/about', '/blog', 'https://github.com/Web-Dev-Path']}
          customClass='cards'
        />
      </RevealContentContainer>
    </div>
  );
}
