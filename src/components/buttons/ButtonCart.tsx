import Link from 'next/link'

export const ButtonCartPrimary = ({
  href,
  onClick,
  className = '',
  children,
  ...props
}: any) => {
  return href ? (
    <Link
      href={href}
      target='_blank'
      className={`block w-fit rounded bg-green-600 px-4 py-2.5 lg:py-2 my-auto font-bold text-white hover:bg-green-700 focus:outline-none active:scale-95 duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {children}
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={`block w-fit rounded bg-green-600 px-6 py-2.5 lg:py-2 my-auto font-bold text-white hover:bg-green-700 focus:outline-none active:scale-95 duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export const ButtonCartSecondary = ({
  className = '',
  children,
  ...props
}: any) => {
  return (
    <button
      type='button'
      className={`block w-fit rounded px-4 py-2.5 lg:py-2 my-auto font-bold text-green-600 border border-green-600 hover:text-green-600 hover:bg-green-200 focus:outline-none active:scale-95 duration-200 hover:border-green-200 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
