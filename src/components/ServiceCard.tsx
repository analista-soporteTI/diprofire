import Image from 'next/image'

export const ServiceCard = ({ src, alt, style, href, children }: any) => {
  return (
    <div
      className={`w-full max-w-[200px] h-full max-h-[400px] mx-auto px-4 rounded-t-md group ${style}`}
    >
      <a
        href={href}
        className='block group-hover:-translate-y-5 transition-all duration-300'
      >
        <Image
          src={src}
          alt={alt}
          className='w-full max-w-[150px] object-cover mx-auto'
          loading='lazy'
        />
        {children}
      </a>
    </div>
  )
}
