'use client'
import { useState, useEffect } from 'react'
import { ButtonCartPrimary } from '@components/buttons/ButtonCart'
import { sendEmail } from '@hooks/mailto'
import { Loader, Mail, MailX } from 'lucide-react'
import { Toast } from '@components/Toast'
import { STATUS } from '@consts/status'

export const ButtonMail = ({ children, data, className = '', ...props }: any) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [showToast, setShowToast] = useState(false)
  const [toastType, setToastType] = useState<'success' | 'error' | null>(null)

  const handleSendEmail = async () => {
    setLoading(true)
    setError(null)
    setSuccess(null)
    setShowToast(false)

    try {
      await sendEmail(data)
      setSuccess('Correo enviado exitosamente')
      setToastType(STATUS.SUCCESS)
      setShowToast(true)
    } catch (err) {
      setError('No se pudo enviar el correo. Inténtalo de nuevo.')
      setToastType(STATUS.ERROR)
      setShowToast(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (error || success) {
      const timer = setTimeout(() => {
        setError(null)
        setSuccess(null)
        setShowToast(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [error, success])

  return (
    <div className={className}>
      <ButtonCartPrimary
        onClick={handleSendEmail}
        className='flex gap-1.5 items-center !my-0'
        disabled={loading}
        {...props}
      >
        {loading ? (
          <Loader size={20} className='animate-spin' />
        ) : error ? (
          <MailX size={20} />
        ) : (
          <Mail size={20} />
        )}
        {loading ? 'Enviando...' : children}
      </ButtonCartPrimary>

      <Toast
        message={success || error || ''}
        type={toastType || STATUS.SUCCESS}
        show={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  )
}
