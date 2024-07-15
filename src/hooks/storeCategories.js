import { create } from 'zustand'

const useCategoryStore = create(set => ({
  categories: [],
  setCategories: categories => {
    set({ categories })
  }
}))

export default useCategoryStore
