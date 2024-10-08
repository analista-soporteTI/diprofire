'use client'

import { ButtonCartSecondary } from '@components/buttons/ButtonCart'
import { ButtonBack } from '@components/buttons/ButtonBack'
import { Quantity } from '@components/products/Quantity'
import { useEffect, useState } from 'react'
import useCartStore from '@/hooks/cart'
import { ImportantIcon } from '@icons/Important'
import notFoundImg from '@assets/products/not found.png'
import Image from 'next/image'
import Link from 'next/link'
import { ButtonMail } from '@components/buttons/ButtonMail'
import { CircleAlert, Trash2, X } from 'lucide-react'
import { validationProducts } from '@/hooks/validation'

export const CartUI = () => {
  const {
    cart,
    getCart,
    addOneToCart,
    removeFromCart,
    clearCart,
    updateQuantity,
    getLength
  } = useCartStore()
  const [lengthCart, setLengthCart] = useState(getLength())
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [enterprise, setEnterprise] = useState('')
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  const [errors, setErrors] = useState<{
    name?: string
    email?: string
    enterprise?: string
  }>({})

  useEffect(() => {
    getCart()
  }, [getCart])

  useEffect(() => {
    setLengthCart(getLength())
  }, [cart, getLength])

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

  const handleAddToCart = (product: any) => {
    addOneToCart(product)
  }
  const handleRemoveFromCart = (productId: any) => {
    removeFromCart(productId)
  }
  const handleClearCart = () => {
    clearCart()
  }
  const handleUpdateQuantity = (productId: any, quantity: any) => {
    updateQuantity(productId, quantity)
  }

  const data = {
    contact: {
      name,
      email,
      enterprise
    },
    products: cart
  }

  return (
    <section className='py-24 px-3 md:px-10 w-full mx-auto max-w-5xl'>
      <ButtonBack href='/productos'>Seguir cotizando</ButtonBack>
      <h1 className='text-3xl font-bold mb-8'>Carrito de cotizaciones</h1>
      {lengthCart === 0 && (
        <div className='mt-10 block'>
          <p className='mb-4 flex items-center gap-1 text-lg font-semibold text-green-600'>
            No hay productos en el carrito
            <ImportantIcon className='size-5' />
          </p>
          <p className='block'>
            Echa un vistazo a nuestros{' '}
            <Link
              href='/productos'
              className='text-green-600 underline underline-offset-2'
            >
              productos
            </Link>{' '}
            y añade los que te interesen a tu carrito de cotizaciones.
          </p>
        </div>
      )}
      {lengthCart > 0 && (
        <div className='flex flex-col gap-y-4 mt-5 p-5 rounded-md'>
          <ul className='space-y-4 max-sm:space-y-10'>
            {cart.map((item: any) => (
              <li
                key={item.name}
                className='first:mt-0 last:mb-0 flex max-md:flex-col max-md:items-start flex-wrap justify-between gap-4 items-center max-sm:peer-even:bg-gray-900 border-b border-black/20 py-4'
              >
                <div className='flex max-[400px]:flex-col max-sm:items-start items-center gap-4 sm:col-span-2'>
                  <div className='flex gap-4'>
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className='h-fit my-auto p-2 rounded-md text-red-600 hover:text-red-700 hover:bg-red-600/20'
                      title={`Eliminar ${item.name} del carrito`}
                    >
                      <X size={22} />
                    </button>
                    {item.img ? (
                      <Image
                        src={item.img}
                        alt={`Previsualización del producto: ${item.name}`}
                        width={80}
                        height={80}
                        loading='lazy'
                        className='max-w-[80px] rounded-md aspect-square'
                      />
                    ) : (
                      <Image
                        src={notFoundImg.src}
                        alt='Imagen de producto sin previsualización'
                        width={80}
                        height={80}
                        loading='lazy'
                        className='max-w-[80px] rounded-md aspect-square bg-white'
                      />
                    )}
                  </div>
                  <div>
                    <p className='w-fit block text-sm font-semibold md:max-w-[60ch]'>
                      {item.name}
                    </p>
                    <p className='w-fit block text-sm text-zinc-600'>
                      {`SKU: ${item.sku}`}
                    </p>
                    {item.model && (
                      <p className='w-fit block text-sm text-zinc-600'>
                        {`Modelo: ${item.model}`}
                      </p>
                    )}
                    {item.brand && (
                      <p className='w-fit block text-sm text-zinc-600'>
                        {`Marca: ${item.brand}`}
                      </p>
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
                  updateQuantity={(value: any) =>
                    handleUpdateQuantity(item.id, value)
                  }
                />
              </li>
            ))}
          </ul>
        </div>
      )}
      {lengthCart > 0 && (
        <>
          <p className='flex gap-1 items-start my-5 text-sm text-gray-600'>
            <CircleAlert size={20} color='orange' />
            <span>
              Completa los campos para recibir tu cotización por correo
              electrónico. Nada de spam, lo prometemos.
            </span>
          </p>
          <div className='w-full flex flex-wrap gap-4 justify-between'>
            <div className='mb-4 flex flex-wrap gap-2'>
              <label>
                <input
                  id='cart_name'
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
                  id='cart_email'
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
                  id='cart_enterprise'
                  type='tel'
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
            <div className='flex flex-wrap gap-2'>
              <ButtonMail data={data} disabled={isButtonDisabled}>
                Cotizar productos
              </ButtonMail>
              <ButtonCartSecondary
                disabled={lengthCart === 0}
                onClick={() => handleClearCart()}
                className='mt-0 flex gap-1.5 items-center text-red-600 border-0 hover:text-red-700 hover:bg-red-600/20'
              >
                <Trash2 size={20} />
                Borrar cotizaciones
              </ButtonCartSecondary>
            </div>
          </div>
        </>
      )}
      <p className='mt-5 mx-auto text-sm text-gray-600'>
        Ante cualquier duda o consulta, no dudes en contactarnos a través de
        nuestro{' '}
        <Link
          href='/contacto'
          className='text-green-600 underline underline-offset-2 hover:text-green-700'
        >
          formulario de contacto
        </Link>{' '}
        o a través de nuestro{' '}
        <Link
          href='tel:+56934501342'
          className='text-green-600 underline underline-offset-2 hover:text-green-700'
        >
          contacto telefónico
        </Link>
        .
      </p>
    </section>
  )
}
