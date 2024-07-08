import { CardProduct } from '@components/products/CardProduct.jsx'

export const Products = ({ data }) => {
  return (
    <ul className='w-full mx-auto px-4 sm:px-10 gap-10 gap-y-8 flex flex-wrap justify-center lg:justify-start'>
      {data.map(product => (
        <CardProduct
          key={product.sku}
          url={`/productos/${product.slug}/`}
          name={product.name}
          img={product.images[0].src}
          alt={product.images[0].alt}
        />
      ))}
    </ul>
  )
}
