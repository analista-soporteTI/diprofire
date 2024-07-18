import { useEffect, useState } from 'react'
import { getCategories, getProducts } from 'src/api/apiWoocomerce'
import useSWR from 'swr'
import useProductStore from '@hooks/storeProducts'
import useCategoryStore from '@hooks/storeCategories'
import { Aside } from '@components/products/Aside'
import { AsideLoader } from '@components/status/AsideLoader'
import { CardProduct } from '@components/products/CardProduct'
import { LoaderCardSmall } from '@components/status/LoaderCard'
import { StatusMessage } from '@components/status/StatusMessage'
import algoliasearch from 'algoliasearch/lite'

const appId = import.meta.env.PUBLIC_ALGOLIA_APP_ID
const searchKey = import.meta.env.PUBLIC_ALGOLIA_SEARCH_KEY

const searchClient = algoliasearch(appId, searchKey)
const index = searchClient.initIndex('wp_posts_product')

export const GalleryProducts = () => {
  const { data: categories, error: errorCategories } = useSWR(
    'categories',
    getCategories
  )

  const { data: products, error: errorProducts } = useSWR(
    'products',
    getProducts,
    {
      onLoadingSlow: () => <LoaderCardSmall />,
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

  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = async event => {
    const { value } = event.target
    setSearchTerm(value)

    if (value.trim() !== '') {
      try {
        const results = await index.search(value)
        setSearchResults(results.hits)
      } catch (error) {
        console.error('Error searching Algolia:', error)
      }
    } else {
      setSearchResults([])
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
          searchTerm={searchTerm}
          handleSearch={handleSearch}
        />
      )}
      <main className='pt-10 lg:pt-24 pb-10 z-10'>
        <section className='w-full'>
          <h1 className='mb-10 text-3xl font-bold text-center lg:text-start px-4 sm:px-10'>
            Todos nuestros productos
          </h1>
          {searchTerm && searchResults.length > 0 ? (
            <ul className='w-full mx-auto px-4 sm:px-10 gap-10 gap-y-8 flex flex-wrap justify-center lg:justify-start'>
              {searchResults.map(
                ({ objectID, post_title, permalink, slug, images }) => (
                  <CardProduct
                    key={objectID}
                    url={permalink || `/productos/${slug}/`}
                    name={post_title}
                    img={images.thumbnail?.url}
                    alt={`previsualización del producto: ${post_title}`}
                  />
                )
              )}
            </ul>
          ) : (
            <>
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
                      img={images[0]?.src}
                      alt={images[0]?.alt}
                    />
                  ))}
                </ul>
              ) : (
                <ul className='w-full mx-auto px-4 sm:px-10 gap-10 gap-y-8 flex flex-wrap justify-center lg:justify-start'>
                  <LoaderCardSmall />
                  <LoaderCardSmall />
                  <LoaderCardSmall />
                  <LoaderCardSmall />
                  <LoaderCardSmall />
                  <LoaderCardSmall />
                  <LoaderCardSmall />
                  <LoaderCardSmall />
                </ul>
              )}
            </>
          )}
        </section>
      </main>
    </div>
  )
}
