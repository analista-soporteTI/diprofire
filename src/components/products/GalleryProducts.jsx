import { useEffect } from 'react'
import { getCategories, getProducts } from 'src/api/apiWoocomerce'
import useSWR from 'swr'
import useProductStore from '@hooks/storeProducts'
import useCategoryStore from '@hooks/storeCategories'
import { Aside } from '@components/products/Aside'
import { AsideLoader } from '@components/status/AsideLoader'
import { CardProduct } from '@components/products/CardProduct'
import {
  ListLoaderCardSmall,
  SingleLoaderCardSmall
} from '@components/status/LoaderCard'
import { StatusMessage } from '@components/status/StatusMessage'

export const GalleryProducts = () => {
  const { data: categories, error: errorCategories } = useSWR(
    'categories',
    getCategories
  )

  const { data: products, error: errorProducts } = useSWR(
    'products',
    getProducts,
    {
      onLoadingSlow: () => <SingleLoaderCardSmall />,
      onSuccess: data => {
        addProductList(data)
      }
    }
  )

  const listCategories = useCategoryStore(state => state.categories)
  const setCategories = useCategoryStore(state => state.setCategories)
  const productList = useProductStore(state => state.products)
  const addProductList = useProductStore(state => state.addProducts)
  const setProductList = useProductStore(state => state.setProducts)

  useEffect(() => {
    if (categories) {
      const filterCategories = categories.filter(
        category => category.name !== 'Sin categorizar'
      )
      setCategories(filterCategories)
    }
  }, [categories])

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
          <h1 className='mb-10 text-3xl font-bold text-center lg:text-start'>
            Todos nuestros productos
          </h1>
          {errorProducts && (
            <StatusMessage
              message='Error al cargar los productos'
              className='w-fit mx-auto mb-10'
            />
          )}
          {products && productList ? (
            <ul className='w-full mx-auto px-4 sm:px-10 gap-10 gap-y-8 flex flex-wrap justify-center lg:justify-start'>
              {productList.map(({ slug, name, images }) => (
                <CardProduct
                  key={slug}
                  url={`/productos/${slug}/`}
                  name={name}
                  img={images[0].src}
                  alt={images[0].alt}
                />
              ))}
            </ul>
          ) : (
            <ListLoaderCardSmall />
          )}
        </section>
      </main>
    </div>
  )
}
