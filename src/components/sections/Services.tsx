import { ServiceCard } from '@components/ServiceCard'
import { ButtonSecondary } from '@components/buttons/ButtonSecondary'

import ingenierias from '@assets/servicios/servicio ingenierias.svg'
import instalacion from '@assets/servicios/servicio instalacion.svg'
import suministros from '@assets/servicios/servicio suministros.svg'
import tecnico from '@assets/servicios/servicio tecnico.svg'

export const Services = () => {
  return (
    <section className='mt-20 mb-32'>
      <div className='relative flex flex-col text-center gap-y-12'>
        <h2 className='text-3xl sm:text-4xl font-bold mb-4 px-4 mx-auto max-w-[40ch] break-words'>
          <span className='text-green-600'>Llevamos la seguridad</span> a tu
          proyecto con nuestros servicios de
        </h2>

        <div className='w-full max-w-[1400px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-x-4 sm:gap-y-14'>
          <ServiceCard
            href='/servicios/#ingenierias'
            src={ingenierias}
            alt='Dibujo de plano de instalaciones con lapices, compas y regla'
            style='max-w-[320px] text-start mx-auto'
            title='Ingenierías'
          >
            <h3 className='my-2 font-bold text-lg'>Ingenierías</h3>
            <p className='text-sm'>
              Incluyen estudios de factibilidad, análisis de carga de fuego,
              diseño y memorias de cálculo, así como ingeniería básica y de
              detalle para garantizar la viabilidad y seguridad de sus
              proyectos.
            </p>
          </ServiceCard>
          <ServiceCard
            href='/servicios/#instalación'
            src={instalacion}
            alt='Dibujo de un plano de instalaciones'
            style='max-w-[320px] text-start mx-auto'
          >
            <h3 className='my-2 font-bold text-lg'>Instalaciones</h3>
            <p className='text-sm'>
              Abarcan el montaje de sistemas de detección y extinción,
              protección pasiva, sistemas de almacenamiento e impulsión, así
              como protección de vehículos, equipos móviles y cocinas.
            </p>
          </ServiceCard>
          <ServiceCard
            href='/servicios/#tecnico'
            src={tecnico}
            alt='Dibujo de un técnico con casco'
            style='max-w-[320px] text-start mx-auto'
          >
            <h3 className='my-2 font-bold text-lg'>Servicio Técnico</h3>
            <p className='text-sm'>
              Incluye mantenimiento preventivo y correctivo, así como
              capacitaciones, asegurando el óptimo funcionamiento y conocimiento
              de sus sistemas.
            </p>
          </ServiceCard>
          <ServiceCard
            href='/servicios/#suministros'
            src={suministros}
            alt='Dibujo de cajas de suministros de equipos'
            style='max-w-[320px] text-start mx-auto'
          >
            <h3 className='my-2 font-bold text-lg'>Suministros de equipos</h3>
            <p className='text-sm'>
              Incluye extinción manual, extinción automática y detección de
              incendios, garantizando soluciones eficientes para la protección
              contra incendios.
            </p>
          </ServiceCard>
        </div>

        <ButtonSecondary href='/servicios' className='max-w-fit mx-auto'>
          Conocer más detalles
        </ButtonSecondary>
      </div>
    </section>
  )
}
