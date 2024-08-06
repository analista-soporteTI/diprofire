export const MenuIcon = ({ className = '', ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='60'
      height='60'
      viewBox='0 0 24 24'
      className={className}
      {...props}
    >
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M3 6.001h18m-18 6h18m-18 6h18'
      />
    </svg>
  )
}
