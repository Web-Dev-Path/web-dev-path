import { SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Container from '@/components/containers/Container';
import * as S from './styles';

export function CardsColumnsInterface({ cards, customClass, cardComponent }) {
  const Card = cardComponent;
  return (
    <Container>
      <div>
        <S.Swiper
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
              <S.InnerContent>
                <Card key={index} card={card} $cardType={customClass} />
              </S.InnerContent>
            </SwiperSlide>
          ))}
        </S.Swiper>
      </div>
    </Container>
  );
}
