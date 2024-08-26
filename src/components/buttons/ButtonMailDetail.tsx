'use client'
import { useState } from 'react'
import { ButtonCartPrimary } from '@components/buttons/ButtonCart'
import {
  mailtoDetailProductGmail,
  mailtoDetailProductHotmail
} from '@hooks/mailto'
import { Mail } from 'lucide-react'

export const ButtonMailDetail = ({ product }: any) => {
  const [selectedOption, setSelectedOption] = useState('gmail')

  const handleChange = (event: any) => {
    setSelectedOption(event.target.value)
  }

  const handleDetailProductClick = () => {
    const mailtoLink =
      selectedOption === 'gmail'
        ? mailtoDetailProductGmail(product)
        : mailtoDetailProductHotmail(product)
    return mailtoLink
  }

  return (
    <div className='flex flex-wrap items-center gap-4'>
      <div>
        <select
          value={selectedOption}
          onChange={handleChange}
          className='rounded border-gray-300 p-2.5 border cursor-pointer'
        >
          <option value='gmail'>Gmail</option>
          <option value='hotmail'>Hotmail/Outlook</option>
        </select>
      </div>
      <ButtonCartPrimary href={handleDetailProductClick()} className='flex gap-1.5 items-center'>
        <Mail size={20} />
        Cotizar producto
      </ButtonCartPrimary>
    </div>
  )
}
