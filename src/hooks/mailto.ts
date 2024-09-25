interface EmailProps {
  data: {
    contact: {
      name: string
      email: string
      enterprise: string
    }
    products: any[]
  }
}

export const sendEmail = async (data: EmailProps) => {
  const response = await fetch('/api/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  if (!response.ok) {
    throw new Error('No se pudo enviar el correo')
  }

  return response.json()
}
