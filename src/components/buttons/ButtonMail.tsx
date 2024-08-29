'use client'
import { useState } from 'react'
import { ButtonCartPrimary } from '@components/buttons/ButtonCart'
import {
  mailtoCartProductsDefault,
  mailtoCartProductsGmail,
  mailtoCartProductsHotmail
} from '@hooks/mailto'

export const ButtonMail = ({ children, cart, className = '' }: any) => {
  const [selectedOption, setSelectedOption] = useState('default')

  const handleChange = (event: any) => {
    setSelectedOption(event.target.value)
  }

  const handleCartProductsClick = () => {
    const mailtoLink =
      selectedOption === 'gmail'
        ? mailtoCartProductsGmail(cart)
        : selectedOption === 'hotmail'
        ? mailtoCartProductsHotmail(cart)
        : mailtoCartProductsDefault(cart)
    return mailtoLink
  }

  return (
    <div className={`flex flex-wrap items-end gap-4 ${className}`}>
      <div className='flex flex-col'>
        <label
          htmlFor='email-select'
          className='text-xs font-bold text-gray-600 mb-1'
        >
          Correo electrónico
        </label>
        <select
          id='email-select'
          value={selectedOption}
          onChange={handleChange}
          className='px-2 py-2.5 rounded border border-gray-300 cursor-pointer'
        >
          <option value='default'>Predeterminado</option>
          <option value='gmail'>Gmail</option>
          <option value='hotmail'>Hotmail/Outlook</option>
        </select>
      </div>

      <ButtonCartPrimary
        href={handleCartProductsClick()}
        className='flex gap-1.5 items-center !my-0'
      >
        {children}
      </ButtonCartPrimary>
    </div>
  )
}
