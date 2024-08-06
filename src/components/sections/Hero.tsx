import poster from '@assets/poster video diprofire chile.jpg'

export const Hero = () => {
  return (
    <section className='relative w-full h-screen bg-zinc-100 text-zinc-900 overflow-hidden'>
      <div className='w-full h-screen relative overflow-hidden'>
        <video
          src={'/diprofire chile.mp4'}
          muted
          autoPlay
          loop
          preload='metadata'
          poster={poster.src}
          className='w-full h-full absolute object-cover aspect-video'
        ></video>
      </div>
      <div className='w-screen h-screen bg-black/15 absolute top-0'></div>
    </section>
  )
}
