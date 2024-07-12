import { ErrorIcon } from '@icons/status/Error'

export const StatusMessage = ({
  message,
  description,
  className = ''
}) => {
  return (
    <div className={`text-sm ${className}`}>
      <div className='w-full h-fit py-2 flex items-center justify-between gap-4 rounded-lg bg-zinc-200 pl-2 pr-3'>
        <div className='flex gap-2'>
          <div className='text-[#d65563]'>
            <ErrorIcon className='w-6 h-6' />
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
