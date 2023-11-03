import { Card, Header } from '../index';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./home.css";
import "../../index.css";

const Home = () => {
  return (
    <div className=''>
      <Header />
      <section>
        <Swiper
          slidesPerView={1}
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
      <div className='grid gap-5 m-4 grid-cols-3 xl:grid-cols-4 top-72 absolute z-50'>
        <div><Card title="Toys under $25" img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg" link="Shop now" /></div>
        <div><Card title="Toys under $25" img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg" link="Shop now" /></div>
        <div><Card title="Toys under $25" img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg" link="Shop now" /></div>
        <div><Card title="Toys under $25" img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v4._SY304_CB573698005_.jpg" link="Shop now" /></div>
        <div><Card title="Toys under $25" img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg" link="Shop now" /></div>
        <div><Card title="Toys under $25" img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg" link="Shop now" /></div>
        <div><Card title="Toys under $25" img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg" link="Shop now" /></div>
        <div><Card title="Toys under $25" img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg" link="Shop now" /></div>
        <div><Card title="Toys under $25" img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg" link="Shop now" /></div>
      </div>
    </div >
  );
};

export default Home;
