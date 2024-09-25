import { useEffect } from 'react'

export const Toast = ({ message, type, show, onClose }: any) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose()
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [show, onClose])

  const toastClass =
    type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'

  return (
    <p
      className={`${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } w-full max-w-[280px] fixed bottom-5 right-5 p-4 rounded-lg shadow-lg transition-all duration-500 ease-in-out flex justify-between items-center font-semibold ${toastClass}`}
    >
      {message}
    </p>
  )
}
