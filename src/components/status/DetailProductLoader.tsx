import '@styles/detail-product-loader.css'

export const DetailProductLoader = () => {
  return (
    <div className='loader'>
      <div className='image-placeholder'></div>
      <div className='text-placeholder large'></div>
      <div className='text-placeholder medium'></div>
      <div className='text-placeholder small'></div>
    </div>
  )
}
