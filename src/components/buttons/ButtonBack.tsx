import { ArrowBackIcon } from '@/icons/ArrowBack'
import Link from 'next/link'

export const ButtonBack = ({ href, className = '', children, ...props }: any) => {
  return (
    <Link
      href={href}
      className={`w-fit mb-10 pr-3 py-1 text-gray-600 hover:text-black flex gap-1 bg-transparent rounded-md hover:bg-gray-200 duration-200 ${className}`}
      {...props}
    >
      <ArrowBackIcon className='size-6' />
      {children}
    </Link>
  )
}
