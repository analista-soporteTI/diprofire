import notFoundImg from '@assets/products/not found.png'
import { createInfoProduct } from '@hooks/infoProducts'
import Image from 'next/image'
import { ProductCardAction } from '@components/products/ProductCardAction'

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
    <article className='group mx-auto max-w-[280px] h-full w-full p-4 rounded-lg border mt-3 flex flex-col justify-evenly'>
      <div>
        <h2 className='font-bold text-lg text-gray-900 pb-1 mb-1'>{name}</h2>
        {sku && <p className='text-sm opacity-85'>{sku}</p>}
        {sku && <p className='text-sm opacity-85 capitalize'>{brand}</p>}
      </div>
      <Image
        src={img || notFoundImg.src}
        alt={`Previsualización del producto: ${name}`}
        width={200}
        height={200}
        loading='lazy'
        className='aspect-square object-cover h-[200px] w-[200px] rounded-md my-6'
      />
      <ProductCardAction product={product} link={`productos/${id}`} />
    </article>
  )
}
