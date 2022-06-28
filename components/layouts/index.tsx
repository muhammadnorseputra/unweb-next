// components/layout.js

import ButtonContact from '../atoms/ButtonContact'
import Notif from  '../molecules/Notif'
import MetaDefault from '../layouts/HeadMetaDefault'

import dynamic from "next/dynamic";

const Navbar = dynamic(
  () => import("../layouts/Navbar"),
  { loading: () => <p>Memuat Navbar ...</p> }
);

const Footer = dynamic(
  () => import("../layouts/Footer"),
  { loading: () => <p>Memuat Footer</p> }
);

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