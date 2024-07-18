import '@styles/loader-card.css'

export const SingleLoaderCardSmall = () => {
  return <div className='loader-small'></div>
}

export const ListLoaderCardSmall = () => {
  return (
    <div className='w-full mx-auto px-4 sm:px-10 gap-10 gap-y-8 flex flex-wrap justify-center lg:justify-start'>
      <div className='loader-small'></div>
      <div className='loader-small'></div>
      <div className='loader-small'></div>
      <div className='loader-small'></div>
      <div className='loader-small'></div>
      <div className='loader-small'></div>
      <div className='loader-small'></div>
      <div className='loader-small'></div>
    </div>
  )
}

export const ListLoaderCardBig = () => {
  return (
    <div className='loader-card min-h-[140px] rounded-md max-w-sm w-full'>
      <div className='animate-pulse flex space-x-4'>
        <div className='flex-1 py-1'>
          <div className='h-3 bg-gray-300 rounded w-1/3'></div>
          <div className='h-4 bg-gray-300 rounded w-3/4 mb-4 mt-1'></div>
          <div>
            <div className='h-4 bg-gray-300 rounded'></div>
            <div className='h-4 bg-gray-300 rounded w-5/6 my-2'></div>
            <div className='h-4 bg-gray-300 rounded w-1/4 mt-4'></div>
          </div>
        </div>
      </div>
    </div>
  )
}
