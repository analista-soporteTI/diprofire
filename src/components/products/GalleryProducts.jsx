import { useEffect } from 'react'
import useSWR from 'swr'
import { getCategories, getProducts } from 'src/api/apiWoocomerce.js'
import { Aside } from '@components/products/Aside.jsx'
import { Products } from '@components/Products'
import { LoaderCardSmall } from '@components/status/LoaderCard'
import { AsideLoader } from '@components/status/AsideLoader'
import useProductStore from '@hooks/storeProducts.js'
import useCategoryStore from '@hooks/storeCategories'

export const GalleryProducts = () => {
  const { data: categories, error: errorCategories } = useSWR(
    'categories',
    getCategories
  )

  const { data: products, error: errorProducts } = useSWR(
    'products',
    getProducts
  )

  const listCategories = useCategoryStore(state => state.categories)
  const setCategories = useCategoryStore(state => state.setCategories)
  const productList = useProductStore(state => state.products)
  const setProductList = useProductStore(state => state.setProducts)

  useEffect(() => {
    if (categories) {
      const filterCategories = categories.filter(
        category => category.name !== 'Sin categorizar'
      )
      setCategories(filterCategories)
    }
  }, [categories, setCategories])

  useEffect(() => {
    if (products && !productList.length) {
      setProductList(products)
    }
  }, [products, productList, setProductList])

  const handleCategories = category => {
    if (category === '') {
      setProductList(products)
    } else {
      const filtered = products?.filter(product =>
        product.categories.some(cat => cat.name === category)
      )
      setProductList(filtered)
    }
  }

  return (
    <div className='flex flex-col justify-center lg:flex-row lg:justify-start gap-10'>
      {!categories && !listCategories && <AsideLoader />}
      {listCategories && (
        <Aside
          handleCategories={handleCategories}
          categories={listCategories}
          errorCategories={errorCategories}
        />
      )}
      <main className='pt-10 lg:pt-24 pb-10 z-10'>
        <section>
          <h1 className='mb-10 text-3xl font-bold text-center lg:text-start lg:pl-10'>
            Todos nuestros productos
          </h1>
          {errorProducts && (
            <p className='text-center'>Error al cargar los productos</p>
          )}
          {!products && !productList.length && <LoaderCardSmall />}
          {productList.length > 0 && <Products data={productList} />}
        </section>
      </main>
    </div>
  )
}
