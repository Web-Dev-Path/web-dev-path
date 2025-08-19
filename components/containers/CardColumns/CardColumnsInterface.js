import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Container from '@/components/containers/Container';
import styles from './CardColumnsInterface.module.scss';

export function CardsColumnsInterface({ cards, customClass, cardComponent }) {
  const Card = cardComponent;
  return (
    <Container>
      <Swiper
        className={styles.cardColumnSwiper}
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
          <SwiperSlide key={index}>
            <div className={styles.innerContent}>
              <Card key={index} card={card} $cardType={customClass} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
