import '@styles/quantity.css'

export const Quantity = ({
  value = 1,
  className = '',
  addQuantity,
  subQuantity,
  updateQuantity,
  ...props
}: any) => {
  const inputValue = (e: any) => {
    let parsedValue = parseInt(e.target.value)
    let newValue = parsedValue > 1 ? parsedValue : 1
    updateQuantity(newValue)
  }

  return (
    <div
      className={`h-fit w-fit bg-transparent rounded-md border ${className}`}
    >
      <button
        type='button'
        onClick={() => subQuantity()}
        className='px-4 py-2 rounded-l-md bg-transparent hover:bg-zinc-100 duration-200'
      >
        -
      </button>
      <input
        id='quantity'
        type='number'
        className='w-12 py-2 mx-0.5 text-center border-transparent bg-transparent quantity-input'
        placeholder='1'
        min='1'
        value={value}
        onChange={e => inputValue(e)}
        {...props}
      />
      <button
        type='button'
        onClick={() => addQuantity()}
        className='px-4 py-2 rounded-r-md bg-transparent hover:bg-zinc-100 duration-200'
      >
        +
      </button>
    </div>
  )
}
