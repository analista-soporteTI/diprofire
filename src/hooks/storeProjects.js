import { create } from 'zustand'

const useProjectStore = create(set => ({
  projects: [],
  setProjects: projects => {
    set({ projects })
  }
}))

export default useProjectStore
