import { NotFoundImage } from '@/icons/NotFound'
import Link from 'next/link'
import { META_PAGES } from '@/consts/metaPages'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: META_PAGES.NOT_FOUND.title,
  description: META_PAGES.NOT_FOUND.description
}

export default function NotFound () {
  return (
    <section className='grid content-center min-h-[110vh] h-full w-full overflow-hidden pb-4 px-8 text-center'>
      <NotFoundImage className='mx-auto mt-20 aspect-square max-w-xs md:mt-10 md:aspect-video md:max-w-md' />
      <h1 className='text-8xl sm:text-9xl font-black text-black/15'>404</h1>
      <h2 className='mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
        Oooh no!
      </h2>

      <p className='mt-4 text-gray-500'>{`No pudimos encontrar la página que buscabas. Puede que haya sido movida o eliminada.`}</p>
      <p className='mt-1 text-gray-500'>
        Pero podemos asegurarte que encontraremos estas, echa un ojo:
      </p>
      <ul className='flex flex-wrap gap-2 sm:gap-8 justify-center mt-6'>
        <li className='active:scale-95 duration-200'>
          <Link
            href='/'
            className='block font-bold bg-green-600/15 p-2 rounded-md hover:text-green-600'
          >
            Inicio
          </Link>
        </li>
        <li className='active:scale-95 duration-200'>
          <Link
            href='/servicios'
            className='block font-bold bg-green-600/15 p-2 rounded-md hover:text-green-600'
          >
            Servicios
          </Link>
        </li>
        <li className='active:scale-95 duration-200'>
          <Link
            href='/productos'
            className='block font-bold bg-green-600/15 p-2 rounded-md hover:text-green-600'
          >
            Productos
          </Link>
        </li>
      </ul>
    </section>
  )
}
