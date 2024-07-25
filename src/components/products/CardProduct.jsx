import { ProductDetailAction } from '@components/products/ProductDetailAction'
import { NoImageIcon } from '@icons/NoImage'

export const CardProduct = ({ id, name, sku, img, alt, brand }) => {
  const new_array_brand = brand.map(item => item.name).join(', ') || brand
  const format_sku = sku.replace(/<p>/g, '').replace(/<\/p>/g, '')

  const product = {
    id: id,
    name: name,
    sku: format_sku,
    img: img,
    brand: new_array_brand || brand.product_tag
  }

  return (
    <article className='group block w-[200px] rounded-lg min-h-[400px]'>
      {img ? (
        <img
          src={img}
          alt={alt}
          className='aspect-square w-full rounded object-cover border-2 border-zinc-200 shadow-sm'
        />
      ) : (
        <NoImageIcon className='size-48 opacity-70' />
      )}
      <div className='mt-3 flex flex-col justify-evenly'>
        <h3 className='font-medium text-base text-gray-900 pb-1 mb-1 border-b border-zinc-300'>
          {name}
        </h3>
        {sku && <p className='text-sm opacity-85'>SKU: {format_sku}</p>}
        <p className='text-sm opacity-85'>Marca: {new_array_brand}</p>
        <ProductDetailAction product={product} client:visible />
      </div>
    </article>
  )
}
