import { ButtonPrimary } from '@components/buttons/ButtonPrimary'

export default function Error404 () {
  return (
    <main className='text-center py-24 min-h-[90vh] flex flex-col place-items-center'>
      <section className='my-auto'>
        <h1 className='text-6xl font-bold mb-4'>404</h1>
        <h2 className='text-2xl mb-4'>Página no encontrada</h2>
        <p className='mb-8 max-w-[45ch]'>
          Lo sentimos, pero la página que estás buscando no existe. Puede haber
          sido movida o eliminada.
        </p>
        <ButtonPrimary href='/' style='mx-auto'>
          Volver al Inicio
        </ButtonPrimary>
      </section>
    </main>
  )
}
