import { ContactForm } from '@components/ContactForm'
import { ButtonSecondary } from '@components/buttons/ButtonSecondary'

export default function Contact () {
  return (
    <main className="pb-20 px-4 sm:px-6 min-h-screen">
      <h1 className='pt-28 max-w-2xl mx-auto text-3xl sm:text-4xl md:text-5xl font-bold mb-4'>
        Contacto
      </h1>
      <p className='mt-10 max-w-2xl mx-auto'>
        Si tienes alguna duda o consulta, no dudes en contáctanos a través de
        las siguientes opciones y responderemos a la brevedad. Recuerda que
        nuestro horario de atención es de:
      </p>
      <ul className='mx-auto max-w-2xl'>
        <li className='mt-3'>
          <strong>Lunes a Jueves: 8:00 a 18:00 hrs.</strong>
        </li>
        <li>
          <strong>Viernes: 8:00 a 13:00 hrs.</strong>
        </li>
      </ul>
      <div className='max-w-2xl mx-auto flex flex-wrap mt-4 mb-6 space-x-4'>
        <ButtonSecondary href='https://wa.me/56934501342'>
          WhatsApp
        </ButtonSecondary>
        <ButtonSecondary href='tel:+56934501342'> Llamar </ButtonSecondary>
      </div>
      <ContactForm />
    </main>
  )
}
