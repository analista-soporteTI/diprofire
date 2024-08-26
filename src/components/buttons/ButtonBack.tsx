import { ArrowBackIcon } from '@/icons/ArrowBack'
import Link from 'next/link'

export const ButtonBack = ({ href, className = '', children, ...props }: any) => {
  return (
    <Link
      href={href}
      className={`w-fit mb-10 pr-3 py-2 text-lg text-gray-600 hover:text-black flex gap-1 rounded-md duration-200 underline decoration-transparent hover:decoration-black ${className}`}
      {...props}
    >
      <ArrowBackIcon className='size-7' />
      {children}
    </Link>
  )
}
