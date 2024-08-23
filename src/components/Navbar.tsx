'use client'
import { useState, useEffect, useRef } from 'react'
import { CartIcon } from '@icons/Cart'
import useCartStore from '@/hooks/cart'
import { CloseIcon } from '@icons/Close'
import { MenuIcon } from '@icons/Menu'
import logo from '@assets/logo-diprofire.png'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Navbar = () => {
  const { getLength } = useCartStore()

  const [scrolling, setScrolling] = useState(false)
  const [counterCart, setCounterCart] = useState(getLength())
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const [isHomePage, setIsHomePage] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsHomePage(pathname === '/')
  }, [pathname])

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
      setCounterCart(getLength())
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [counterCart, getLength])

  const msgCart =
    counterCart > 1 || counterCart === 0 ? 'cotizaciones' : 'cotización'

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuRef])

  return (
    <header
      className={`z-50 fixed w-full transition-all duration-200 bg-gray-100 border-b border-gray-300 text-black ${
        menuOpen || scrolling || !isHomePage
          ? '!bg-gray-100 !border-gray-300 !text-black'
          : '!bg-transparent !border-transparent !text-white'
      }`}
    >
      <div className='h-16 w-full max-w-[1300px] mx-auto flex items-center gap-8 px-4 sm:px-6 lg:px-8'>
        <div className='overflow-hidden'>
          <Image
            className='w-full max-w-[200px] object-contain aspect-video'
            src={logo}
            alt='Logo'
            loading='lazy'
          />
        </div>
        <div className='flex flex-1 items-center justify-end min-[820px]:justify-between'>
          <nav aria-label='Global' className='hidden min-[820px]:block'>
            <ul className='flex items-center gap-6 text-base [&>li>a:hover]:text-green-500'>
              <li>
                <Link href='/'>Inicio</Link>
              </li>
              <li>
                <Link href='/empresa'>Empresa</Link>
              </li>
              <li>
                <Link href='/servicios'>Servicios</Link>
              </li>
              <li>
                <Link href='/productos'>Productos</Link>
              </li>
              <li>
                <Link href='/proyectos'>Proyectos</Link>
              </li>
              <li>
                <Link href='/contacto'>Contacto</Link>
              </li>
            </ul>
          </nav>
          <Link
            className='gap-1.5 items-center hover:text-green-500 hidden max-[820px]:flex max-[920px]:mr-5'
            href='/carrito'
            title='Cart'
          >
            <CartIcon className='fill-green-600 size-5' />
            {counterCart} <span className='max-[426px]:hidden'>{msgCart}</span>
          </Link>
          <button
            className='min-[820px]:hidden'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className='sr-only'>Toggle menu</span>
            {menuOpen ? (
              <CloseIcon className='size-8 bg-green-600 !text-white rounded-full p-2' />
            ) : (
              <MenuIcon
                className={`size-8 bg-green-600 rounded-full p-2 ${
                  menuOpen || scrolling || !isHomePage
                    ? '!bg-green-600 !text-white'
                    : '!bg-white !text-black'
                }`}
              />
            )}
          </button>
          <Link
            className='gap-1.5 items-center hover:text-green-500 hidden min-[820px]:flex min-[920px]:ml-5'
            href='/carrito'
            title='Cart'
          >
            <CartIcon className='fill-green-600 size-5' />
            {counterCart}{' '}
            <span className='min-[920px]:block hidden'>{msgCart}</span>
          </Link>
        </div>
      </div>
      {menuOpen && (
        <nav
          ref={menuRef}
          className={`min-[900px]:hidden ${
            menuOpen ? 'block' : scrolling ? '' : 'hidden'
          } w-full max-w-[200px] h-dvh px-10 border-r shadow-md bg-gray-100 text-black border-t border-gray-300 fixed top-16 left-0 z-50 transition-all duration-200`}
        >
          <ul className='flex flex-col items-start gap-6 text-base py-4 [&>li]:w-full [&>li>a]:block [&>li>a:hover]:text-green-600'>
            <li>
              <Link href='/' onClick={() => setMenuOpen(false)}>
                Inicio
              </Link>
            </li>
            <li>
              <Link href='/empresa' onClick={() => setMenuOpen(false)}>
                Empresa
              </Link>
            </li>
            <li>
              <Link href='/servicios' onClick={() => setMenuOpen(false)}>
                Servicios
              </Link>
            </li>
            <li>
              <Link href='/productos' onClick={() => setMenuOpen(false)}>
                Productos
              </Link>
            </li>
            <li>
              <Link href='/proyectos' onClick={() => setMenuOpen(false)}>
                Proyectos
              </Link>
            </li>
            <li>
              <Link href='/contacto' onClick={() => setMenuOpen(false)}>
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
