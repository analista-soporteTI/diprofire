import { LoaderCard } from '@components/status/LoaderCard'
import { CardProduct } from '@components/products/CardProduct.jsx'
import { Suspense } from 'react'

export const Products = ({ data, error }) => {
  if (error) return "Error al cargar los productos"
  if (!data) return <LoaderCard />

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

export const ProductsWithSuspense = ({ data, error }) => {
  return (
    <Suspense fallback={<LoaderCard />}>
      <Products data={data} error={error} />
    </Suspense>
  )
}
