export const LoaderCardSmall = () => {
  return (
    <div className='w-[240px] max-h-[284px] rounded-md overflow-hidden'>
      <div className='animate-pulse flex flex-col space-y-4 p-4'>
        <div className='h-44 bg-gray-300 rounded'></div>
        <div className='h-4 bg-gray-300 rounded w-full my-2'></div>
        <div className='h-4 bg-gray-300 rounded w-full my-2'></div>
        <div className='h-4 bg-gray-300 rounded w-full my-2'></div>
      </div>
    </div>
  )
}

export const LoaderCardBig = () => {
  return (
    <div className='min-h-[140px] rounded-md max-w-sm min-w-full'>
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
