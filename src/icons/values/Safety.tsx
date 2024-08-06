export const Safety = ({ className = '', ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='128'
      height='128'
      viewBox='0 0 24 24'
      className={className}
      {...props}
    >
      <g
        fill='none'
        stroke='currentColor'
        stroke-linecap='round'
        stroke-linejoin='round'
        stroke-width='1.5'
        color='currentColor'
      >
        <path d='M11.998 2C8.99 2 7.04 4.019 4.734 4.755c-.938.3-1.407.449-1.597.66c-.19.21-.245.519-.356 1.135c-1.19 6.596 1.41 12.694 7.61 15.068c.665.255.998.382 1.61.382s.946-.128 1.612-.383c6.199-2.373 8.796-8.471 7.606-15.067c-.111-.616-.167-.925-.357-1.136s-.658-.36-1.596-.659C16.959 4.019 15.006 2 11.998 2' />
        <path d='M9 13s1 0 2 2c0 0 3.177-5 6-6' />
      </g>
    </svg>
  )
}
