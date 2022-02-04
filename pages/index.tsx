import type { NextPage } from 'next'
import Kategori from '@c/components/homepage/Kategori'
import Fitur from '@c/components/homepage/Fitur'
import FiturUnggulan from '@c/components/homepage/FiturUnggulan'
import BuyAlert from '@c/components/homepage/BuyAlert'
import Katalog from '@c/components/homepage/Katalog'
import Harga from '@c/components/homepage/Harga'
import Testi from '@c/components/homepage/Testi'

// import { Suspense } from "react";
import dynamic from "next/dynamic";

const Hero = dynamic(
  () => import("@c/components/homepage/Hero"),
  { loading: () => <p>Memuat Gambar ...</p> }
);

const Flow = dynamic(
  () => import("@c/components/homepage/Flow"),
  { loading: () => <p>Memuat Component</p> }
);

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
