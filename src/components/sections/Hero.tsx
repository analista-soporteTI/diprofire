'use client'
import { MutedIcon } from '@/icons/video/Muted'
import { SoundIcon } from '@/icons/video/Sound'
import poster from '@assets/poster video diprofire chile.jpg'
import { useState } from 'react'

export const Hero = () => {
  const [isMuted, setIsMuted] = useState(true)

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <section className='relative w-full h-screen bg-zinc-100 text-zinc-900 overflow-hidden'>
      <div className='w-full h-screen relative overflow-hidden'>
        <video
          muted={isMuted}
          autoPlay
          loop
          preload='metadata'
          poster={poster.src}
          className='w-full h-full absolute object-cover aspect-video'
        >
          <source
            src={'/diprofire chile 720p.mp4'}
            type='video/mp4'
            media='(max-width: 720px)'
          />
          <source
            src={'/diprofire chile.mp4'}
            type='video/mp4'
            media='(min-width: 721px)'
          />
          Your browser does not support the video tag.
        </video>
        <button
          onClick={toggleMute}
          className='absolute z-20 bottom-4 right-4 p-2 text-black rounded-md shadow-lg bg-white hover:bg-zinc-200 active:scale-95 group duration-200'
        >
          {isMuted ? (
            <MutedIcon className='size-6 group-active:scale-95 duration-200' />
          ) : (
            <SoundIcon className='size-6 group-active:scale-95 duration-200' />
          )}
        </button>
      </div>
      <div className='w-screen h-screen bg-black/15 absolute top-0'></div>
    </section>
  )
}
