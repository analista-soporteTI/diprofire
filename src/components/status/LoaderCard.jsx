import '@styles/loader-card.css'

export const SingleLoaderCardSmall = () => {
  return <div className='loader-small'></div>
}

export const SingleLoaderCardBig = () => {
  return <div className='loader-big'></div>
}

export const ListLoaderCardSmall = () => {
  return (
    <ul className='w-full mx-auto px-4 sm:px-10 gap-10 gap-y-8 flex flex-wrap justify-center lg:justify-start'>
      <div className='loader-small'></div>
      <div className='loader-small'></div>
      <div className='loader-small'></div>
      <div className='loader-small'></div>
      <div className='loader-small'></div>
      <div className='loader-small'></div>
      <div className='loader-small'></div>
      <div className='loader-small'></div>
    </ul>
  )
}

export const ListLoaderCardBig = () => {
  return (
    <ul className='w-full px-4 gap-10 gap-y-8 flex flex-wrap justify-center'>
      <div className='loader-big'></div>
      <div className='loader-big'></div>
      <div className='loader-big'></div>
      <div className='loader-big'></div>
      <div className='loader-big'></div>
      <div className='loader-big'></div>
      <div className='loader-big'></div>
      <div className='loader-big'></div>
      <div className='loader-big'></div>
      <div className='loader-big'></div>
    </ul>
  )
}
