import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { SliderBrands } from '@/components/sliders/SliderBrands'
import { Services } from '@/components/sections/Services'
import { CategoryProducts } from '@/components/sections/CategoryProducts'
import { SliderBanner } from '@/components/sliders/SliderBanner'

export default function Home () {
  return (
    <>
      <Hero />
      <About />
      <SliderBrands />
      <Services />
      <CategoryProducts />
      <SliderBanner />
    </>
  )
}
