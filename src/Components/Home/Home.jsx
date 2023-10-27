import { Header, Product } from '../index';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { FcNext, FcPrevious } from "react-icons/fc";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./home.css";
import "../../index.css";

const Home = () => {
  return (
    <div>
      <Header />
      <section>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          // Navigation={{
          //   nextEl: ".my-next-button",
          //   prevEl: ".my-prev-button"
          // }}
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
          {/* <div className='my-next-button' onClick={() => swiper.navigationNext()}><FcNext /></div>
          <div className='my-prev-button' onClick={() => swiper.slidePrev()}><FcPrevious /></div> */}
        </Swiper>
      </section>
      <Product />
    </div >
  );
};

export default Home;
