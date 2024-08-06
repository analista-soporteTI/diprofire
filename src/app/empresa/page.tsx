import Image from 'next/image'
import kidde from '@assets/brands/kidde.png'
import logo3M from '@assets/brands/3M.png'
import protecto from '@assets/brands/protectowire.png'
import { History } from '@components/sections/enterprise/History'
import { MisionVision } from '@components/sections/enterprise/MisionVision'
import { PoliticValues } from '@components/sections/enterprise/PoliticValues'
import { WorkWithUs } from '@components/sections/enterprise/WorkWithUs'

export default function Enterprise () {
  return (
    <main className="pt-24">
      <section className='text-center py-10 px-4 sm:px-10'>
        <h1 className='text-3xl sm:text-5xl font-bold mb-4'>
          Diprofire Chile Ltda.
        </h1>
        <p className='text-lg sm:text-xl font-medium mb-4'>
          Representantes en Chile
        </p>
        <div className='flex flex-wrap gap-10 items-center justify-center mx-auto [&>div>img]:max-w-[120px] sm:[&>div>img]:max-w-[200px] [&>img]:object-contain [&>img]:aspect-video [&>img]:w-full'>
          <div>
            <Image src={kidde} alt='Logo de Kidde Fire Systems' />
          </div>
          <div>
            <Image src={logo3M} alt='Logo de 3M' />
          </div>
          <div>
            <Image src={protecto} alt='Logo de Protectowire FireSystems' />
          </div>
        </div>
      </section>
      <History />
      <MisionVision />
      <PoliticValues />
      <WorkWithUs />
    </main>
  )
}
