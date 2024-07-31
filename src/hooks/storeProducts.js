import { create } from 'zustand'

const getNextFetchTime = () => {
  const now = new Date()
  const nextFetch = new Date()
  nextFetch.setUTCHours(2, 0, 0, 0) // Establece las 2:00 AM UTC de hoy

  if (now >= nextFetch) {
    nextFetch.setUTCDate(nextFetch.getUTCDate() + 1)
  }

  return nextFetch.getTime()
}

const useProductsStore = create(set => ({
  products: null,
  lastFetchedTime: null,
  nextFetchTime: getNextFetchTime(),
  setProducts: products =>
    set({
      products,
      lastFetchedTime: Date.now(),
      nextFetchTime: getNextFetchTime()
    }),
  getProducts: async fetchProducts => {
    const state = useProductsStore.getState()
    const now = Date.now()

    if (state.products && state.lastFetchedTime && now < state.nextFetchTime) {
      return state.products
    }

    try {
      const products = await fetchProducts()
      set({ products, lastFetchedTime: now, nextFetchTime: getNextFetchTime() })
      return products
    } catch (error) {
      console.error('Error fetching products:', error)
      throw error
    }
  }
}))

export default useProductsStore
