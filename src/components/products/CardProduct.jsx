export const CardProduct = ({ title, img, url, alt }) => {
  return (
    <a href={url} class='group block w-[200px] rounded-lg'>
      <img
        src={img}
        alt={alt}
        class='aspect-square w-full rounded object-cover'
      />

      <div class='mt-3'>
        <h3 class='font-medium text-sm text-gray-900 group-hover:underline group-hover:underline-offset-4'>
          {title}
        </h3>
      </div>
    </a>
  )
}
