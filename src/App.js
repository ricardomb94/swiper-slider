import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import swiper from 'swiper/swiper-bundle.css';
import './styles.css';

SwiperCore.use([Navigation, Pagination]);

function App() {
  const slides = [];

  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide key={`slider-${i}`} tag="li">
        <img
          src={`https://picsum.photos/id/${i + 1}/500/300`}
          style={{ listStyle: 'none' }}
          alt={`Slide ${1}`}
        />
      </SwiperSlide>
    );
  }
  return (
    <>
      <Swiper
        id="main"
        tag="section"
        wrapperTag="ul"
        navigation
        pagination
        spaceBetween={0}
        slidesperview={1}
        onInit={(swiper) => console.log('Swiper initialized', swiper)}
        onSlideChange={(swiper) =>
          console.log('Slide index Swiper on change :', swiper.activeIndex)
        }
        onReachEnd={(swiper) => console.log('Swiper and onReachEnd')}>
        {slides}
      </Swiper>
    </>
  );
}

export default App;
