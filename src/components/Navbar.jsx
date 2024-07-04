import { useState, useEffect } from 'react'
import { CartIcon } from '@icons/Cart.jsx'
import { getCart } from '@components/cart/cart.js'
import { CloseIcon } from '@icons/Close'
import { MenuIcon } from '@icons/Menu'

export const Navbar = () => {
  const [scrolling, setScrolling] = useState(false)
  const [counterCart, setCounterCart] = useState(getCart().length || 0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY > 0
      setScrolling(isTop)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCounterCart(getCart().length)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [counterCart])

  const msgCart =
    counterCart > 1 || counterCart === 0 ? 'cotizaciones' : 'cotización'

  return (
    <header
      className={`z-50 fixed w-full transition-all duration-200 bg-gray-100 border-b border-gray-300 text-black ${
        scrolling || window.location.pathname !== '/'
          ? '!bg-gray-100 !border-gray-300 !text-black'
          : '!bg-transparent !border-transparent !text-white'
      }`}
    >
      <div className='h-16 w-full max-w-[1300px] mx-auto flex items-center gap-8 px-4 sm:px-6 lg:px-8'>
        <div className='overflow-hidden'>
          <img
            className='w-full max-w-[200px] object-contain aspect-video'
            src='/assets/logo-diprofire.png'
            alt='Logo'
            loading='lazy'
          />
        </div>
        <div className='flex flex-1 items-center justify-end min-[820px]:justify-between'>
          <nav aria-label='Global' className='hidden min-[820px]:block'>
            <ul className='flex items-center gap-6 text-base [&>li>a:hover]:text-green-500'>
              <li>
                <a href='/'>Inicio</a>
              </li>
              <li>
                <a href='/empresa'>Empresa</a>
              </li>
              <li>
                <a href='/servicios'>Servicios</a>
              </li>
              <li>
                <a href='/productos'>Productos</a>
              </li>
              <li>
                <a href='/proyectos'>Proyectos</a>
              </li>
              <li>
                <a href='/contacto'>Contacto</a>
              </li>
            </ul>
          </nav>
          <a
            className='gap-1.5 items-center hover:text-green-500 hidden max-[820px]:flex max-[920px]:mr-5'
            href='/cart'
            title='Cart'
          >
            <CartIcon className='fill-green-600 size-5' />
            {counterCart} <span className='max-[426px]:hidden'>{msgCart}</span>
          </a>
          <button
            className='min-[820px]:hidden'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className='sr-only'>Toggle menu</span>
            {menuOpen ? (
              <CloseIcon
                className={`size-8 bg-black rounded-full p-2 ${
                  scrolling || window.location.pathname !== '/'
                    ? '!bg-black !text-white'
                    : '!bg-white !text-black'
                }`}
              />
            ) : (
              <MenuIcon
                className={`size-8 bg-black rounded-full p-2 ${
                  scrolling || window.location.pathname !== '/'
                    ? '!bg-black !text-white'
                    : '!bg-white !text-black'
                }`}
              />
            )}
          </button>
          <a
            className='gap-1.5 items-center hover:text-green-500 hidden min-[820px]:flex min-[920px]:ml-5'
            href='/cart'
            title='Cart'
          >
            <CartIcon className='fill-green-600 size-5' />
            {counterCart}{' '}
            <span className='min-[920px]:block hidden'>{msgCart}</span>
          </a>
        </div>
      </div>
      {menuOpen && (
        <nav
          className={`min-[900px]:hidden ${
            menuOpen ? 'block' : 'hidden'
          } w-full bg-gray-100 text-black border-t border-gray-300 fixed top-16 left-0 z-50 transition-all duration-200}`}
        >
          <ul className='flex flex-col items-center gap-6 text-base py-4'>
            <li>
              <a href='/' onClick={() => setMenuOpen(false)}>
                Inicio
              </a>
            </li>
            <li>
              <a href='/empresa' onClick={() => setMenuOpen(false)}>
                Empresa
              </a>
            </li>
            <li>
              <a href='/servicios' onClick={() => setMenuOpen(false)}>
                Servicios
              </a>
            </li>
            <li>
              <a href='/productos' onClick={() => setMenuOpen(false)}>
                Productos
              </a>
            </li>
            <li>
              <a href='/proyectos' onClick={() => setMenuOpen(false)}>
                Proyectos
              </a>
            </li>
            <li>
              <a href='/contacto' onClick={() => setMenuOpen(false)}>
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
