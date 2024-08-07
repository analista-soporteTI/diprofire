import Link from "next/link"

export const ButtonCartPrimary = ({
  href,
  className = '',
  children,
  ...props
}: any) => {
  return (
    <Link
      href={href}
      className={`block w-fit rounded bg-green-600 px-6 py-2.5 lg:py-2 my-auto font-bold text-white hover:bg-green-700 focus:outline-none focus:ring active:text-opacity-75 duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {children}
    </Link>
  )
}

export const ButtonCartSecondary = ({ className = '', children, ...props }: any) => {
  return (
    <button
      type='button'
      className={`block w-fit rounded px-6 py-2.5 lg:py-2 my-auto font-bold text-green-600 border border-green-600 hover:text-green-600 hover:bg-green-200 focus:outline-none focus:ring active:text-opacity-75 duration-200 hover:border-green-200 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
