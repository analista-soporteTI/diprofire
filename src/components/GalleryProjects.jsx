import useSWR from 'swr'
import { getProjects } from '@api/apiWordpress.js'
import { ProjectCard } from '@components/ProjectCard.jsx'

export const GalleryProjects = () => {
  const { data, error } = useSWR('projects', getProjects)

  const parsedData = data?.map(project => ({
    id: project.id,
    title: project.title.rendered,
    slug: project.slug,
    date: project.date,
    description: project.excerpt.rendered
  }))

  return (
    <>
      {error && <div>Error loading projects</div>}
      {!data && <div>Loading projects...</div>}
      {data && (
        <div className='flex flex-wrap gap-10  max-w-[1200px] mx-auto px-4'>
          {parsedData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </>
  )
}
