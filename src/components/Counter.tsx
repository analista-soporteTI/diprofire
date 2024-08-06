import SlotCounter from 'react-slot-counter'

export const Counter = () => {
  const currentYear = new Date().getFullYear()
  const startYear = 2014
  const yearToString = currentYear - startYear

  return (
    <div className='w-full max-w-[650px] flex flex-wrap gap-6 sm:gap-12 [&>div>span]:text-green-600 [&>div>span]:text-4xl [&>div>span]:font-bold [&>div>p]:text-xl [&>div>p]:font-regular [&>div>p]:mt-2 [&>div>p]:text-center'>
      <div>
        <SlotCounter value={yearToString} />
        <p>Años</p>
      </div>
      <div>
        <SlotCounter value={'+200'} />
        <p>Clientes</p>
      </div>
      <div>
        <SlotCounter value={'+1000'} />
        <p>Proyectos</p>
      </div>
    </div>
  )
}
