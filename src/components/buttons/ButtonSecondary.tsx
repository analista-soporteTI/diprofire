import Link from "next/link"

export const ButtonSecondary = ({ href, className = '', children, ...props }: any) => {
  return (
    <Link
      href={href}
      className={`block w-fit rounded px-6 py-2.5 lg:py-2 my-auto font-bold text-green-600 border border-green-600 hover:text-green-700 hover:bg-green-200 focus:outline-none active:scale-95 duration-200 hover:border-green-200 ${className}`}
      {...props}
    >
      {children}
    </Link>
  )
}
