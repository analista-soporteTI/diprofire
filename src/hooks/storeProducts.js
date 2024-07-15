import { create } from 'zustand'

const useProductStore = create(set => ({
  products: [],
  setProducts: products => {
    set({ products })
  },
  addProducts: newProducts =>
    set(state => {
      const existingProductSlugs = new Set(
        state.products.map(product => product.slug)
      )

      const filteredNewProducts = newProducts.filter(
        product => !existingProductSlugs.has(product.slug)
      )

      return {
        products: [...state.products, ...filteredNewProducts]
      }
    })
}))

export default useProductStore
