import { ButtonSecondary } from '@components/buttons/ButtonSecondary'
import { SliderPictures } from '@components/sliders/SliderPictures'
import { Counter } from '@components/Counter'

export const About = () => {
  return (
    <section className='flex flex-wrap w-full max-w-[1400px] mx-auto mt-20'>
      <div className='mx-auto max-w-[70ch] px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 z-10'>
        <h1 className='text-3xl font-bold sm:text-4xl mb-6'>
          <span className='text-green-600'>Somos expertos</span> en protección y
          sistemas contra incendios
        </h1>
        <p className='mt-6 mb-4'>
          Es por ello que nos especializamos en normativa contra incendios y
          contamos con la{' '}
          <strong>certificación de fábrica de KIDDE FIRE SYSTEMS.</strong>
        </p>
        <p className='mb-4'>
          Queremos establecer un nivel razonable de seguridad contra incendios y
          de seguridad humana y de protección de propiedades
          <strong>
            contra los riesgos creados por incendios, explosiones y condiciones
            peligrosas
          </strong>
          .
        </p>
        <Counter />
        <ButtonSecondary href='/empresa' className='mt-6'>
          Conoce más de nosotros
        </ButtonSecondary>
      </div>
      <SliderPictures />
    </section>
  )
}
