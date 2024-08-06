export const ButtonPrimary = ({ href, className = '', children, ...props }: any) => {
  return (
    <a
      href={href}
      className={`block w-fit rounded bg-green-600 px-6 py-2.5 lg:py-2 my-auto font-bold text-white hover:bg-green-700 focus:outline-none focus:ring active:text-opacity-75 duration-200 ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
