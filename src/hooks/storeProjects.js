import { create } from 'zustand'

const useProjectStore = create(set => {
  const storedProjects = JSON.parse(localStorage.getItem('projects')) || []

  return {
    projects: storedProjects,
    setProjects: projects => {
      set({ projects })
      localStorage.setItem('projects', JSON.stringify(projects))
    }
  }
})

export default useProjectStore
