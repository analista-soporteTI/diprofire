'use client'
import { ButtonCartSecondary } from '@components/buttons/ButtonCart'
import { useEffect, useState } from 'react'
import useCartStore from '@/hooks/cart'
import { CartIcon } from '@icons/Cart'
import '@styles/quantity.css'
import { createInfoProduct } from '@hooks/infoProducts'
import { ButtonMailDetail } from '@components/buttons/ButtonMailDetail'

export const ProductDetailAction = ({ product, link = '' }: any) => {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCartStore()

  const infoProduct = createInfoProduct({
    product: product,
    quantity: quantity
  })

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
    <div className='flex flex-wrap gap-6 mt-2 items-center'>
      <div className='flex flex-wrap gap-4'>
        <div className='h-fit w-fit bg-transparent rounded-md border'>
          <button
            type='button'
            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}
            className='px-4 py-2 rounded-l-md bg-transparent hover:bg-zinc-100 duration-200'
          >
            -
          </button>
          <input
            id='inputQuantity'
            type='number'
            className='w-12 py-2 mx-0.5 text-center border-transparent bg-transparent quantity-input'
            placeholder='1'
            min='1'
            value={quantity}
            onChange={e => handleChangeQuantity(e)}
          />
          <button
            type='button'
            onClick={() => setQuantity(quantity + 1)}
            className='px-4 py-2 rounded-r-md bg-transparent hover:bg-zinc-100 duration-200'
          >
            +
          </button>
        </div>
        <ButtonCartSecondary
          className='text-base !px-4 !py-2 flex gap-2'
          onClick={() => handleAddToCart()}
        >
          <CartIcon className='size-6 fill-green-600' />
          Añadir al carrito
        </ButtonCartSecondary>
      </div>
      <ButtonMailDetail product={infoProduct} />
    </div>
  )
}
