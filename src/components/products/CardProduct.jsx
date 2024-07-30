import { ProductDetailAction } from '@components/products/ProductDetailAction'
import notFoundImg from '@assets/products/not found.png'

export const CardProduct = ({
  id,
  name,
  sku,
  img,
  alt,
  brand,
  description
}) => {
  const new_array_brand = brand.map(item => item.name).join(', ') || brand
  const format_sku = sku.replace(/<p>/g, '').replace(/<\/p>/g, '')

  const product = {
    id: id,
    name: name,
    sku: format_sku,
    img: img ? img.thumbnail.url : notFoundImg.src,
    brand: new_array_brand || brand.product_tag,
    description: description
  }

  return (
    <article className='group block mx-auto max-w-[180px] h-full w-full rounded-lg'>
      {img ? (
        <img
          src={img.thumbnail.url}
          alt={alt}
          className='aspect-square w-full rounded object-contain object-center border-2 border-zinc-200 shadow-sm bg-white'
        />
      ) : (
        <img
          src={notFoundImg.src}
          alt={alt}
          className='aspect-square w-full rounded object-cover border-2 border-zinc-200 shadow-sm bg-white'
        />
      )}
      <div className='mt-3 flex flex-col justify-evenly'>
        <a href={`productos/${id}`} className='font-medium text-base text-gray-900 pb-1 mb-1 border-b border-zinc-300 hover:text-green-600 duration-200'>
          {name}
        </a>
        {sku && <p className='text-sm opacity-85'>SKU: {format_sku}</p>}
        <p className='text-sm opacity-85 capitalize'>Marca: {new_array_brand}</p>
        <ProductDetailAction product={product} client:visible />
      </div>
    </article>
  )
}
