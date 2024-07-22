import '@styles/quantity.css'

export const Quantity = ({
  value = 1,
  className = '',
  addQuantity,
  subQuantity,
  updateQuantity,
  ...props
}) => {
  const inputValue = e => {
    let parsedValue = parseInt(e.target.value)
    let newValue = parsedValue > 1 ? parsedValue : 0
    updateQuantity(newValue)
  }

  return (
    <div className={className}>
      <button
        type='button'
        onClick={() => subQuantity()}
        className='px-3 py-1 bg-gray-200 rounded-l-md hover:bg-gray-300'
      >
        -
      </button>
      <input
        id='quantity'
        type='number'
        className='w-12 mx-0.5 py-[3px] text-center bg-gray-100 border-transparent quantity-input'
        placeholder='1'
        min='1'
        value={value}
        onChange={e => inputValue(e)}
        {...props}
      />
      <button
        type='button'
        onClick={() => addQuantity()}
        className='px-3 py-1 bg-gray-200 rounded-r-md hover:bg-gray-300'
      >
        +
      </button>
    </div>
  )
}
