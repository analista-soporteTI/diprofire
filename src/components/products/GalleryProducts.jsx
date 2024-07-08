import useSWR from 'swr'
import { getCategories, getProducts } from 'src/api/apiWoocomerce.js'
import { Aside } from '@components/products/Aside.jsx'
import { Products } from '@components/Products'
import { useEffect, useState } from 'react'
import { LoaderCardSmall } from '@components/status/LoaderCard'
import { AsideLoader } from '@components/status/AsideLoader'

export const GalleryProducts = () => {
  const { data: categories, error: errorCategories } = useSWR(
    'categories',
    getCategories
  )

  const { data: products, error: errorProducts } = useSWR(
    'products',
    getProducts
  )

  const listCategories = categories?.filter(
    category => category.name !== 'Sin categorizar'
  )

  const [listProducts, setListProducts] = useState([])

  useEffect(() => {
    if (products) {
      setListProducts(products)
    }
  }, [products])

  const handleCategories = category => {
    if (category === '') {
      return setListProducts(products)
    }

    let filtered = products?.filter(product =>
      product.categories.some(cat => cat.name === category)
    )

    setListProducts(filtered)
  }

  return (
    <div className='flex gap-10'>
      {!listCategories && <AsideLoader />}
      {listCategories && (
        <Aside
          handleCategories={handleCategories}
          categories={listCategories}
          errorCategories={errorCategories}
        />
      )}
      <main className='pt-24 pb-10 z-10'>
        <section>
          <h1 className='mb-10 text-3xl font-bold text-center lg:text-start lg:pl-10'>
            Todos nuestros productos
          </h1>
          {errorProducts && (
            <p className='text-center'>Error al cargar los productos</p>
          )}
          {!products && <LoaderCardSmall />}
          {listProducts && <Products data={listProducts} />}
        </section>
      </main>
    </div>
  )
}
