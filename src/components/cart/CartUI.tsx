'use client'

import {
  ButtonCartPrimary,
  ButtonCartSecondary
} from '@components/buttons/ButtonCart'
import { ButtonBack } from '@components/buttons/ButtonBack'
import { Quantity } from '@components/products/Quantity'
import { useState } from 'react'
import {
  getCart,
  addOneToCart,
  removeFromCart,
  clearCart,
  updateQuantity
} from '@hooks/cart'
import { ImportantIcon } from '@icons/Important'
import { mailtoCartProducts } from '@hooks/mailto.js'
import notFoundImg from '@assets/products/not found.png'
import Image from 'next/image'

export const CartUI = () => {
  const [cart, setCart] = useState(getCart() || [])

  const handleAddToCart = (product: any) => {
    addOneToCart(product)
    setCart(getCart())
  }

  const handleRemoveFromCart = (productId: any) => {
    removeFromCart(productId)
    setCart(getCart())
  }

  const handleClearCart = () => {
    clearCart()
    setCart([])
  }

  const handleUpdateQuantity = (productId: any, quantity: any) => {
    updateQuantity(productId, quantity)
    setCart(getCart())
  }

  return (
    <section className='py-24 px-3 min-h-screen'>
      <h1 className='text-3xl font-bold mb-8'>Carrito de cotizaciones</h1>
      <ButtonBack href='/productos'>Seguir cotizando</ButtonBack>
      {cart.length === 0 && (
        <p className='mt-10 block ml-3'>
          <div className='mb-4 flex items-center gap-1 text-lg font-semibold text-green-600'>
            No hay productos en el carrito
            <ImportantIcon className='size-5' />
          </div>
          <div className='block'>
            Echa un vistazo a nuestros{' '}
            <a
              href='/productos'
              className='text-green-600 underline underline-offset-2'
            >
              productos
            </a>{' '}
            y añade los que te interesen a tu carrito de cotizaciones.
          </div>
        </p>
      )}
      <div className='flex flex-col gap-y-4 mt-5 p-5 rounded-md'>
        <div className='grid grid-cols-3 gap-4 items-center text-lg font-semibold border-b border-black/20 pb-4'>
          <p className='col-span-2 max-sm:col-span-3'>Producto</p>
          <p className='col-span-1 max-sm:hidden'>Cantidad</p>
        </div>
        <div>
          <ul className='space-y-4 max-sm:space-y-10'>
            {cart.map((item: any) => (
              <li
                key={item.name}
                className='first:mt-0 last:mb-0 grid sm:grid-cols-3 gap-4 items-center max-sm:peer-even:bg-gray-900'
              >
                <div className='flex max-[400px]:flex-col max-sm:items-start items-center gap-4 sm:col-span-2'>
                  <div className='flex gap-4'>
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className='hover:opacity-70'
                      title={`Eliminar ${item.name} del carrito`}
                    >
                      ❌
                    </button>
                    {item.img ? (
                      <Image
                        src={item.img}
                        alt={`Previsualización del producto: ${item.name}`}
                        className='max-w-[80px] rounded-md aspect-square'
                      />
                    ) : (
                      <Image
                        src={notFoundImg.src}
                        alt={`Imagen de producto sin previsualización`}
                        className='max-w-[80px] rounded-md aspect-square bg-white'
                      />
                    )}
                  </div>
                  <div>
                    <p className='w-fit block text-sm font-semibold'>
                      {item.name}
                    </p>
                    <p className='w-fit block text-sm border-t border-zinc-300 pt-1 mt-1'>{`SKU: ${item.sku}`}</p>
                    {item.model && (
                      <p className='w-fit block text-sm'>{`Modelo: ${item.model}`}</p>
                    )}
                    {item.brand && (
                      <p className='w-fit block text-sm'>{`Marca: ${item.brand}`}</p>
                    )}
                  </div>
                </div>
                <Quantity
                  key={item.id}
                  className='col-span-1 max-sm:mr-auto'
                  value={item.quantity}
                  addQuantity={() => handleAddToCart(item)}
                  subQuantity={() =>
                    handleUpdateQuantity(item.id, item.quantity - 1)
                  }
                  updateQuantity={(value: any) => handleUpdateQuantity(item.id, value)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='flex flex-wrap gap-4 mt-8 ml-3'>
        <ButtonCartPrimary
          disabled={cart.length === 0}
          href={mailtoCartProducts(cart)}
        >
          Enviar cotización
        </ButtonCartPrimary>
        <ButtonCartSecondary
          disabled={cart.length === 0}
          onClick={() => handleClearCart()}
          className='hover:bg-transparent border-transparent hover:border-red-600 text-red-600 hover:text-red-600'
        >
          Borrar cotizaciones
        </ButtonCartSecondary>
      </div>
    </section>
  )
}
