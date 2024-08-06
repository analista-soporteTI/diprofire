import { ServiceSection } from '@components/sections/ServiceSection'
import { ButtonPrimary } from '@components/buttons/ButtonPrimary'
import Image from 'next/image'
import heroImg from '@assets/servicios/instalacion.webp'

export default function Services () {
  return (
    <main className='pb-10 z-10'>
      <section className='relative overflow-hidden'>
        <Image
          src={heroImg}
          alt='Instalación de sistemas de protección contra incendios'
          className='object-cover aspect-video w-full h-screen absolute -z-10'
        />
        <div className='absolute h-screen inset-0 bg-black bg-opacity-50 z-[-1]'></div>
        <div className='text-center my-auto pt-36 pb-20 px-4 max-w-[900px] mx-auto text-white'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-10'>
            Nuestros Servicios
          </h1>
          <p className='mb-6 max-w-[60ch] mx-auto text-lg'>
            Protege lo que más valoras con nuestros servicios especializados en
            ingeniería y protección contra incendios. Escribenos y te
            contactaremos en breve para ofrecerte la mejor solución a tus
            necesidades.
          </p>
          <ButtonPrimary href='/contacto' className='mx-auto'>
            Contáctanos
          </ButtonPrimary>
        </div>
      </section>
      <ServiceSection />
    </main>
  )
}
