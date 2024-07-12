import { create } from 'zustand'

const useProductStore = create(set => {
  const storedProducts = JSON.parse(localStorage.getItem('products')) || []

  return {
    products: storedProducts,
    setProducts: products => {
      set({ products })
      localStorage.setItem('products', JSON.stringify(products))
    }
  }
})

export default useProductStore
