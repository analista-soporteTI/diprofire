import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Pagination } from 'swiper/modules'

import picture1 from '/public/assets/pictures/diprofire-sesion-fotos-1.webp'
import picture2 from '/public/assets/pictures/diprofire-sesion-fotos-2.webp'
import picture3 from '/public/assets/pictures/capacitacion.webp'
import picture4 from '/public/assets/pictures/presentacion.webp'
import picture5 from '/public/assets/pictures/almacen.webp'

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
          <img
            src={picture1.src}
            alt={imgAlt1}
            loading='eager'
            className='block w-full h-full object-cover aspect-video'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={picture2.src}
            alt={imgAlt2}
            loading='lazy'
            className='block w-full h-full object-cover aspect-video'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={picture3.src}
            alt={imgAlt3}
            loading='lazy'
            className='block w-full h-full object-cover aspect-video'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={picture4.src}
            alt={imgAlt4}
            loading='lazy'
            className='block w-full h-full object-cover aspect-video'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={picture5.src}
            alt={imgAlt5}
            loading='lazy'
            className='block w-full h-full object-cover aspect-video'
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
