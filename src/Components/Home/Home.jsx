import { Card, Carousel, CarouselCategory, Header } from '../index';
import "./home.css";
import "../../index.css";

const Home = () => {
  return (
    <div className='relative'>
      <section className='min-w-1000 max-w-1500 m-auto'>
        <Header />
      </section>
      <Carousel />
      <section className='grid gap-5 m-4 grid-cols-3 xl:grid-cols-4 -mt-80 relative z-50 mb-6'>
        <div><Card title="Toys under $25" img={"https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg"} link="Shop now" imgNumber={1} /></div>

        <div><Card title="Gaming Assesories" img={{ img1: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg", img2: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg", img3: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg", img4: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg", headset: "Headsets", keyboard: "Keyboard", mice: "Computer mice", chairs: "Chairs" }} link="Shop now" imgNumber={4} /></div>

        <div><Card title="Toys under $25" img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg" link="Shop now" imgNumber={1} /></div>


        <div><Card title="Toys under $25" img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v2._SY304_CB573698005_.jpg" link="Shop now" imgNumber={1} /></div>

        <div><Card title="Toys under $25" img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v4._SY304_CB573698005_.jpg" link="Shop now" imgNumber={1} /></div>

        <div><Card title="Toys under $25" img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v5._SY304_CB573698005_.jpg" link="Shop now" imgNumber={1} /></div>


        <div><Card title="Toys under $25" img="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v7._SY304_CB573698005_.jpg" link="Shop now" imgNumber={1} /></div>

        <div><Card title="Shop deals in fashion" img={{ img1: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg", img2: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_TOPS_1x._SY116_CB623353881_.jpg", img3: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_DRESSES_1x._SY116_CB623353881_.jpg", img4: "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_SHOES_1x._SY116_CB624172947_.jpg", headset: "Headsets", keyboard: "Keyboard", mice: "Computer mice", chairs: "Chairs" }} link="Shop now" imgNumber={4} /></div>
      </section>
      <section>
        <CarouselCategory />
      </section>
    </div >
  );
};

export default Home;
