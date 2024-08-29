'use client'
import { useState } from 'react'
import { ButtonCartPrimary } from '@components/buttons/ButtonCart'
import {
  mailtoDetailProductDefault,
  mailtoDetailProductGmail,
  mailtoDetailProductHotmail
} from '@hooks/mailto'
import { Mail } from 'lucide-react'

export const ButtonMailDetail = ({ product }: any) => {
  const [selectedOption, setSelectedOption] = useState('default')

  const handleChange = (event: any) => {
    setSelectedOption(event.target.value)
  }

  const handleDetailProductClick = () => {
    const mailtoLink =
      selectedOption === 'gmail'
        ? mailtoDetailProductGmail(product)
        : selectedOption === 'hotmail'
        ? mailtoDetailProductHotmail(product)
        : mailtoDetailProductDefault(product)
    return mailtoLink
  }

  return (
    <div className='flex flex-wrap items-end gap-4'>
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
        href={handleDetailProductClick()}
        className='flex gap-1.5 items-center !my-0'
      >
        <Mail size={20} />
        Cotizar producto
      </ButtonCartPrimary>
    </div>
  )
}
