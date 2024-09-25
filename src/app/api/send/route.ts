import { EmailProductsTemplate } from '@components/EmailProductsTemplate'
import { Resend } from 'resend'
import { v4 as uuidv4 } from 'uuid'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST (request: Request) {
  try {
    const { contact, products } = await request.json()

    const dataResend = {
      contact,
      products
    }

    const subject = products.length > 1 ? 'productos' : products[0].name

    const { data, error } = await resend.emails.send({
      from: 'Diprofire Web <diprofire@diprofire.cl>',
      to: ['ventas@diprofire.cl'],
      subject: `Cotización web de ${subject}`,
      react: EmailProductsTemplate(dataResend),
      headers: {
        'X-Entity-Ref-ID': uuidv4()
      }
    })

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 })
    }

    return new Response(JSON.stringify(data), { status: 200 })
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), { status: 500 })
  }
}
