import { useRef, useEffect } from 'react'
import {
  InstantSearch,
  SearchBox,
  Configure,
  useInfiniteHits,
  RefinementList,
  ClearRefinements
} from 'react-instantsearch'
import algoliasearch from 'algoliasearch/lite'
import { CardProduct } from '@components/products/CardProduct'
import { StatusMessage } from '@components/status/StatusMessage'
import { STATUS } from '@consts/status'
import '@styles/gallery-products.css'

const appId = import.meta.env.PUBLIC_ALGOLIA_APP_ID
const searchKey = import.meta.env.PUBLIC_ALGOLIA_SEARCH_KEY
const indexName = import.meta.env.PUBLIC_ALGOLIA_INDEX_NAME

const searchClient = algoliasearch(appId, searchKey)

const Hit = ({ hit }) => (
  <CardProduct
    id={hit.post_id}
    name={hit.post_title}
    sku={hit.post_excerpt}
    img={hit.images.thumbnail.url || ''}
    alt={`previsualización del producto: ${hit.post_title}`}
    brand={hit.taxonomies.product_tag || []}
  />
)

const CustomInfiniteHits = () => {
  const { hits, isLastPage, showMore } = useInfiniteHits()
  const sentinelRef = useRef(null)

  useEffect(() => {
    if (sentinelRef.current !== null) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !isLastPage) {
            showMore()
          }
        })
      })

      observer.observe(sentinelRef.current)

      return () => {
        observer.disconnect()
      }
    }
  }, [isLastPage, showMore])

  return (
    <div className='ais-InfiniteHits'>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
        {hits.map(hit => (
          <li key={hit.objectID} className='flex flex-col'>
            <Hit hit={hit} />
          </li>
        ))}
        <li ref={sentinelRef} aria-hidden='true' />
      </ul>
      {isLastPage && hits.length > 0 && (
        <StatusMessage
          type={STATUS.SUCCESS}
          message='¡Ya has visto todos los productos!'
          className='w-fit mx-auto mt-10'
        />
      )}
      {hits.length === 0 && (
        <StatusMessage
          type={STATUS.INFO}
          message='No hay coincidencias con tu búsqueda'
          className='w-fit mt-10'
        />
      )}
    </div>
  )
}

export const GalleryProducts = () => {
  return (
    <main className='pt-10 lg:pt-24 pb-10 z-10 w-full gap-10 px-4 sm:px-10 max-[1024px]:pt-20 max-w-7xl mx-auto'>
      <h1 className='text-3xl font-bold text-start mb-6'>
        Todos <span className='text-green-600'>nuestros productos</span>
      </h1>
      <div className='mb-6'>
        <InstantSearch indexName={indexName} searchClient={searchClient}>
          <div className='border-b border-zinc-300 mb-10 pb-10 flex flex-wrap gap-6 lg:gap-10 xl:gap-20'>
            <div className='w-full max-w-md'>
              <h2 className='mb-2'>Buscar productos</h2>
              <SearchBox
                id='searchProducts'
                className='w-full'
                placeholder='Nombre, sku, marca, etc...'
              />
              <ClearRefinements
                excludedAttributes={[]}
                translations={{
                  resetButtonText: 'Limpiar filtros'
                }}
              />
            </div>
            <div className='flex flex-wrap gap-10'>
              <div>
                <h2>Filtrar por categorías</h2>
                <RefinementList attribute='taxonomies.product_cat' />
              </div>
              <div>
                <h2>Filtrar por marcas</h2>
                <RefinementList attribute='taxonomies.product_tag' />
              </div>
            </div>
          </div>
          <Configure />
          <CustomInfiniteHits />
        </InstantSearch>
      </div>
    </main>
  )
}
