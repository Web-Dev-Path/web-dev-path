import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Card from '@/components/containers/Card';
import Container from '@/components/containers/Container';
import styles from '@/styles/CardsColumns.module.scss';

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
        className={styles.swiper}
        mousewheel={true}
        grabCursor={true}
        modules={[Pagination]}
        pagination
        centerInsufficientSlides={true}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1334: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {titles.map((title, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div className={styles.inner__content}>
              {images ? (
                <Card
                  title={title}
                  image={images[index]}
                  altTag={altTags[index]}
                  content={content[index]}
                  link={links ? links[index] : undefined}
                  linkText={linkText ? linkText[index] : undefined}
                  key={index}
                />
              ) : (
                <Card
                  title={title}
                  content={content[index]}
                  link={links ? links[index] : undefined}
                  linkText={linkText ? linkText[index] : undefined}
                  key={index}
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
