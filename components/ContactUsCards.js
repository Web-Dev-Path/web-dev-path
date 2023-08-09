import { ContactCardsColumns } from './containers/CardColumns/ContactCardsColumns';
import RevealContentContainer from './containers/RevealContentContainer';
import styled from 'styled-components';
import { $white } from '@/styles/_variables';

const cards = [
  {
    title: 'FAQ',
    image: '/images/svg/faq-icon.svg',
    altTag: 'FAQ',
    content: 'Where you can find the main questions about the project.',
    link: 'https://github.com/Web-Dev-Path/web-dev-path/wiki/FAQ',
    linkText: 'Learn more',
  },
  {
    title: 'Blog',
    image: '/images/svg/blog-icon.svg',
    altTag: 'Blog',
    content:
      'Where we share our projects, knowledge, and ideas to the whole tech community.',
    link: '/blog',
    linkText: 'Learn more',
  },
  {
    title: 'Repository',
    image: '/images/svg/repository-icon.svg',
    altTag: 'Repository',
    content: 'Where to find our codebase and guidelines.',
    link: 'https://github.com/Web-Dev-Path/web-dev-path',
    linkText: 'Learn more',
  },
];

const ContactCardsContainer = styled.div`
  background-color: ${$white};
`;

export default function ContactUsCards() {
  return (
    <ContactCardsContainer>
      <RevealContentContainer>
        <ContactCardsColumns cards={cards} />
      </RevealContentContainer>
    </ContactCardsContainer>
  );
}
