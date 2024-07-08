import { useEffect } from 'react'
import useSWR from 'swr'
import { getProjects } from '@api/apiWordpress'
import { ProjectCard } from '@components/ProjectCard.jsx'
import { LoaderCardBig } from '@components/status/LoaderCard'
import useProjectStore from '@hooks/storeProjects'

export const GalleryProjects = () => {
  const projects = useProjectStore(state => state.projects)
  const setProjects = useProjectStore(state => state.setProjects)

  const { data, error } = useSWR('projects', getProjects)

  useEffect(() => {
    if (data) {
      const parsedData = data.map(project => ({
        id: project.id,
        title: project.title.rendered,
        slug: project.slug,
        date: project.date,
        description: project.excerpt.rendered
      }))
      setProjects(parsedData)
    }
  }, [data, setProjects])

  return (
    <>
      {error && <p className='mx-auto'>Error al cargar los proyectos</p>}
      {!projects.length && !data && (
        <div className='max-w-[1400px] mx-auto'>
          <LoaderCardBig />
        </div>
      )}
      {!!projects.length && (
        <div className='max-w-[1400px] mx-auto gap-10 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </>
  )
}
