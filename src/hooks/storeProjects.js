import { create } from 'zustand'

const useProjectStore = create(set => ({
  projects: [],
  setProjects: projects => {
    set({ projects })
    localStorage.setItem('projects', JSON.stringify(projects))
  }
}))

const storedProjects = JSON.parse(localStorage.getItem('projects')) || []
if (storedProjects.length > 0) {
  useProjectStore.setState({ projects: storedProjects })
}

export default useProjectStore
