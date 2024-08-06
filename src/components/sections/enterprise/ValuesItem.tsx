export const ValuesItem = ({ title, content, children }: any) => {
  return (
    <div className='w-full max-w-[40ch] min-h-[100px]'>
      {children}
      <h3 className='text-base md:text-2xl xl:text-3xl font-bold flex gap-1 items-center mb-2'>
        {title}
      </h3>
      <i className='text-sm max-w-[50ch]'>{content}</i>
    </div>
  )
}
