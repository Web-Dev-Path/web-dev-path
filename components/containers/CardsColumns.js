import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
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
  customClass,
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
            slidesPerView: titles.length,
            spaceBetween: titles.length < 3 ? 75 : 20,
          },
        }}
      >
        {titles.map((title, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div className={styles.inner__content}>
              {images && links && linkText ? (
                <Card
                  key={index}
                  title={title}
                  image={images[index]}
                  altTag={altTags[index]}
                  content={content[index]}
                  link={links[index]}
                  linkText={linkText[index]}
                  customClass={customClass}
                />
              ) : (
                <Card
                  key={index}
                  title={title}
                  content={content[index]}
                  customClass={customClass}
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
