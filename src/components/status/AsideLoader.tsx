export const AsideLoader = () => (
  <>
    <div className='animate-pulse hidden lg:block pt-[6.5rem] pb-10 w-full min-h-screen max-w-[300px] border-r border-black/20 relative px-4'>
      <div className='h-6 bg-gray-300 rounded mb-4'></div>
      <ul>
        {[...Array(15)].map((_, index) => (
          <li
            key={index}
            className='mb-2 px-4 py-1.5 hover:bg-black/5 duration-200 rounded-md'
          >
            <div className='h-4 bg-gray-300 rounded w-3/4'></div>
          </li>
        ))}
      </ul>
    </div>
    
    <div className='animate-pulse block lg:hidden pt-[6.5rem] px-4'>
      <ul className='flex flex-wrap gap-4 max-w-lg mx-auto'>
        {[...Array(3)].map((_, index) => (
          <li
            key={index}
            className='min-w-[140px] border rounded-md bg-zinc-200 hover:bg-green-200 duration-200'
          >
            <div className='h-4 bg-gray-300 rounded w-full px-4 py-3'></div>
          </li>
        ))}
      </ul>
    </div>
  </>
)
