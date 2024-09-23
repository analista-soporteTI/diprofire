import { CartUI } from '@components/cart/CartUI'
import { META_PAGES } from '@/consts/metaPages'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: META_PAGES.CART.title,
  description: META_PAGES.CART.description
}

export default function Cart () {
  return <CartUI />
}
