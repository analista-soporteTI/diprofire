
import Image from "next/image";
import desarrolloIngenieria from '@assets/servicios/desarrollo ingenieria.webp'
import agenteLimpio from '@assets/servicios/agente limpio.webp'
import deteccionIncendio from '@assets/servicios/deteccion incendio.webp'
import proteccionPasiva from '@assets/servicios/proteccion pasiva.webp'
import sistemaEspuma from '@assets/servicios/sistema espuma.webp'
import sistemaExtinsionAgua from '@assets/servicios/sistema extinsion agua.webp'
import sistemaImpulsion from '@assets/servicios/sistema impulsion.webp'
import sistemaPqs from '@assets/servicios/sistema pqs.webp'
import servicioTecnico from '@assets/servicios/servicio tecnico.webp'

const servicesData = [
  {
    img: desarrolloIngenieria,
    title: 'Desarrollo de Ingenierías',
    description:
      'Desde la idea de un proyecto estamos para apoyarte. Nuestro equipo de expertos te guiará en cada paso del camino para asegurar que tu proyecto sea un éxito. Ofrecemos una gama completa de servicios de desarrollo de ingenierías, que incluyen:',
    items: [
      'Estudios de Factibilidad',
      'Anteproyectos',
      'Memorias de Cálculo',
      'Ingenierías Básicas y de Detalle',
      'Estudios de Carga de Fuego',
      'Asesorías',
      'Diseño'
    ],
  },
  {
    img: proteccionPasiva,
    title: 'Protección Pasiva',
    description:
      'Para prevenir la propagación de incendios, es esencial proteger los puntos críticos con productos de Protección Pasiva de Incendios. Nuestros servicios incluyen:',
    items: [
      'Juntas Estructurales',
      'Tuberías Hidráulicas',
      'Ductos de Ventilación',
      'Tubos Metálicos',
      'Bandejas Portacables',
      'Cables Sueltos'
    ]
  },
  {
    img: deteccionIncendio,
    title: 'Sistemas de Detección de Incendio',
    description:
      'Detectar un incendio a tiempo es crucial para minimizar daños y garantizar la seguridad. Nuestros Sistemas de Detección de Incendios son ideales para:',
    items: [
      'Instalaciones Comerciales',
      'Operaciones Informáticas',
      'Industrias de Procesos',
      'Data Centers',
      'Salas Eléctricas',
      'Bancos',
      'Operaciones de Manufactura',
      'Activos de alto valor',
      'Restaurantes'
    ]
  },
  {
    img: agenteLimpio,
    title: 'Sistemas de Agentes Limpios',
    description:
      'Nuestros sistemas de agentes limpios utilizan un agente extintor gaseoso que suprime incendios rápidamente sin dejar residuos ni ser dañino para el ser humano en concentraciones recomendadas. Son ideales para:',
    items: [
      'Data Centers',
      'Salas Eléctricas',
      'Servers Rooms',
      'Bienes irremplazables',
      'Museos',
      'Documentos Valiosos'
    ]
  },
  {
    img: sistemaExtinsionAgua,
    title: 'Sistemas de Extinción por Agua',
    description:
      'El sistema de extinción por agua es el más común debido a su costo y efectividad. Ofrecemos:',
    items: [
      'Sistemas de Diluvio',
      'Sistemas de red Húmeda',
      'Sistemas de red Seca',
      'Sistemas de Preacción',
      'Sistemas de Doble Acción'
    ]
  },
  {
    img: sistemaPqs,
    title: 'Sistemas de PQS',
    description:
      'Nuestros sistemas fijos de PQS (Polvo Químico Seco) son eficaces para extinguir incendios en materiales inflamables y riesgos eléctricos. Características:',
    items: [
      'No es conductor de la electricidad',
      'Efectivo en riesgos Clase A, B y C',
      'Ideal para líquidos inflamables'
    ]
  },
  {
    img: sistemaImpulsion,
    title: 'Sistemas de Almacenamiento e Impulsión',
    description:
      'El corazón del sistema de extinción de incendios en cualquier instalación. Nuestros equipos de bombas incluyen:',
    items: [
      'Bombas principales y jockey para restaurar la presión',
      'Cálculo e instalación precisa para asegurar su correcta operación'
    ]
  },
  {
    img: sistemaEspuma,
    title: 'Sistemas de Espuma',
    description:
      'Ofrecemos sistemas de espuma para la extinción de incendios de líquidos inflamables y derrames de LNG, adecuados para:',
    items: ['Bodegas', 'Instalaciones industriales', 'Áreas de alto riesgo']
  },
  {
    img: servicioTecnico,
    title: 'Servicio Técnico',
    description:
      'El mantenimiento preventivo y correctivo de los sistemas de protección contra incendios es esencial para su funcionamiento óptimo. Ofrecemos:',
    items: [
      'Mantenimiento Preventivo',
      'Mantenimiento Correctivo',
      'Capacitaciones'
    ]
  }
]

export const ServiceSection = () => {
  return (
    <div className='py-8 flex flex-col'>
      {servicesData.map((service, index) =>
        index % 2 === 0 ? (
          <section key={service.title} className='flex flex-wrap min-h-[430px] py-20 bg-gray-200 bg-section-clip'>
            <div className='md:w-1/2 mb-8 md:mb-0'>
              <Image
                src={service.img}
                alt='Engineering Structure'
                className='w-full h-auto object-cover aspect-video pr-10'
              />
            </div>
            <div className='md:w-1/2 container px-4 sm:px-10 my-auto'>
              <div key={index} className='mb-8'>
                <h2 className='text-3xl font-bold mb-4 text-green-600'>{service.title}</h2>
                <p className='mb-4 text-lg'>{service.description}</p>
                <ul className='list-disc list-inside'>
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className='mb-2'>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ) : (
          <section key={service.title} className='flex flex-col md:flex-row-reverse min-h-[430px] py-20'>
            <div className='md:w-1/2 mb-8 md:mb-0'>
              <Image
                src={service.img}
                alt='Engineering Structure'
                className='w-full h-auto object-cover aspect-video pl-10'
              />
            </div>
            <div className='md:w-1/2 container px-4 sm:px-10 my-auto'>
              <div key={index} className='mb-8'>
                <h2 className='text-3xl font-bold mb-4 text-green-600'>{service.title}</h2>
                <p className='mb-4 text-lg'>{service.description}</p>
                <ul className='list-disc list-inside'>
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className='mb-2'>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )
      )}
    </div>
  )
}
