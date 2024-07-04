export const ProjectCard = ({ project }) => {
  const parsedDescription = project.description.replace(/<[^>]*>/g, '')
  const reducedDescription = parsedDescription.substring(0, 100)

  const formatDate = date => {
    const parsedDate = new Date(date)
    return parsedDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <a href={`/proyectos/${project.slug}`} className='w-fit h-fit'>
      <article className='w-full max-w-[360px] overflow-hidden rounded-lg shadow transition hover:shadow-lg'>
        <div className='bg-white p-4 sm:p-6 text-start'>
          <h3 className='mt-0.5 text-lg text-gray-900 mb-4'>{project.title}</h3>
          <time className='block text-xs text-gray-500'>
            {formatDate(project.date)}
          </time>
          <p className='mt-2 line-clamp-3 text-sm/relaxed text-gray-500'>
            {reducedDescription}
          </p>
        </div>
      </article>
    </a>
  )
}
