import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";

import Card from './Card';
import Container from './Container';
import styles from '../styles/CardsColumns.module.scss';

export default function CardsColumns({
  images,
  altTags,
  titles,
  content,
  links,
  linkText,
}) {
  return (
      <Container>
        <Swiper
          mousewheel={true}
          grabCursor={true}
          navigation={true}
          pagination={true} modules={[Pagination]}
          centerInsufficientSlides={true}
          slidesPerView={1}
          breakpoints={{
            780: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1334: {
              slidesPerView: 3,
              spaceBetween: 50,
            }
          }}
        >
          {titles.map((title, index) =>
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <div className={styles.inner__content}>
                <Card
                  title={title}
                  image={images[index]}
                  altTag={altTags[index]}
                  content={content[index]}
                  link={links[index]}
                  linkText={linkText[index]}
                  key={index}
                />
              </div>
            </SwiperSlide>
          )}

        </Swiper>
      </Container>
  );
}
