import React from 'react';
import "./carousel.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


function Carousel() {
  return (
    <section className='h-[600px]'>
      <Swiper
        slidesPerView={1}
        className='h-[60%]'
        spaceBetween={30}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
      >
        <SwiperSlide><div className='swiper-slide-content'><img src='../src/assets/banner-1.jpg' className='slide-img' /></div></SwiperSlide>
        <SwiperSlide><div className='swiper-slide-content'><img src='../src/assets/banner-2.jpg' className='slide-img' /></div></SwiperSlide>
        <SwiperSlide><div className='swiper-slide-content'><img src='../src/assets/banner-3.jpg' className='slide-img' /></div></SwiperSlide>
        <SwiperSlide><div className='swiper-slide-content'><img src='../src/assets/banner-4.jpg' className='slide-img' /></div></SwiperSlide>
        <SwiperSlide><div className='swiper-slide-content'><img src='../src/assets/banner-5.jpg' className='slide-img' /></div></SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Carousel;
