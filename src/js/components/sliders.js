import { auto } from '@popperjs/core';
import Swiper, { Navigation, EffectFade, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);


const careersSlider = new Swiper('.careers__slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  slidesPerView: auto,
  loop: true,
});
