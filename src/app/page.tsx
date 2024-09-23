import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { SliderBrands } from '@/components/sliders/SliderBrands'
import { Services } from '@/components/sections/Services'
import { CategoryProducts } from '@/components/sections/CategoryProducts'
import { SliderBanner } from '@/components/sliders/SliderBanner'
import Head from 'next/head'
import { META_PAGES } from '@/consts/metaPages'

export default function Home () {
  return (
    <>
      <Head>
        <title>{META_PAGES.HOME.title}</title>
        <meta name='description' content={META_PAGES.HOME.description} />
      </Head>
      <Hero />
      <About />
      <SliderBrands />
      <Services />
      <CategoryProducts />
      <SliderBanner />
    </>
  )
}
