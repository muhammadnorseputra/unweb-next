import type { NextPage } from 'next'
import Hero from '../components/container/homepage/Hero'
import Flow from '../components/container/homepage/Flow'
import Kategori from '../components/container/homepage/Kategori'
import Fitur from '../components/container/homepage/Fitur'
import FiturUnggulan from '../components/container/homepage/FiturUnggulan'
import BuyAlert from '../components/container/homepage/BuyAlert'
import Katalog from '../components/container/homepage/Katalog'
import Harga from '../components/container/homepage/Harga'
import Testi from '../components/container/homepage/Testi'

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
