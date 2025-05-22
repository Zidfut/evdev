import Swiper from 'swiper';
import 'swiper/css';

let swiperInstance = null;

function initSwiper() {
  const slider = document.querySelector(".hero__swiper");

  if (!slider) return;

  if (window.innerWidth <= 767) {
    if (!swiperInstance) {
      swiperInstance = new Swiper(slider, {
        slidesPerView: "auto",
        spaceBetween: 20,
        autoHeight: false,
      });
    }
  } else {
    if (swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }
  }
}

initSwiper();
window.addEventListener("resize", initSwiper);

