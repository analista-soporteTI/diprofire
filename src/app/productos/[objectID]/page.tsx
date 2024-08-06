import { ButtonBack } from '@/components/buttons/ButtonBack'
import { ProductDetailAction } from '@/components/products/ProductDetailAction'
import { getAllProducts } from '@api/apiAlgolia'
import { createInfoProduct } from '@hooks/infoProducts'

import Image from 'next/image'
import notFoundImg from '@assets/products/not found.png'
import { StatusMessage } from '@/components/status/StatusMessage'

export const runtime = 'edge'

interface Product {
  objectID: string;
  sku: string;
  nombre: string;
  imagen: string;
  descripcion: string;
  marca: string;
  categoria: string;
  modelo: string;
}

async function findProduct (id: any): Promise<Product | null> {
  try {
    const products = await getAllProducts()
    const product = products.find(product => product.objectID === id)
    return product as Product || null
  } catch (error) {
    console.error('Error finding product:', error)
    return null
  }
}

interface ProductDetailProps {
  params: { objectID: string };
}

export default async function ProductDetail({ params }: ProductDetailProps) {
  const { objectID } = params
  const product = await findProduct(objectID)

  if (!product) {
    return (
      <main className='grid place-content-center items-center'>
        <StatusMessage message='Producto no encontrado' />
      </main>
    )
  }

  const { sku, nombre, imagen, descripcion, marca, categoria, modelo } = product

  const infoProduct = createInfoProduct({
    product: {
      id: objectID,
      name: nombre,
      description: descripcion,
      sku: sku,
      model: modelo || null,
      brand: marca,
      img: imagen || ''
    }
  })

  return (
    <main className='mx-auto max-w-7xl px-4 sm:px-10 pt-24 pb-8 md:py-48 grid items-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 lg:gap-24 items-center'>
        <div className='w-full order-2 md:order-1'>
          <ButtonBack
            href='/productos'
            className='mb-10 bg-green-transparent hover:bg-gray-200 duration-200 rounded-md pr-3 py-1'
          >
            Volver a productos
          </ButtonBack>
          <h1 className='font-bold text-3xl md:text-4xl pb-4 text-green-600'>
            {nombre}
          </h1>
          {descripcion === '' ? (
            <p className='opacity-80'>Sin descripción</p>
          ) : (
            <p>{descripcion}</p>
          )}
          <div className='my-6'>
            <h2 className='pb-2 pt-4 text-lg md:text-xl font-semibold'>
              Información adicional:
            </h2>
            <p>SKU: {sku}</p>
            {modelo ? <p>Modelo: {modelo}</p> : null}
            <p>Marca: {marca}</p>
          </div>
          <ProductDetailAction product={infoProduct} />
          {categoria ? (
            <div className='flex flex-wrap items-center gap-4 mt-8'>
              <p className='font-medium'>Categorías:</p>
              <p className='px-2 border border-gray-300 rounded-md py-1'>
                {categoria}
              </p>
            </div>
          ) : null}
        </div>
        {!imagen ? (
          <Image
            src={notFoundImg}
            alt={`Imagen no disponible para ${nombre}`}
            width={500}
            height={500}
            className='w-full order-1 md:order-2 max-w-[500px] aspect-square object-cover bg-white rounded-md shadow-sm'
          />
        ) : (
          <Image
            src={imagen}
            alt={`Previsualización de ${nombre}`}
            width={500}
            height={500}
            className='w-full order-1 md:order-2 max-w-[500px] aspect-square object-cover bg-white rounded-md'
          />
        )}
      </div>
    </main>
  )
}
