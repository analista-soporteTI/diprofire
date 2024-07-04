export const ButtonSecondary = ({ href, style = '', children, ...props }) => {
  return (
    <a
      href={href}
      className={`block w-fit rounded px-6 py-2.5 my-auto font-bold text-green-600 border border-green-600 hover:text-green-600 hover:bg-green-200 focus:outline-none focus:ring active:text-opacity-75 duration-200 hover:border-green-200 ${style}`}
      {...props}
    >
      {children}
    </a>
  )
}
