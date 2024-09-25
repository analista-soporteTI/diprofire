'use client'
import { ButtonCartSecondary } from '@components/buttons/ButtonCart'
import { useEffect, useState } from 'react'
import useCartStore from '@/hooks/cart'
import { CartIcon } from '@icons/Cart'
import '@styles/quantity.css'
import { createInfoProduct } from '@hooks/infoProducts'
import { ButtonMail } from '@components/buttons/ButtonMail'
import { validationProducts } from '@/hooks/validation'
import { CircleAlert } from 'lucide-react'

export const ProductDetailAction = ({ product }: any) => {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCartStore()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [enterprise, setEnterprise] = useState('')
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  const [errors, setErrors] = useState<{
    name?: string
    email?: string
    enterprise?: string
  }>({})

  const infoProduct = createInfoProduct({
    product: product,
    quantity: quantity
  })

  const data = {
    contact: {
      name: name,
      email: email,
      enterprise: enterprise
    },
    products: [infoProduct]
  }

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

  useEffect(() => {
    validationProducts
      .validate({ name, email, enterprise }, { abortEarly: false })
      .then(() => {
        setIsButtonDisabled(false)
        setErrors({})
      })
      .catch(err => {
        setIsButtonDisabled(true)
        const errorMessages = err.inner.reduce(
          (acc: any, curr: any) => ({ ...acc, [curr.path]: curr.message }),
          {}
        )
        setErrors(errorMessages)
      })
  }, [name, email, enterprise])

  return (
    <div className='flex flex-col gap-6 mt-2 items-start'>
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
      <div className='border-t pt-6'>
        <p className='flex gap-1 items-start mb-5 text-sm text-gray-600'>
          <CircleAlert size={20} color='orange' />
          <span>
            Completa los campos para recibir tu cotización por correo
            electrónico. Nada de spam, lo prometemos.
          </span>
        </p>
        <div className='flex flex-wrap gap-3'>
          <label>
            <input
              id='product_detail_name'
              type='text'
              name='name'
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder='Nombre y apellido'
              className='border rounded-sm px-4 py-2 w-[260px]'
            />
            {errors.name && (
              <p className='text-red-600 text-sm'>{errors.name}</p>
            )}
          </label>
          <label>
            <input
              id='product_detail_email'
              type='email'
              name='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='Correo electrónico'
              className='border rounded-sm px-4 py-2 w-[260px]'
            />
            {errors.email && (
              <p className='text-red-600 text-sm'>{errors.email}</p>
            )}
          </label>
          <label>
            <input
              id='product_detail_enterprise'
              type='text'
              name='enterprise'
              value={enterprise}
              onChange={e => setEnterprise(e.target.value)}
              placeholder='Empresa (opcional)'
              className='border rounded-sm px-4 py-2 w-[260px]'
            />
            {errors.enterprise && (
              <p className='text-red-600 text-sm'>{errors.enterprise}</p>
            )}
          </label>
        </div>
      </div>
      <ButtonMail data={data} disabled={isButtonDisabled}>
        Solicitar cotización
      </ButtonMail>
    </div>
  )
}
