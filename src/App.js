import ReviewCard from "./components/ReviewCard/ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./App.css";

import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

export default function App() {
  return (
    <div className="App">
      <h1>Voices of Success with Sales Fortuna</h1>
      <div className="swiper-box">
        <Swiper
          cssMode={false}
          // cssMode={true}
          navigation={true}
          slidesPerView={1}
          speed={500}
          spaceBetween={200}
          effect="slide"
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          className="mySwiper"
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1080: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        >
          <SwiperSlide>
            <ReviewCard />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard />
          </SwiperSlide>
          <SwiperSlide>
            <ReviewCard />
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
          {/* <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard /> */}
        </Swiper>
      </div>
    </div>
  );
}
