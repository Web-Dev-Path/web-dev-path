import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Card from '@/components/containers/Card/Card';
import Container from '@/components/containers/Container';
import styles from '@/styles/CardsColumns.module.scss';

export default function CardsColumns({ cards, customClass }) {
  return (
    <Container>
      <div
        className={
          customClass
            ? `${styles.cardColumns} ${styles[customClass]}`
            : styles.cardColumns
        }
      >
        <Swiper
          className={styles.swiper}
          mousewheel={true}
          grabCursor={true}
          modules={[Pagination]}
          pagination
          centerInsufficientSlides={false}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1334:
              customClass === 'blog'
                ? {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  }
                : {
                    slidesPerView: cards.length,
                    spaceBetween: cards.length < 3 ? 75 : 20,
                  },
          }}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <div className={styles.inner__content}>
                <Card key={index} card={card} $cardType={customClass} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
}
