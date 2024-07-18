import { useEffect } from 'react'
import useSWR from 'swr'
import { getProjects } from '@api/apiWordpress'
import { ProjectCard } from '@components/ProjectCard.jsx'
import { ListLoaderCardBig } from '@components/status/LoaderCard'
import useProjectStore from '@hooks/storeProjects'
import { StatusMessage } from '@components/status/StatusMessage'

export const GalleryProjects = () => {
  const { data, error } = useSWR('projects', getProjects)

  const projects = useProjectStore(state => state.projects)
  const setProjects = useProjectStore(state => state.setProjects)

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
      {error && (
        <StatusMessage
          message='Error al cargar los proyectos'
          className='w-fit mx-auto mb-10'
        />
      )}
      {data && projects ? (
        <div className='max-w-[1200px] mx-auto gap-10 px-4 grid grid-cols-1 lg:grid-cols-2'>
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className='max-w-[1200px] mx-auto gap-10 px-4 grid grid-cols-1 lg:grid-cols-2'>
          <ListLoaderCardBig />
          <ListLoaderCardBig />
          <ListLoaderCardBig />
          <ListLoaderCardBig />
          <ListLoaderCardBig />
          <ListLoaderCardBig />
        </div>
      )}
    </>
  )
}
