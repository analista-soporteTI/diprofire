'use client'
import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import emailjs from '@emailjs/browser'
import { StatusMessage } from '@components/status/StatusMessage'
import { STATUS } from '@consts/status.js'

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? ''
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? ''
const secretKey = process.env.SECRET_EMAILJS_KEY ?? ''

export const ContactForm = () => {
  const [statusMessage, setStatusMessage] = useState<{ type: string, text: string } | null>(null)

  const initialValues = {
    email: '',
    name: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Formato de email inválido')
      .required('Requerido'),
    name: Yup.string().required('Requerido'),
    phone: Yup.string().required('Requerido'),
    company: Yup.string().required('Requerido'),
    subject: Yup.string().required('Requerido'),
    message: Yup.string().required('Requerido')
  })

  const onSubmit = (values: any, { setSubmitting, resetForm }: any) => {
    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      phone: values.phone,
      company: values.company,
      subject: values.subject,
      message_html: values.message
    }

    emailjs
      .send(serviceId, templateId, templateParams, secretKey)
      .then(() => {
        setStatusMessage({
          type: STATUS.SUCCESS,
          text: '¡Nos llegó tu mensaje, gracias!'
        })
        setSubmitting(false)
        resetForm()
      })
      .catch((error: any) => {
        console.error('Error al enviar el correo:', error)
        setStatusMessage({
          type: STATUS.ERROR,
          text: 'Error al enviar el mensaje'
        })
        setSubmitting(false)
      })
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }: any) => (
        <Form className='w-full max-w-2xl mx-auto'>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-700'>
              Email
            </label>
            <Field
              type='email'
              id='email'
              name='email'
              className='mt-2 block w-full p-2 border border-gray-300 rounded'
            />
            <ErrorMessage
              name='email'
              component='div'
              className='text-red-500 mt-1'
            />
          </div>

          <div className='grid grid-cols-2 gap-4 mb-4'>
            <div>
              <label htmlFor='name' className='block text-gray-700'>
                Nombre y Apellido
              </label>
              <Field
                type='text'
                id='name'
                name='name'
                className='mt-2 block w-full p-2 border border-gray-300 rounded'
              />
              <ErrorMessage
                name='name'
                component='div'
                className='text-red-500 mt-1'
              />
            </div>
            <div>
              <label htmlFor='phone' className='block text-gray-700'>
                Número de Teléfono
              </label>
              <Field
                type='text'
                id='phone'
                name='phone'
                className='mt-2 block w-full p-2 border border-gray-300 rounded'
              />
              <ErrorMessage
                name='phone'
                component='div'
                className='text-red-500 mt-1'
              />
            </div>
          </div>

          <div className='mb-4'>
            <label htmlFor='company' className='block text-gray-700'>
              Empresa
            </label>
            <Field
              type='text'
              id='company'
              name='company'
              className='mt-2 block w-full p-2 border border-gray-300 rounded'
            />
            <ErrorMessage
              name='company'
              component='div'
              className='text-red-500 mt-1'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='subject' className='block text-gray-700'>
              Asunto
            </label>
            <Field
              type='text'
              id='subject'
              name='subject'
              className='mt-2 block w-full p-2 border border-gray-300 rounded'
            />
            <ErrorMessage
              name='subject'
              component='div'
              className='text-red-500 mt-1'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='message' className='block text-gray-700'>
              Mensaje
            </label>
            <Field
              as='textarea'
              id='message'
              name='message'
              rows='5'
              className='mt-2 block w-full p-2 border border-gray-300 rounded'
            />
            <ErrorMessage
              name='message'
              component='div'
              className='text-red-500 mt-1'
            />
          </div>

          <div className='text-center'>
            <button
              type='submit'
              className='bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700'
              disabled={isSubmitting}
            >
              Enviar mensaje
            </button>
          </div>
          {statusMessage && (
            <StatusMessage
              message={statusMessage.text}
              type={statusMessage.type}
              className='w-fit mx-auto mt-4'
            />
          )}
        </Form>
      )}
    </Formik>
  )
}
