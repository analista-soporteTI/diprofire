import { ArrowBackIcon } from '@icons/ArrowBack.jsx'

export const ButtonBack = ({ href, style, children, ...props }) => {
  return (
    <a
      href={href}
      className={`w-fit mb-10 pr-3 py-1 text-gray-600 hover:text-black flex gap-1 bg-transparent rounded-md hover:bg-gray-200 duration-200 ${style}`}
      {...props}
    >
      <ArrowBackIcon className='size-6' />
      {children}
    </a>
  )
}
