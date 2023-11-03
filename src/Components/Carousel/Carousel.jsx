import React from 'react';
import "./carousel.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import banner1 from "../../assets/banner-1.jpg";
import banner2 from "../../assets/banner-2.jpg";
import banner3 from "../../assets/banner-3.jpg";
import banner4 from "../../assets/banner-4.jpg";
import banner5 from "../../assets/banner-5.jpg";




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
        <SwiperSlide><div className='swiper-slide-content'><img src={banner1} className='slide-img' /></div></SwiperSlide>
        <SwiperSlide><div className='swiper-slide-content'><img src={banner2} className='slide-img' /></div></SwiperSlide>
        <SwiperSlide><div className='swiper-slide-content'><img src={banner3} className='slide-img' /></div></SwiperSlide>
        <SwiperSlide><div className='swiper-slide-content'><img src={banner4} className='slide-img' /></div></SwiperSlide>
        <SwiperSlide><div className='swiper-slide-content'><img src={banner5} className='slide-img' /></div></SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Carousel;
