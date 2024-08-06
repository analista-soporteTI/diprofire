export const MisionVision = () => {
  return (
    <section className='max-w-7xl w-full mx-auto py-10 px-4 sm:px-10'>
      <h2 className='text-2xl sm:text-4xl font-bold mb-6'>
        Nuestra Misión y Visión
      </h2>
      <p className='max-w-[70ch] mb-14'>
        Con los años nos hemos mantenido fieles a nuestros principios y valores,
        lo que nos ha permitido crecer y consolidarnos en el mercado de la
        seguridad contra incendios.
      </p>
      <div className='grid grid-cols-1 lg:grid-cols-2 items-start gap-10'>
        <div className='lg:max-w-[45ch] xl:max-w-[60ch] flex flex-col-reverse'>
          <h2 className='pt-2 mt-2 border-t-2 border-zinc-400 w-fit opacity-90 text-sm xl:text-base'>
            Nuestra Misión
          </h2>
          <i className='text-base xl:text-lg'>
            “Nos dedicamos a la venta, instalación y mantenimiento de sistemas
            contra incendios, ofrecemos seguridad integral a nuestros clientes
            en la gran minería e industria. Trabajamos con altos estándares de
            calidad y cumpliendo con las normativas nacionales e
            internacionales.”
          </i>
        </div>
        <div className='lg:max-w-[45ch] xl:max-w-[60ch] flex flex-col-reverse'>
          <h2 className='pt-2 mt-2 border-t-2 border-zinc-400 w-fit opacity-90 text-sm xl:text-base'>
            Nuestra Visión
          </h2>
          <i className='text-base xl:text-lg'>
            “Convertirnos en la compañía líder a nivel nacional en soluciones de
            seguridad contra incendios, proporcionando respuestas rápidas y
            personalizadas a nuestros clientes mediante una gestión eficiente de
            recursos y un equipo de profesionales altamente capacitados.”
          </i>
        </div>
      </div>
    </section>
  )
}
