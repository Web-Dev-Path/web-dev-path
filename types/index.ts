import { ReactNode } from 'react';

interface TwoColumn {
  image: string;
  altTag: string;
  title: string;
  content: ReactNode;
  rowOrder: string;
  color: any;
  bgColor: any;
  link: string;
  customBtnClass: string;
  $colorScheme?: string;
  linkText: string;
  secondTextColumn: ReactNode;
  openNewTab: boolean;
  $contentType: any;
}

export type TwoColumnProps = Partial<TwoColumn>;

export interface ContainerProps {
  className?: string;
  styles?: object;
  children: ReactNode;
}

export interface RowProps {
  customClass?: string;
  children: ReactNode;
}

export interface BlogPost {
  title: string;
  image: string;
  altTag: string;
  content: string;
  link: string;
  linkText: string;
  tagList: string[];
}

export type Posts = {
  posts: BlogPost[];
  image: string;
};

export interface BlogContainer {
  posts: BlogPost[];
  heading: string;
  tag: string;
  swipe: boolean;
  viewall: boolean;
  back: boolean;
}

export interface PostResponse {
  title: string;
  cover_image: string;
  description: string;
  url: string;
  tag_list: string;
}

export type Path = {
  params: { tag: string };
};

export interface CardProps {
  card: {
    image?: string;
    altTag?: string;
    title?: string;
    content?: ReactNode | string;
    link?: string;
    linkText?: string;
    tagList?: string[];
  };
  styledComponents?: any;
}

export interface CardColumn {
  cards: Partial<CardProps[] | BlogPost[]>;
  cardComponent?: any;
  customClass?: string;
}
