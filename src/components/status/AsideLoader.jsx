export const AsideLoader = () => (
  <div className='animate-pulse hidden lg:block pt-[6.5rem] pb-10 w-full min-h-screen max-w-[300px] border-r border-black/20 relative px-4'>
    <div className='h-6 bg-gray-300 rounded mb-4'></div>
    <ul>
      {[...Array(5)].map((_, index) => (
        <li key={index} className='mb-2 px-4 py-1.5 hover:bg-black/5 duration-200 rounded-md'>
          <div className='h-4 bg-gray-300 rounded w-3/4'></div>
        </li>
      ))}
    </ul>
  </div>
)
