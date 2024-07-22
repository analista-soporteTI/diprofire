import { ButtonCartSecondary } from '@components/buttons/ButtonCart'
import { ButtonPrimary } from '@components/buttons/ButtonPrimary'
import { useEffect, useState } from 'react'
import { addToCart } from '@components/cart/cart.js'
import { mailtoDetailProduct } from '@components/cart/mailto'
import { CartIcon } from '@icons/Cart'
import '@styles/quantity.css'

export const ProductDetailAction = ({ product }) => {
  const [quantity, setQuantity] = useState(1)

  const infoProduct = {
    id: product.id,
    name: product.name,
    quantity: quantity,
    sku: product.sku,
    brand: product.brand,
    img: product.img
  }

  const mailto = mailtoDetailProduct(infoProduct)

  const handleChangeQuantity = e => {
    let parsedValue = parseInt(e.target.value)
    let newValue = parsedValue > 1 ? parsedValue : 0
    setQuantity(newValue)
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      quantity: quantity,
      img: product.img,
      sku: product.sku,
      brand: product.brand
    })
  }

  useEffect(() => {
    let parsedValue = parseInt(quantity)
    let newValue = parsedValue > 1 ? parsedValue : 1
    setQuantity(newValue)
  }, [product])

  return (
    <div className='flex flex-wrap gap-2 mt-2'>
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
        <ButtonPrimary href={mailto} target="_blank" style='text-sm !px-4 !h-[36px]'>
          Cotizar
        </ButtonPrimary>
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
