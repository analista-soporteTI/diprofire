import Image from 'next/image'
import '@styles/footer-enterprise.css'
import logo from '@assets/logo-diprofire.png'
import { XIcon } from '@/icons/social/X'
import { EmailIcon } from '@/icons/social/Email'
import { PhoneIcon } from '@icons/Phone'
import { MapIcon } from '@/icons/Map'
import { ClockIcon } from '@/icons/Clock'
import { LinkedinIcon } from '@/icons/social/Linkedin'

export const FooterEnterprise = () => {
  return (
    <div className='sm:flex flex-col sm:items-center sm:justify-between'>
      <Image
        className='w-fit mr-auto min-[1188px]:mx-auto max-w-[240px] object-contain aspect-video'
        src={logo}
        alt='Logo'
      />
      <div className='w-full flex flex-wrap gap-20'>
        <div className='[&>p]:my-4'>
          <h2 className='text-2xl font-bold'>Diprofire Chile Ltda.</h2>
          <p className='max-w-[60ch]'>
            Líderes en la industria de soluciones integrales de seguridad contra
            incendios para proteger a tu personal, tus activos y tu
            tranquilidad.
          </p>
          <p className='max-w-[60ch]'>
            Nos especializamos en normativa contra incendios y contamos con la
            certificación de fábrica de KIDDE FIRE SYSTEMS.
          </p>
          <ul className='pt-4 flex justify-start gap-6 sm:mt-0'>
            <li>
              <a
                href='/'
                rel='noreferrer'
                target='_blank'
                className='text-gray-700 transition hover:opacity-75'
              >
                <span className='sr-only'>X</span>

                <XIcon className='size-7' />
              </a>
            </li>
            <li>
              <a
                href='/'
                rel='noreferrer'
                target='_blank'
                className='text-gray-700 transition hover:opacity-75'
              >
                <span className='sr-only'>LinkedIn</span>

                <LinkedinIcon className='size-7' />
              </a>
            </li>
          </ul>
        </div>
        <div className='my-auto h-full flex flex-wrap sm:justify-center max-[520px]:gap-4 gap-10'>
          <div className='flex flex-col gap-4 [&>p]:flex [&>p]:items-center [&>p]:gap-2'>
            <p className='flex gap-2'>
              <MapIcon className='size-8 mb-4' />
              Juan Glasinovic 480 Galpón 38,
              <br /> Antofagasta, Chile
            </p>
            <div className='flex gap-2'>
              <ClockIcon className='size-[30px]' />
              <p>
                Lunes-Jueves: 8:00 - 18:00
                <br />
                Viernes: 8:00 - 13:00
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-8 [&>p]:flex [&>p]:items-center [&>p]:gap-2'>
            <p>
              <EmailIcon className='size-7 ml-0.5' />
              diprofire@diprofire.cl
            </p>
            <p>
              <PhoneIcon className='size-[30px]' />
              +56 9 34501342
            </p>
          </div>
        </div>
      </div>
      <div className='map-responsive pt-8 lg:pt-16'>
        <iframe
          id='ubicacion'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1943694067254!2d-70.38834512476284!3d-23.597361162915675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96ae2adfc0ef9a35%3A0x1bff0229b1f13206!2sDipro-Fire%20Chile%20Limitada!5e0!3m2!1ses!2scl!4v1719578894030!5m2!1ses!2scl'
          width='1220'
          height='400'
          style={{ border: '0' }}
          allow='fullscreen'
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    </div>
  )
}

;<style scoped></style>
