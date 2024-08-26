'use client'
import { useState } from 'react'
import { ButtonCartPrimary } from '@components/buttons/ButtonCart'
import {
  mailtoCartProductsGmail,
  mailtoCartProductsHotmail
} from '@hooks/mailto'

export const ButtonMail = ({ children, cart, className = '' }: any) => {
  const [selectedOption, setSelectedOption] = useState('gmail')

  const handleChange = (event: any) => {
    setSelectedOption(event.target.value)
  }

  const handleCartProductsClick = () => {
    const mailtoLink =
      selectedOption === 'gmail'
        ? mailtoCartProductsGmail(cart)
        : mailtoCartProductsHotmail(cart)
    return mailtoLink
  }

  return (
    <div className='flex flex-wrap items-center gap-4'>
      <div>
        <select
          value={selectedOption}
          onChange={handleChange}
          className='px-2 py-2.5 rounded border border-gray-300 cursor-pointer'
        >
          <option value='gmail'>Gmail</option>
          <option value='hotmail'>Hotmail/Outlook</option>
        </select>
      </div>

      <ButtonCartPrimary href={handleCartProductsClick()} className={className}>
        {children}
      </ButtonCartPrimary>
    </div>
  )
}
