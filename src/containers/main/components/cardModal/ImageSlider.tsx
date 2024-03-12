import Image from 'next/image';
import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface ImageSliderType {
  parseImage: string[];
}

function ImageSlider({ parseImage }: ImageSliderType) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div>
      <Swiper
        /* style={{
          '--swiper-navigation-color': '#B6B2B2',
          '--swiper-pagination-color': '#B6B2B2',
        }} */
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper2 mb-20pxr'
      >
        {parseImage.map((image: string, index: number) => {
          return (
            <SwiperSlide key={index}>
              <div className='relative h-400pxr w-full'>
                <Image
                  src={image}
                  fill
                  priority
                  unoptimized
                  style={{ objectFit: 'contain' }}
                  alt='이미지'
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={(swiper: any) => {
          setThumbsSwiper(swiper);
          thumbsSwiper;
        }}
        spaceBetween={20}
        slidesPerView={4}
        freeMode={true}
        initialSlide={0}
        watchSlidesProgress={true}
        slideToClickedSlide
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper'
      >
        {parseImage.map((image: string, index: number) => {
          return (
            <SwiperSlide key={index} className='inline-block !w-auto'>
              <div className='relative h-100pxr w-178pxr cursor-pointer'>
                <Image src={image} fill unoptimized alt='이미지' />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default ImageSlider;
