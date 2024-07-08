import { create } from 'zustand'

const useProductStore = create(set => ({
  products: [],
  setProducts: products => {
    set({ products })
    localStorage.setItem('products', JSON.stringify(products))
  }
}))

const storedProducts = JSON.parse(localStorage.getItem('products')) || []
if (storedProducts.length > 0) {
  useProductStore.setState({ products: storedProducts })
}

export default useProductStore
