export const MutedIcon = ({ className = '', ...props }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1200'
      height='1200'
      viewBox='0 0 24 24'
      className={className}
      {...props}
    >
      <g fill='none' stroke='#000000'>
        <path d='M3.158 13.93a3.752 3.752 0 0 1 0-3.86a1.5 1.5 0 0 1 .993-.7l1.693-.339a.45.45 0 0 0 .258-.153L8.17 6.395c1.182-1.42 1.774-2.129 2.301-1.938C11 4.648 11 5.572 11 7.42v9.162c0 1.847 0 2.77-.528 2.962c-.527.19-1.119-.519-2.301-1.938L6.1 15.122a.45.45 0 0 0-.257-.153L4.15 14.63a1.5 1.5 0 0 1-.993-.7z' />
        <path strokeLinecap='round' d='m15 15l6-6m0 6l-6-6' />
      </g>
    </svg>
  )
}
