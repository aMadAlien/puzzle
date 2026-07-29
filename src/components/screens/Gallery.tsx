// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Gallery() {
  return (
    <div className='h-screen flex items-center'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={4}
        coverflowEffect={{
          rotate: 50,
          stretch: 10,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {
          [...Array(14).keys()].map((img, key) => (
            <SwiperSlide key={key}>
              <img src={`../../src/assets/gallery/${key}.jpg`} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}
