import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  Thumbs,
  EffectFade,
  EffectCube,
  Scrollbar,
  A11y,
} from 'swiper';
import swiper from 'swiper/swiper-bundle.css';
// import 'swiper/swiper.scss';
// import 'swiper/components/effect-fade/effect-fade.scss';
import './styles.css';

SwiperCore.use([
  Navigation,
  Pagination,
  Thumbs,
  EffectFade,
  EffectCube,
  Scrollbar,
  A11y,
]);

function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const slides = [];
  const thumbs = [];

  for (let i = 0; i < 6; i += 1) {
    slides.push(
      <SwiperSlide key={`slider-${i}`} tag="li">
        <img
          src={`https://picsum.photos/id/${i + 1}/1400/600`}
          style={{ listStyle: 'none' }}
          alt={`Slide ${1}`}
        />
      </SwiperSlide>
    );
  }

  for (let i = 0; i < 6; i += 1) {
    thumbs.push(
      <SwiperSlide key={`thumbs-${i}`} tag="li">
        <img
          src={`https://picsum.photos/id/${i}/600/150`}
          alt={`thumbnail ${i}`}
        />
      </SwiperSlide>
    );
  }
  return (
    <>
      <Swiper
        id="main"
        thumbs={{ swiper: thumbsSwiper }}
        tag="section"
        wrapperTag="ul"
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        scrollbar={{ draggable: true }}
        onInit={(swiper) => console.log('Swiper initialized', swiper)}
        onSlideChange={(swiper) =>
          console.log('Slide index Swiper on change :', swiper.activeIndex)
        }
        onReachEnd={(swiper) => console.log('Swiper and onReachEnd')}>
        {slides}
      </Swiper>

      <Swiper
        id="thumbs"
        spaceBetween={5}
        slidesPerView={4}
        pagination={{ clickable: true }}
        watchSlidesVisibility
        watchSlidesProgress
        onSwiper={setThumbsSwiper}>
        {thumbs}
      </Swiper>
    </>
  );
}

export default App;
