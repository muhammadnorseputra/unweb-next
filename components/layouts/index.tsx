// components/layout.js

import ButtonContact from '../atoms/ButtonContact'
import Notif from  '../molecules/Notif'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import MetaDefault from '../layouts/HeadMetaDefault'


interface LayoutProps {
  children: any
}

export default function Layout({children} : LayoutProps) {
  return (
    <>
      <MetaDefault />
      <ButtonContact />
      <Notif />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}