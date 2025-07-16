import ReviewCard from "./components/ReviewCard/ReviewCard";
import reviewsData from "./dataForReviews";
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
      <h1 className="reviewsHeader">Voices of Success with Sales Fortuna</h1>
      <div className="swiper-box">
        <Swiper
          cssMode={false}
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
          {reviewsData.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
