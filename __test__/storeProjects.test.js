import useProjectStore from '../src/hooks/storeProjects'

describe('useProjectStore', () => {
  it('should initialize with an empty projects array', () => {
    const store = useProjectStore.getState()
    expect(store.projects).toEqual([])
  })

  it('should update projects when setProjects is called', () => {
    const newProjects = [
      { id: 1, name: 'Project 1' },
      { id: 2, name: 'Project 2' }
    ]

    useProjectStore.setState({ projects: newProjects })

    const store = useProjectStore.getState()

    expect(store.projects).toEqual(newProjects)
  })
})
