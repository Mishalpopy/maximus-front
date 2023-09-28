

import BannerVideo from '../components/BannerVideo'
import Partnerships from '../components/Brands'

import ExploreCollection from '../components/ExploreCollection'
import FeatureTab from '../components/FeatureTab'

import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Message from '../components/Message'
import Navbar from '../components/Navbar'

import ProducutGrid from '../components/ProducutGrid'
import ScrollIteams from '../components/ScrollIteams'
import ShopFor from '../components/ShopFor'
  



export default function Home() {
  return (
    <mian>

      <Navbar />
      <Hero />
      <Message />
      <ShopFor />

      <ProducutGrid />
      <ExploreCollection />
      <FeatureTab />
      <ScrollIteams />
      <BannerVideo />
      <Partnerships />

    
      <Footer />
    </mian>
  )
}
