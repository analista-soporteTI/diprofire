'use client'

import { create } from 'zustand'

interface Product {
  id: string
  sku: string
  name: string
  model: string
  brand: string
  quantity: number
  img: string
}

interface CartState {
  cart: Product[]
  getCart: () => void
  getLength: () => number
  addOneToCart: (product: Product) => void
  addToCart: (product: Product) => void
  removeFromCart: (productId: string) => void
  clearCart: () => void
  updateQuantity: (productId: string, quantity: number) => void
}

const useCartStore = create<CartState>((set, get) => ({
  cart: [],

  getCart: () => {
    if (typeof window !== 'undefined') {
      const storedCart = localStorage.getItem('cart')
      if (storedCart) {
        set({ cart: JSON.parse(storedCart) })
      }
    }
  },

  getLength: () => {
    return get().cart.length
  },

  addOneToCart: (product) =>
    set(state => {
      const cart = state.cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
      const productExists = cart.some(item => item.id === product.id)
      if (!productExists) {
        cart.push({ ...product, quantity: 1 })
      }
      localStorage.setItem('cart', JSON.stringify(cart))
      return { cart }
    }),

  addToCart: (product) =>
    set(state => {
      const cart = state.cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
      )
      const productExists = cart.some(item => item.id === product.id)
      if (!productExists) {
        cart.push(product)
      }
      localStorage.setItem('cart', JSON.stringify(cart))
      return { cart }
    }),

  removeFromCart: (productId) =>
    set(state => {
      const cart = state.cart.filter(item => item.id !== productId)
      localStorage.setItem('cart', JSON.stringify(cart))
      return { cart }
    }),

  clearCart: () =>
    set(() => {
      localStorage.removeItem('cart')
      return { cart: [] }
    }),

  updateQuantity: (productId, quantity) =>
    set(state => {
      const cart = state.cart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
      localStorage.setItem('cart', JSON.stringify(cart))
      return { cart }
    })
}))

export default useCartStore
