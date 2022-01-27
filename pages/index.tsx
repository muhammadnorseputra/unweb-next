import type { NextPage } from 'next'
import Hero from '@c/components/homepage/Hero'
import Flow from '@c/components/homepage/Flow'
import Kategori from '@c/components/homepage/Kategori'
import Fitur from '@c/components/homepage/Fitur'
import FiturUnggulan from '@c/components/homepage/FiturUnggulan'
import BuyAlert from '@c/components/homepage/BuyAlert'
import Katalog from '@c/components/homepage/Katalog'
import Harga from '@c/components/homepage/Harga'
import Testi from '@c/components/homepage/Testi'

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Flow />
      <Kategori />
      <Fitur />
      <FiturUnggulan />
      <BuyAlert />
      <Katalog />
      <Harga />
      <Testi />
    </>
  )
}

export default Home
