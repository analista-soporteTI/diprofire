import { useRef, useEffect } from 'react'
import {
  InstantSearch,
  SearchBox,
  Configure,
  useInfiniteHits
} from 'react-instantsearch'
import algoliasearch from 'algoliasearch/lite'
import { CardProduct } from '@components/products/CardProduct'
import { StatusMessage } from '@components/status/StatusMessage'
import { STATUS } from '@consts/status'
import "@styles/gallery-products.css"

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

const CustomInfiniteHits = (props) => {
  const { hits, isLastPage, showMore } = useInfiniteHits(props);
  const sentinelRef = useRef(null);
  
  useEffect(() => {
    if (sentinelRef.current !== null) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLastPage) {
            showMore();
          }
        });
      });

      observer.observe(sentinelRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [isLastPage, showMore]);

  return (
    <div className='ais-InfiniteHits'>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6'>
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
          type={STATUS.ERROR}
          message='No se encontraron productos'
          className='w-fit mx-auto mt-10'
        />
      )}
    </div>
  )
}

export const GalleryProducts = () => {
  return (
    <div className='flex flex-col items-center lg:items-start gap-10 px-4 sm:px-10 max-[1024px]:pt-20'>
      <main className='pt-10 lg:pt-24 pb-10 z-10 w-full'>
        <h1 className='text-3xl font-bold text-start mb-4'>
          Todos nuestros productos
        </h1>
        <div className='mb-6'>
          <InstantSearch
            indexName={indexName}
            searchClient={searchClient}
          >
            <SearchBox
              translations={{ placeholder: 'Buscar productos...' }}
              className='w-full max-w-md mb-16'
              placeholder='Buscar productos...'
            />
            <Configure />
            <CustomInfiniteHits />
          </InstantSearch>
        </div>
      </main>
    </div>
  )
}
