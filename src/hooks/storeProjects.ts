import { create } from 'zustand'

const useProjectStore = create(set => ({
  projects: [],
  setProjects: (projects: any) => {
    set({ projects })
  }
}))

export default useProjectStore
