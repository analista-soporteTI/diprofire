interface ContactProps {
  contact: {
    name: string
    email: string
    phone: string
    company: string
    subject: string
    message: string
  }
}

export const EmailContactTemplate = ({ contact }: ContactProps) => {
  return (
    <>
      <h1>Contacto desde formulario web</h1>
      <p>
        <strong>Cliente: </strong>
        {contact.name}
      </p>
      <p>
        <strong>Email: </strong>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </p>
      {contact.phone && (
        <p>
          <strong>Teléfono: </strong>
          <a href={`tel:${contact.phone}`}>{contact.phone}</a>
        </p>
      )}
      {contact.company && (
        <p>
          <strong>Empresa: </strong>
          {contact.company}
        </p>
      )}
      <p>
        <strong>Asunto: </strong>
        {contact.subject}
      </p>
      <p>
        <strong>Mensaje: </strong>
        {contact.message}
      </p>
    </>
  )
}
