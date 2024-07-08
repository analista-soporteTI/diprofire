import { create } from 'zustand'

const useCategoryStore = create(set => ({
  categories: [],
  setCategories: categories => {
    set({ categories })
    localStorage.setItem('categories', JSON.stringify(categories))
  }
}))

const storedCategories = JSON.parse(localStorage.getItem('categories')) || []
if (storedCategories.length > 0) {
  useCategoryStore.setState({ categories: storedCategories })
}

export default useCategoryStore
