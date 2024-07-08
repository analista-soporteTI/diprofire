import {
  ButtonCartPrimary,
  ButtonCartSecondary
} from '@components/buttons/ButtonCart'
import { ButtonBack } from '@components/buttons/ButtonBack'
import { Quantity } from '@components/products/Quantity.jsx'
import { useState } from 'react'
import {
  getCart,
  addOneToCart,
  removeFromCart,
  clearCart,
  updateQuantity
} from '@components/cart/cart.js'
import { ImportantIcon } from '@icons/Important'
import { mailtoCartProducts } from '@components/cart/mailto.js'

export const CartUI = () => {
  const [cart, setCart] = useState(getCart() || [])

  const handleAddToCart = product => {
    addOneToCart(product)
    setCart(getCart())
  }

  const handleRemoveFromCart = productId => {
    removeFromCart(productId)
    setCart(getCart())
  }

  const handleClearCart = () => {
    clearCart()
    setCart([])
  }

  const handleUpdateQuantity = (productId, quantity) => {
    updateQuantity(productId, quantity)
    setCart(getCart())
  }

  return (
    <section className='pt-24 px-3'>
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
          <ul>
            {cart.map(item => (
              <li
                key={item.name}
                className='first:mt-0 last:mb-0 my-4 grid sm:grid-cols-1 md:grid-cols-3 gap-4 items-center'
              >
                <div className='flex items-center gap-4 col-span-2 sm:col-span-1 md:col-span-2 flex-wrap'>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className='hover:opacity-70'
                  >
                    ❌
                  </button>
                  <img
                    src={item.image}
                    alt={`Previsualización del producto: ${item.name}`}
                    className='max-w-[40px] sm:max-w-[60px] md:max-w-[40px] rounded-md'
                  />
                  <div>
                    <p className='w-fit block'>{item.name}</p>
                    <p className='w-fit block'>{`Código/NP: ${item.sku}`}</p>
                  </div>
                </div>
                <Quantity
                  key={item.id}
                  className='col-span-1 sm:col-span-1 md:col-span-1'
                  value={item.quantity}
                  addQuantity={() => handleAddToCart(item)}
                  subQuantity={() =>
                    handleUpdateQuantity(item.id, item.quantity - 1)
                  }
                  updateQuantity={value => handleUpdateQuantity(item.id, value)}
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
        >
          Borrar cotizaciones
        </ButtonCartSecondary>
      </div>
    </section>
  )
}
