import { EmailContactTemplate } from '@/components/EmailContactTemplate'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { v4 as uuidv4 } from 'uuid'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST (request: Request) {
  try {
    const { name, email, phone, company, subject, message } =
      await request.json()

    const data = {
      name,
      email,
      phone,
      company,
      subject,
      message
    }

    await resend.emails.send({
      from: 'Diprofire Web <diprofire@diprofire.cl>',
      to: ['ventas@diprofire.cl'],
      subject: subject,
      react: EmailContactTemplate({ contact: data }),
      headers: {
        'X-Entity-Ref-ID': uuidv4()
      }
    })

    return NextResponse.json(
      { message: '¡Correo enviado con éxito!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error al enviar el correo:', error)
    return NextResponse.json(
      { error: 'Error al enviar el mensaje' },
      { status: 500 }
    )
  }
}
