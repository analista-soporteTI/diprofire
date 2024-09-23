import { GalleryProjects } from '@/components/GalleryProjects'
import { META_PAGES } from '@/consts/metaPages'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: META_PAGES.PROJECTS.title,
  description: META_PAGES.PROJECTS.description
}

export default function Projects () {
  return (
    <section className='min-h-[60vh] pt-28 pb-20'>
      <div className='max-w-[1200px] mx-auto'>
        <h1 className='text-3xl sm:text-5xl font-bold px-4 mb-6'>
          Nuestros <span className='text-green-600'>proyectos</span>
        </h1>
        <p className='sm:text-lg px-4 mb-20 max-w-[80ch] opacity-90'>
          Descubre más sobre los proyectos en los que hemos participado y cómo
          hemos implementado soluciones para mejorar la seguridad contra
          incendios de nuestros clientes.
        </p>
      </div>
      <GalleryProjects />
    </section>
  )
}
