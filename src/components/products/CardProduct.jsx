export const CardProduct = ({ name, img, url = "#", alt }) => {
  return (
    <a href={url} className='group block w-[200px] rounded-lg'>
      <img
        src={img}
        alt={alt}
        className='aspect-square w-full rounded object-cover'
      />

      <div className='mt-3'>
        <h3 className='font-medium text-base text-gray-900 group-hover:text-green-600 group-hover:underline group-hover:underline-offset-4'>
          {name}
        </h3>
      </div>
    </a>
  )
}
