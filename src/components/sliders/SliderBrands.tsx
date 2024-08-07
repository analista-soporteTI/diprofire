'use client'
import { GroupBrands } from '@components/sliders/GroupBrands'
import { GroupClients } from '@components/sliders/GroupClients'
import { ButtonSecondary } from '@components/buttons/ButtonSecondary'
import '@styles/slider-brands.css'

export const SliderBrands = () => {
  return (
    <section
      className='company-logo-list py-20'
      id='sections-company-logo-list'
      style={{ '--companies': '10' } as React.CSSProperties}
    >
      <div className='px-4 text-center w-full mx-auto'>
        <h2 className='text-2xl sm:text-3xl font-bold text-center max-w-[60ch] mx-auto'>
          <span className='text-green-600'>Las mejores marcas</span> de
          protección contra incendios
        </h2>
        <div className='company-logo-slider my-16'>
          <GroupBrands />
          <GroupBrands />
          <GroupBrands />
          <GroupBrands />
        </div>
        <h3 className='text-2xl sm:text-3xl font-bold text-center max-w-[60ch] mx-auto'>
          Y la confianza de{' '}
          <span className='text-green-600'>más de 10 grandes empresas</span>
        </h3>
      </div>
      <div className='client-logo-slider my-16'>
        <GroupClients />
        <GroupClients />
        <GroupClients />
        <GroupClients />
      </div>
      <ButtonSecondary href='/productos' className='mt-8 max-w-fit mx-auto'>
        Conoce nuestros productos
      </ButtonSecondary>
    </section>
  )
}
