import { useState } from 'react'
import { ExtinguisherIcon } from '@icons/categories/Extinguisher.jsx'
import { FireIcon } from '@icons/categories/Fire.jsx'
import { ShieldIcon } from '@icons/categories/Shield'
import { RadarIcon } from '@icons/categories/Radar'

import picture1 from '@assets/pictures/deteccion.png'
import picture2 from '@assets/pictures/extincion.png'
import picture3 from '@assets/pictures/deteccion.png'
import picture4 from '@assets/pictures/extincion.png'

const categoryImages = [picture1, picture2, picture3, picture4]
const altImages = [
  'Detección de incendio',
  'Extinción automática',
  'Agentes limpios',
  'Protección pasiva'
]

export const CategoryProducts = () => {
  const [category, setCategory] = useState(categoryImages[0])

  const handleCategoryChange = category => {
    console.log(category)
    setCategory(categoryImages[category])
  }

  return (
    <section className='my-20'>
      <div className='w-full max-w-[1300px] mx-auto justify-center flex flex-wrap gap-y-12'>
        <div className='max-w-[70ch] px-4'>
          <h2 className='text-3xl font-bold sm:text-4xl mb-4'>
            <span className='text-green-600'>Productos especializados</span>{' '}
            para tu proyecto
          </h2>
          <div className='pl-6 border-l-2 border-green-500'>
            <ul className='[&>li]:flex [&>li]:items-center [&>li]:gap-1 [&>li]:my-4 first:[&>li]:mt-8 [&>li]:duration-200 [&>li:hover]:text-green-600 text-lg font-semibold'>
              <li onMouseEnter={() => handleCategoryChange(0)}>
                <RadarIcon className='w-6 h-6' />
                Detección de Incendio
              </li>
              <li onMouseEnter={() => handleCategoryChange(1)}>
                <FireIcon className='w-6 h-6' />
                Extinción automática
              </li>
              <li onMouseEnter={() => handleCategoryChange(2)}>
                <ExtinguisherIcon className='w-6 h-6' />
                Agentes limpio
              </li>
              <li onMouseEnter={() => handleCategoryChange(3)}>
                <ShieldIcon className='w-6 h-6' />
                Protección pasiva
              </li>
            </ul>
          </div>
          <a
            href='/productos'
            className='block w-fit rounded bg-green-600 px-6 py-2.5 mt-8 font-bold text-white hover:bg-green-700 focus:outline-none focus:ring active:text-opacity-75 duration-200'
          >
            Ver productos
          </a>
        </div>
        <figure className='w-full max-w-[600px] h-[400px] bg-cover bg-center bg-no-repeat relative overflow-hidden rounded-lg max-xl:hidden'>
          {
            <img
              src={category.src}
              alt={`imagen: ${altImages[categoryImages.indexOf(category)]}`}
              className='w-full h-full object-cover object-center aspect-video'
              loading='lazy'
            />
          }
        </figure>
      </div>
    </section>
  )
}
