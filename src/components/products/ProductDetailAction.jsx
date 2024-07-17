import { ButtonCartSecondary } from '@components/buttons/ButtonCart'
import { ButtonPrimary } from '@components/buttons/ButtonPrimary'
import { useEffect, useState } from 'react'
import { addToCart } from '@components/cart/cart.js'
import { mailtoDetailProduct } from '@components/cart/mailto'
import '@styles/quantity.css'

export const ProductDetailAction = ({ product }) => {
  const [quantity, setQuantity] = useState(1)

  const infoProduct = {
    id: product.id,
    name: product.name,
    quantity: quantity,
    description: product.short_description,
    sku: product.sku,
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
      image: product.images[0].src,
      description: product.short_description,
      sku: product.sku
    })
  }

  useEffect(() => {
    let parsedValue = parseInt(quantity)
    let newValue = parsedValue > 1 ? parsedValue : 1
    setQuantity(newValue)
  }, [product])

  return (
    <div className='mb-10 flex flex-wrap gap-4'>
      <div>
        <div>
          <button
            type='button'
            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}
            className='px-3 py-2 bg-gray-200 rounded-l-md hover:bg-gray-300'
          >
            -
          </button>
          <input
            id='inputQuantity'
            type='number'
            className='w-14 mx-0.5 py-[7px] text-center bg-gray-100 border-transparent quantity-input'
            placeholder='1'
            min='1'
            value={quantity}
            onChange={e => handleChangeQuantity(e)}
          />
          <button
            type='button'
            onClick={() => setQuantity(quantity + 1)}
            className='px-3 py-2 bg-gray-200 rounded-r-md hover:bg-gray-300'
          >
            +
          </button>
        </div>
      </div>
      <div className='flex gap-2 sm:gap-4'>
        <ButtonPrimary
          href={mailto}
          style='xl:ml-5 text-sm sm:text-base sm:!px-10'
        >
          Cotizar
        </ButtonPrimary>
        <ButtonCartSecondary
          className='ml-0 text-sm sm:text-base'
          onClick={() => handleAddToCart()}
        >
          Agregar al carrito
        </ButtonCartSecondary>
      </div>
    </div>
  )
}
