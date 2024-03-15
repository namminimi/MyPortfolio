import useMediaQueries from '@/hooks/useMediaQueries';
import Image from 'next/image';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface ImageSliderType {
  parseImage: string[];
}

function ImageSlider({ parseImage }: ImageSliderType) {
  const mobileMediaQuery = useMediaQueries({ breakpoint: 767 })?.mediaQuery
    .matches;
  const isMobile = typeof window !== 'undefined' ? mobileMediaQuery : false;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div>
      <Swiper
        spaceBetween={10}
        navigation={!isMobile}
        pagination={{ clickable: isMobile }}
        thumbs={{ swiper: thumbsSwiper && !isMobile ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs, Pagination]}
        className='mySwiper2 navigation-color mb-20pxr'
      >
        {parseImage.map((image: string, index: number) => {
          return (
            <SwiperSlide key={index}>
              <div className='relative h-200pxr w-full rounded-md bg-gray100 mobile430:h-300pxr tablet:h-350pxr'>
                <Image
                  src={image}
                  fill
                  priority
                  unoptimized
                  style={{ objectFit: 'contain' }}
                  alt='이미지'
                  className='rounded-3xl'
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={(swiper: any) => {
          setThumbsSwiper(swiper);
        }}
        spaceBetween={20}
        slidesPerView={'auto'}
        freeMode={true}
        initialSlide={0}
        watchSlidesProgress={true}
        slideToClickedSlide
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper !hidden tablet:!block'
      >
        {parseImage.map((image: string, index: number) => {
          return (
            <SwiperSlide key={index} className='inline-block !w-auto'>
              <div className='relative h-100pxr w-160pxr cursor-pointer tablet:w-150pxr'>
                <Image src={image} fill priority unoptimized alt='이미지' />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default ImageSlider;
