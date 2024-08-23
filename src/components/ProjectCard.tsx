import Link from 'next/link'
import { ArrowRight } from '@/icons/ArrowRight'

export const ProjectCard = ({ project }: any) => {
  const parsedDescription = project.description.replace(/<[^>]*>/g, '')

  const formatDate = (date: any) => {
    const parsedDate = new Date(date)
    return parsedDate.toLocaleDateString('es', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <article className='w-full max-w-[60ch] overflow-hidden'>
      <time className='block text-xs text-gray-500'>
        {formatDate(project.date)}
      </time>
      <h3 className='text-lg text-gray-900 mb-4 mt-0.5 group-hover:text-green-600'>
        {project.title}
      </h3>
      <p className='mb-2 text-sm/relaxed text-gray-500 line-clamp-2'>
        {parsedDescription}
      </p>
      <Link
        href={`/proyectos/${project.slug}`}
        className='text-green-600 border-l-2 pl-2 hover:text-green-700 border-green-700 group'
      >
        Leer más
        <ArrowRight className='inline-block w-4 h-4 ml-1 fill-green-600 duration-200 group-hover:fill-green-700 group-hover:translate-x-1' />
      </Link>
    </article>
  )
}
