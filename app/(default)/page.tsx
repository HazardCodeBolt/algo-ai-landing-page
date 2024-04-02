export const metadata = {
  title: 'Algo AI',
  description: 'Unlocking the power of social media using AI',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import EmailLister from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <EmailLister />
    </>
  )
}
