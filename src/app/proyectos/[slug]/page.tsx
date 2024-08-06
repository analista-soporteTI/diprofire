import { ButtonBack } from '@components/buttons/ButtonBack'
import '@styles/detail-project-layout.css'
import { getProjects } from '@api/apiWordpress'

export const runtime = 'edge'

export default async function ProjectDetail({ params }: any) {
  const allProjects = await getProjects();
  const project = allProjects.find((project: any) => project.slug === params.slug);

  if (!project) {
    return <p>Proyecto no encontrado</p>;
  }

  const { title, date, content } = project;

  const formattedDate = new Date(date).toLocaleDateString('es-CL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <main className='max-w-3xl mx-auto p-4 sm:p-8'>
      <div className='py-20'>
        <div className='mb-10'>
          <ButtonBack href='/proyectos' className='mb-10 no-underline text-gray-600'>
            Volver a la lista de proyectos
          </ButtonBack>
          <h1 className='text-3xl font-bold mb-4'>{title.rendered}</h1>
          <time>{formattedDate}</time>
        </div>
        <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
      </div>
    </main>
  );
}
