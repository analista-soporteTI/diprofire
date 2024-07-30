import { create } from 'zustand'

const CACHE_DURATION_MS = 90000000 // 25 horas

const useProductsStore = create((set) => ({
  products: null,
  lastFetchedTime: null,
  setProducts: (products) => set({ products, lastFetchedTime: Date.now() }),
  getProducts: async (fetchProducts) => {
    const state = useProductsStore.getState()

    if (state.products && state.lastFetchedTime && (Date.now() - state.lastFetchedTime) < CACHE_DURATION_MS) {
      return state.products
    }

    try {
      const products = await fetchProducts()
      set({ products, lastFetchedTime: Date.now() })
      return products
    } catch (error) {
      console.error('Error fetching products:', error)
      throw error
    }
  }
}))

export default useProductsStore
