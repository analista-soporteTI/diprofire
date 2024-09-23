'use client'
import { useRef, useEffect } from 'react'
import {
  InstantSearch,
  Configure,
  useInfiniteHits,
  ClearRefinements,
  useSearchBox
} from 'react-instantsearch'
import algoliasearch from 'algoliasearch/lite'
import { CardProduct } from '@components/products/CardProduct'
import { StatusMessage } from '@components/status/StatusMessage'
import { STATUS } from '@consts/status'
import '@styles/gallery-products.css'
import algoliaLogo from '@assets/Algolia-mark-blue.svg'
import { ButtonUp } from '@components/buttons/ButtonUp'
import Image from 'next/image'

const appId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID
const searchKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY
const indexName = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME

const searchClient = algoliasearch(appId ?? '', searchKey ?? '')

const Hit = ({ hit }: any) => (
  <CardProduct
    id={hit.objectID}
    sku={hit.sku}
    name={hit.nombre}
    model={hit.modelo || null}
    description={hit.descripcion || null}
    brand={hit.marca || null}
    img={hit.imagen || null}
    alt={`previsualización del producto: ${hit.nombre}`}
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
      <ul className='grid grid-cols-1 sm:grid-cols-2 min-[921px]:grid-cols-3 xl:grid-cols-4 gap-6'>
        {hits.map((hit: any) => (
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
          message='No hay productos para mostrar'
          className='w-fit mt-10'
        />
      )}
    </div>
  )
}

const CustomSearchBox = () => {
  const { query, refine } = useSearchBox()

  return (
    <label
      htmlFor='customSearchAlgolia'
      className='flex w-full gap-4 items-center border border-zinc-300 rounded-md px-2'
    >
      <Image
        src={algoliaLogo}
        alt='Logo de Algolia'
        className='object-contain size-5'
      />
      <input
        id='customSearchAlgolia'
        type='search'
        value={query}
        onChange={e => refine(e.currentTarget.value)}
        placeholder='Buscar productos...'
        className='search-input w-full bg-transparent outline-none focus:ring-0 py-2'
        autoComplete='off'
      />
    </label>
  )
}

export const GalleryProducts = () => {
  return (
    <section className='min-h-[100vh] pt-10 lg:pt-24 pb-10 z-10 w-full gap-10 px-4 sm:px-10 max-[1024px]:pt-20 max-w-7xl mx-auto'>
      <h1 id='titleGallery' className='text-3xl font-bold text-start mb-6'>
        Todos <span className='text-green-600'>nuestros productos</span>
      </h1>
      <div className='mb-6 relative'>
        <InstantSearch indexName={indexName} searchClient={searchClient}>
          <div className='mb-10 flex flex-wrap gap-6 lg:gap-10 xl:gap-20'>
            <div className='w-full max-w-xl'>
              <CustomSearchBox />
              <ClearRefinements
                excludedAttributes={[]}
                translations={{
                  resetButtonText: 'Limpiar filtros'
                }}
              />
            </div>
          </div>
          <Configure />
          <CustomInfiniteHits />
        </InstantSearch>
        <ButtonUp href='#titleGallery' />
      </div>
    </section>
  )
}
