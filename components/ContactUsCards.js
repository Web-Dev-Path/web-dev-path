import contactCardStyles from '@/styles/ContactUsCards.module.scss';
import CardsColumns from './containers/CardsColumns';
import RevealContentContainer from './containers/RevealContentContainer';

const cards = [
  {
    title: 'FAQ',
    image: '/images/svg/faq-icon.svg',
    altTag: 'FAQ',
    content: 'You can find the main questions about the project.',
    link: 'https://github.com/Web-Dev-Path/web-dev-path/wiki/FAQ',
    linkText: 'Our FAQ',
  },
  {
    title: 'Blog',
    image: '/images/svg/blog-icon.svg',
    altTag: 'Blog',
    content: 'You can share your projects and ideas to all our community.',
    link: '/blog',
    linkText: 'Our Blog',
  },
  {
    title: 'Repository',
    image: '/images/svg/repository-icon.svg',
    altTag: 'Repository',
    content: 'You can see most used codes, guidelines and more.',
    link: 'https://github.com/Web-Dev-Path/web-dev-path',
    linkText: 'Our Repository',
  },
];

export default function ContactUsCards() {
  return (
    <div className={contactCardStyles.contactCards}>
      <RevealContentContainer>
        <CardsColumns cards={cards} customClass='contact-cards' />
      </RevealContentContainer>
    </div>
  );
}
