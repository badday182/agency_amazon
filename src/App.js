// import Swiper from "swiper";
// import { Navigation, Pagination } from "swiper/modules";
// // import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import "./App.css";
import ReviewCard from "./components/ReviewCard/ReviewCard";

// function App() {
//   return (
//     <div className="App">
//       <h1>Voices of Success with Sales Fortuna</h1>

//       <div class="swiper">
//         <div class="swiper-wrapper">
//           <div class="swiper-slide">Slide 1</div>
//           <div class="swiper-slide">Slide 2</div>
//           <div class="swiper-slide">Slide 3</div>
//           {/* <ReviewCard class="swiper-slide" />
//           <ReviewCard class="swiper-slide" />
//           <ReviewCard class="swiper-slide" />
//           <ReviewCard class="swiper-slide" />
//           <ReviewCard class="swiper-slide" /> */}
//         </div>
//         <div class="swiper-pagination"></div>

//         <div class="swiper-button-prev"></div>
//         <div class="swiper-button-next"></div>

//         <div class="swiper-scrollbar"></div>
//       </div>
//       {/* <div className="cards_gallery">
//         <div className="arrow_back"></div>
//         <div className="review-cards">
//           <ReviewCard />
//           <ReviewCard />
//           <ReviewCard />
//           <ReviewCard />
//           <ReviewCard />
//         </div>
//         <div className="arrow_forward"></div>
//       </div> */}
//     </div>
//   );
// }

// export default App;

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./App.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function App() {
  return (
    <div className="App">
      <h1>Voices of Success with Sales Fortuna</h1>
      <Swiper
        // cssMode={true}
        slidesPerView={3}
        speed={500}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        navigation={true}
        // breakpoints={{
        //   320: {
        //     spaceBetween: 40,
        //   },
        //   640: {
        //     spaceBetween: 20,
        //   },
        //   768: {
        //     spaceBetween: 10,
        //   },
        // }}

        // navigation={true}
        // pagination={true}
        // mousewheel={true}
        // keyboard={true}
        // modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        // className="mySwiper"
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
  );
}
