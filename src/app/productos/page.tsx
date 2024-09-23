import { GalleryProducts } from '@/components/sections/GalleryProducts'
import { META_PAGES } from '@/consts/metaPages'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: META_PAGES.PRODUCTS.title,
  description: META_PAGES.PRODUCTS.description
}

export default function Products () {
  return <GalleryProducts />
}
