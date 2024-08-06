'use client'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import Image from 'next/image'
import picture1 from '@assets/banners/servicio ingenieria.svg'
import picture2 from '@assets/banners/servicio instalacion.svg'
import picture3 from '@assets/banners/servicio tecnico.svg'
import picture4 from '@assets/banners/suministro equipos.svg'

export const SliderBanner = () => {
  return (
    <div className='hidden xl:block p-4 overflow-hidden'>
      <section className='w-fit h-fit mx-auto max-w-[1240px] rounded-md my-20 border-2 bg-zinc-200'>
        <Swiper
          centeredSlides={true}
          draggable={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          pagination={{
            clickable: true
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className='slider-banner h-fit max-h-[200px] cursor-grab active:cursor-grabbing'
        >
          <SwiperSlide>
            <Image
              src={picture1}
              alt=''
              loading='eager'
              className='object-contain aspect-video max-h-[200px] max-w-[1300px]'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={picture2}
              alt=''
              loading='lazy'
              className='object-contain aspect-video max-h-[200px] max-w-[1300px]'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={picture3}
              alt=''
              loading='lazy'
              className='object-contain aspect-video max-h-[200px] max-w-[1300px]'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={picture4}
              alt=''
              loading='lazy'
              className='object-contain aspect-video max-h-[200px] max-w-[1300px]'
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  )
}
