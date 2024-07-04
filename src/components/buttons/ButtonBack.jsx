import { ArrowBackIcon } from '@icons/ArrowBack.jsx'

export const ButtonBack = ({ href, style, children, ...props }) => {
  return (
    <a
      href={href}
      className={`w-fit text-gray-600 hover:text-black flex gap-1 ${style}`}
      {...props}
    >
      <ArrowBackIcon className='size-6' />
      {children}
    </a>
  )
}
