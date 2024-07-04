import { ButtonBack } from '@components/buttons/ButtonBack'
import { ProductDetailAction } from '@components/products/ProductDetailAction'
import { DetailProductLoader } from '@components/status/DetailProductLoader'
import { ErrorMessage } from '@components/status/ErrorMessage'
import { getProducts } from 'src/api/apiWoocomerce'
import { Suspense } from 'react'
import useSWR from 'swr'

export const DetailProductLayout = ({ slug }) => {
  const { data, error } = useSWR('products', getProducts, {
    suspense: true,
    revalidateOnFocus: true,
    dedupingInterval: 120000
  })

  if (error) return <ErrorMessage />
  if (!data) return <DetailProductLoader />

  const product = data.find(product => product.slug === slug)
  
  const parsed_description = product.description.replace(/<[^>]*>?/gm, '')
  const parsed_short_description = product.short_description.replace(
    /<[^>]*>?/gm,
    ''
  )

  return (
    <div className='flex gap-10 w-fit mx-auto'>
      <main className='px-4 sm:px-10 pt-24 pb-10 w-full max-w-5xl z-10'>
        <div>
          <ButtonBack href='/productos' style='mb-4'>
            Volver a productos
          </ButtonBack>
          <div className='flex flex-wrap items-center gap-4 my-4'>
            <p className='font-medium'>Etiquetas:</p>
            <div className='text-sm flex flex-wrap gap-2'>
              {product.tags.map(category => (
                <p
                  key={category.name}
                  className='px-2 border border-gray-300 rounded-md py-1'
                >
                  {category.name}
                </p>
              ))}
            </div>
          </div>
          <div className='flex flex-col xl:flex-row xl:items-center gap-6'>
            <img
              src={product.images[0].src}
              className='w-full max-w-[300px] aspect-square object-contain'
              alt={product.images[0].alt}
            />
            <div>
              <h1 className='font-bold text-3xl pb-4'>{product.name}</h1>
              <p className='mb-6 sm:mb-10'>{parsed_short_description}</p>
              <ProductDetailAction product={product} client:visible />
            </div>
          </div>
        </div>
        <div>
          <h2 className='pb-2 pt-4 text-2xl font-semibold'>Descripción</h2>
          <p>{parsed_description}</p>
        </div>
        <div>
          <h2 className='pb-2 pt-4 text-2xl font-semibold'>
            Información adicional
          </h2>
          <p>Código/NP: {product.sku}</p>
          <p>Marca: {product.tags[0]?.name}</p>
          <p>Modelo: {product.tags[1]?.name}</p>
        </div>
      </main>
    </div>
  )
}

export const DetailProductWithSuspense = ({ slug }) => {
  return (
    <Suspense fallback={<DetailProductLoader />}>
      <DetailProductLayout slug={slug} />
    </Suspense>
  )
}
