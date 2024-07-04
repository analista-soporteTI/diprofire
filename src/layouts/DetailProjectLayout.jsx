import { getProjects } from '@api/apiWordpress'
import { ButtonBack } from '@components/buttons/ButtonBack'
import { DetailProductLoader } from '@components/status/DetailProductLoader'
import useSWR from 'swr'
import '@styles/detail-project-layout.css'

export const DetailProjectLayout = ({ slug }) => {
  const { data, error } = useSWR('products', getProjects, {
    suspense: true,
    revalidateOnFocus: true,
    dedupingInterval: 120000
  })

  if (!data) return "Cargando..."

  const project = data.find(project => project.slug === slug)

  const date = new Date(project.date)
  const formattedDate = date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <main className='max-w-3xl mx-auto p-4 sm:p-8'>
      <div className='pt-20'>
        <div className='mb-10'>
          <ButtonBack href='/proyectos' style='mb-10 no-underline text-gray-600'>
            Volver a la lista de proyectos
          </ButtonBack>
          <h1 className='text-3xl font-bold mb-4'>{project.title.rendered}</h1>
          <time>
            {formattedDate}
          </time>
        </div>
        {project.content.rendered && (
          <div
            dangerouslySetInnerHTML={{
              __html: project.content.rendered
            }}
          />
        )}
      </div>
    </main>
  )
}
