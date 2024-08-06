'use client'
import { ButtonCartSecondary } from '@components/buttons/ButtonCart'
import { ButtonPrimary } from '@components/buttons/ButtonPrimary'
import { useEffect, useState } from 'react'
import { addToCart } from '@hooks/cart'
import { mailtoDetailProduct } from '@hooks/mailto'
import { CartIcon } from '@icons/Cart'
import '@styles/quantity.css'
import { createInfoProduct } from '@hooks/infoProducts'

export const ProductDetailAction = ({ product, link = '' }: any) => {
  const [quantity, setQuantity] = useState(1)

  const infoProduct = createInfoProduct({ product: product, quantity: quantity })

  const mailto = mailtoDetailProduct(infoProduct)

  const handleChangeQuantity = (e: any) => {
    let parsedValue = parseInt(e.target.value)
    let newValue = parsedValue > 1 ? parsedValue : 0
    setQuantity(newValue)
  }

  const handleAddToCart = () => {
    addToCart(infoProduct)
  }

  useEffect(() => {
    let parsedValue = quantity
    let newValue = parsedValue > 1 ? parsedValue : 1
    setQuantity(newValue)
  }, [product, quantity])

  return (
    <div className='flex flex-wrap gap-2 mt-2 items-center'>
      <div>
        <div>
          <button
            type='button'
            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}
            className='px-3 py-1 bg-gray-200 rounded-l-md hover:bg-gray-300'
          >
            -
          </button>
          <input
            id='inputQuantity'
            type='number'
            className='w-12 mx-0.5 py-[3px] text-center bg-gray-100 border-transparent quantity-input'
            placeholder='1'
            min='1'
            value={quantity}
            onChange={e => handleChangeQuantity(e)}
          />
          <button
            type='button'
            onClick={() => setQuantity(quantity + 1)}
            className='px-3 py-1 bg-gray-200 rounded-r-md hover:bg-gray-300'
          >
            +
          </button>
        </div>
      </div>
      <div className='flex flex-wrap-reverse justify-start gap-3'>
        {link !== '' ? (
          <ButtonPrimary href={link} className='text-sm !px-4 !h-[36px]'>
            Ver más
          </ButtonPrimary>
        ) : (
          <ButtonPrimary
            href={mailto}
            target='_blank'
            className='text-sm !px-4 !h-[36px]'
          >
            Cotizar
          </ButtonPrimary>
        )}
        <ButtonCartSecondary
          className='text-sm !px-4 !h-[36px]'
          onClick={() => handleAddToCart()}
        >
          <CartIcon className='size-5 fill-green-600' />
        </ButtonCartSecondary>
      </div>
    </div>
  )
}
