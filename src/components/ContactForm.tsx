'use client'
import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { STATUS } from '@consts/status.js'
import { Toast } from '@components/Toast'
import { Loader, Send } from 'lucide-react'
import { validationContact } from '@/hooks/validation'

export const ContactForm = () => {
  const [statusMessage, setStatusMessage] = useState<{
    type: string
    text: string
  } | null>(null)
  const [showToast, setShowToast] = useState(false)

  const initialValues = {
    email: '',
    name: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  }

  const onSubmit = async (values: any, { setSubmitting, resetForm }: any) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })

      if (response.ok) {
        setStatusMessage({
          type: STATUS.SUCCESS,
          text: '¡Nos llegó tu mensaje, gracias!'
        })
        resetForm()
      } else {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Error al enviar el mensaje')
      }
    } catch (error: any) {
      console.error('Error al enviar el mensaje:', error.message)
      setStatusMessage({
        type: STATUS.ERROR,
        text: 'Error al enviar el mensaje'
      })
    } finally {
      setShowToast(true)
      setSubmitting(false)
    }
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationContact}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }: any) => (
          <Form className='w-full max-w-2xl mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>
              <label className='block text-gray-700 mb-4'>
                Email
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
              </label>
              <label className='block text-gray-700'>
                Nombre y Apellido
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
              </label>
              <label className='block text-gray-700'>
                Número de Teléfono{' '}
                <span className='opacity-70'>(opcional)</span>
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
              </label>
              <label className='block text-gray-700 mb-4'>
                Empresa{' '}
                <span className='opacity-70'>(opcional)</span>
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
              </label>
            </div>

            <label className='block text-gray-700 mb-4'>
              Asunto
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
            </label>

            <label className='block text-gray-700 mb-4'>
              Mensaje
              <Field
                as='textarea'
                id='message'
                name='message'
                rows='5'
                className='mt-2 block w-full p-2 border border-gray-300 rounded min-h-[75px] max-h-[300px]'
              />
              <ErrorMessage
                name='message'
                component='div'
                className='text-red-500 mt-1'
              />
            </label>

            <div className='text-center'>
              <button
                type='submit'
                className='flex gap-2 items-center bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700'
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader size={20} className='animate-spin' />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Enviar mensaje
                  </>
                )}
              </button>
            </div>
          </Form>
        )}
      </Formik>

      {statusMessage && (
        <Toast
          message={statusMessage.text}
          type={statusMessage.type}
          show={showToast}
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  )
}
