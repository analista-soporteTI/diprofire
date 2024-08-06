'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import Image from 'next/image'
import picture1 from '@assets/pictures/diprofire-sesion-fotos-1.webp'
import picture2 from '@assets/pictures/diprofire-sesion-fotos-2.webp'
import picture3 from '@assets/pictures/capacitacion.webp'
import picture4 from '@assets/pictures/presentacion.webp'
import picture5 from '@assets/pictures/almacen.webp'

const imgAlt1 =
  'Equipo Diprofire posando frente a las oficinas, con dos camionetas de la empresa estacionadas a ambos lados.'
const imgAlt2 =
  'Equipo Diprofire posando frente a una pared gris, algunos de pie y otros agachados. Un miembro del equipo sostiene una bandera de Chile.'
const imgAlt3 =
  'Reunion de equipo Diprofire para capacitación. Todos los miembros están sentados en sillas plegables, escuchando a un expositor.'
const imgAlt4 =
  'Sala de reuniones en la oficina con miembros de Diprofire sentados anotando y viendo los avances de un proyecto.'
const imgAlt5 =
  'Dos miembros del equipo Diprofire organizando cajas de Protectowire en un almacén. Uno de ellos está tomando una caja de la estantería mientras el otro sostiene una tabla con un portapapeles.'

export const SliderPictures = () => {
  return (
    <>
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
        modules={[Autoplay, Pagination]}
        className='slider-pictures w-full h-fit max-w-[600px] m-auto sm:rounded-md cursor-grab active:cursor-grabbing'
      >
        <SwiperSlide>
          <Image
            src={picture1}
            alt={imgAlt1}
            loading='eager'
            className='block w-full h-full object-cover aspect-video'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={picture2}
            alt={imgAlt2}
            loading='lazy'
            className='block w-full h-full object-cover aspect-video'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={picture3}
            alt={imgAlt3}
            loading='lazy'
            className='block w-full h-full object-cover aspect-video'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={picture4}
            alt={imgAlt4}
            loading='lazy'
            className='block w-full h-full object-cover aspect-video'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={picture5}
            alt={imgAlt5}
            loading='lazy'
            className='block w-full h-full object-cover aspect-video'
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
