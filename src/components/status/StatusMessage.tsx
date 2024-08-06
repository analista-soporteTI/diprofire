import { ErrorIcon } from '@/icons/status/Error'
import { SuccessIcon } from '@/icons/status/Sucess'
import { STATUS } from '@consts/status'
import { InfoIcon } from '@/icons/status/Info'

export const StatusMessage = ({
  message,
  description,
  className = '',
  type = STATUS.ERROR
}: any) => {
  return (
    <div className={`text-sm ${className}`}>
      <div className='w-full h-fit py-2 flex items-center justify-between gap-4 rounded-lg bg-zinc-200 pl-2 pr-3'>
        <div className='flex gap-2'>
          <div>
            {type === 'success' ? (
              <SuccessIcon className='w-6 h-6 text-green-600' />
            ) : type === 'information' ? (
              <InfoIcon className='w-6 h-6 text-blue-600' />
            ) : (
              <ErrorIcon className='w-6 h-6 text-red-600' />
            )}
          </div>
          <div className={description ? '' : 'my-auto'}>
            <p>{message}</p>
            {description && <p className='text-gray-500'>{description}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}
