import { FooterEnterprise } from '@components/sections/footer/FooterEnterprise'

const currentlyDate = new Date()
const currentlyYear = currentlyDate.getFullYear()

export const Footer = () => {
  return (
    <footer className='bg-white'>
      <div className='mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8'>
        <FooterEnterprise />
      </div>
      <p className='text-xs text-gray-500 pb-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
        &copy; {currentlyYear}. Diprofire Chile Ltda.
      </p>
    </footer>
  )
}
