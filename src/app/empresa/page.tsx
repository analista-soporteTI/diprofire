import Image from 'next/image'
import kidde from '@assets/brands/kidde.png'
import protecto from '@assets/brands/protectowire.png'
import { History } from '@components/sections/enterprise/History'
import { MisionVision } from '@components/sections/enterprise/MisionVision'
import { PoliticValues } from '@components/sections/enterprise/PoliticValues'
import { WorkWithUs } from '@components/sections/enterprise/WorkWithUs'
import { META_PAGES } from '@/consts/metaPages'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: META_PAGES.ENTERPRISE.title,
  description: META_PAGES.ENTERPRISE.description
}

export default function Enterprise () {
  return (
    <div className='pt-24'>
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
            <Image src={protecto} alt='Logo de Protectowire FireSystems' />
          </div>
        </div>
      </section>
      <History />
      <MisionVision />
      <PoliticValues />
      <WorkWithUs />
    </div>
  )
}
