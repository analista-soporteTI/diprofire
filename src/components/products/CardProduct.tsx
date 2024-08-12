import { ProductDetailAction } from '@/components/products/ProductDetailAction'
import notFoundImg from '@assets/products/not found.png'
import { createInfoProduct } from '@hooks/infoProducts'
import Image from 'next/image'

export const CardProduct = ({
  id,
  name,
  sku,
  model,
  img,
  brand,
  description
}: any) => {
  const product = createInfoProduct({
    product: {
      id: id,
      name: name,
      sku: sku,
      model: model,
      img: img ? img : notFoundImg.src,
      brand: brand,
      description: description
    }
  })

  return (
    <article className='group block mx-auto max-w-[180px] h-full w-full rounded-lg'>
      <Image
        src={img || notFoundImg.src}
        alt={`Previsualización del producto: ${name}`}
        width={180}
        height={180}
        loading='lazy'
        className='aspect-square object-cover h-[180px] w-[180px] rounded border-2 border-zinc-200 shadow-sm bg-white'
      />
      <div className='mt-3 flex flex-col justify-evenly'>
        <h2 className='font-medium text-base text-gray-900 pb-1 mb-1 border-b border-zinc-300'>
          {name}
        </h2>
        {sku && <p className='text-sm opacity-85'>SKU: {sku}</p>}
        <p className='text-sm opacity-85 capitalize'>Marca: {brand}</p>
        <ProductDetailAction product={product} link={`productos/${id}`} />
      </div>
    </article>
  )
}
