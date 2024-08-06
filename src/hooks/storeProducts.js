import { create } from 'zustand'

export const useProductsStore = create(set => ({
  products: [],
  setProducts: newProducts => set({ products: newProducts })
}))
