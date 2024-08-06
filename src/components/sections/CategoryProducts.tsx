'use client'
import { useState } from 'react'
import { ExtinguisherIcon } from '@icons/categories/Extinguisher'
import { FireIcon } from '@icons/categories/Fire'
import { ShieldIcon } from '@icons/categories/Shield'
import { RadarIcon } from '@icons/categories/Radar'

import Image from 'next/image'
import picture1 from '@assets/servicios/deteccion incendio.webp'
import picture2 from '@assets/servicios/sistema extinsion agua.webp'
import picture3 from '@assets/servicios/agente limpio.webp'
import picture4 from '@assets/servicios/proteccion pasiva.webp'

const categoryImages = [picture1, picture2, picture3, picture4]
const altImages = [
  'Detección de incendio',
  'Extinción automática',
  'Agentes limpios',
  'Protección pasiva'
]

export const CategoryProducts = () => {
  const [category, setCategory] = useState(categoryImages[0])

  const handleCategoryChange = (category: any) => {
    console.log(category)
    setCategory(categoryImages[category])
  }

  return (
    <section className='my-20'>
      <div className='w-full max-w-[1300px] mx-auto max-[740px]:px-4 justify-between flex flex-wrap gap-y-12'>
        <div className='max-w-[460px] px-4'>
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
                Agentes limpios
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
        <figure className='w-full max-[740px]:h-[240px] min-[740px]:max-w-[280px] min-[860px]:max-w-[400px] min-[1060px]:max-w-[600px] h-[400px] bg-cover bg-center bg-no-repeat relative overflow-hidden rounded-lg '>
          {
            <Image
              src={category.src}
              alt={`imagen: ${altImages[categoryImages.indexOf(category)]}`}
              width={600}
              height={400}
              className='w-full h-full object-cover object-center aspect-video'
            />
          }
        </figure>
      </div>
    </section>
  )
}
