export const InfoIcon = ({ className = '' }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='60'
      height='60'
      viewBox='0 0 24 24'
      className={className}
    >
      <g fill='none' stroke='currentColor' stroke-linejoin='round'>
        <circle
          cx='12'
          cy='12'
          r='9'
          stroke-linecap='round'
          stroke-width='1.5'
        />
        <path stroke-width='2.25' d='M12 8h.01v.01H12z' />
        <path stroke-linecap='round' stroke-width='1.5' d='M12 12v4' />
      </g>
    </svg>
  )
}
