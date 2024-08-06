import { GalleryProjects } from '@/components/GalleryProjects'

export default function Projects () {
  return (
    <main className='pt-28 pb-20'>
      <section className='min-h-[60vh]'>
        <div className='max-w-[1200px] mx-auto'>
          <h1 className='text-3xl sm:text-5xl font-bold px-4 mb-6'>
            Nuestros proyectos
          </h1>
          <p className='sm:text-lg px-4 mb-20 max-w-[80ch]'>
            Descubre más sobre los proyectos en los que hemos participado y cómo
            hemos implementado soluciones para mejorar la seguridad contra
            incendios de nuestros clientes.
          </p>
        </div>
        <GalleryProjects />
      </section>
    </main>
  )
}
