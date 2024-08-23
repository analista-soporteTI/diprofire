import { ArrowUp } from '@/icons/ArrowUp'
import Link from 'next/link'

interface ButtonUpProps {
  href: string
  className?: string
}

export const ButtonUp = ({ href, className = '' }: ButtonUpProps) => {
  return (
    <Link
      href={href}
      className={`block fixed bottom-10 right-6 animate-bounce z-50 w-full h-fit max-w-[40px] group ${className}`}
    >
      <ArrowUp className='size-11 p-1.5 bg-green-400 rounded-full shadow-md fill-zinc-700 group-hover:fill-white duration-200' />
    </Link>
  )
}
