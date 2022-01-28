import type { NextPage } from 'next'
import Head from 'next/head'


const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tentang Kami - Unweb.id</title>
      </Head>
      
      <main>
            <div className="container mx-auto my-10">
                <h1 className="text-gray-800 dark:text-white text-3xl xl:text-4xl font-bold font-lora inline-flex items-center justify-start gap-3">Tentang Kami <span className="text-white font-bold font-asap tracking-widest p-2 text-sm rounded-full bg-gradient-to-r from-pink-600 to-pink-400 truncate">unweb.id</span></h1>
                <p className="leading-relaxed font-asap text-gray-400 dark:text-gray-200 mt-5">Berikut ini deskripsi singkat tentang unweb.id yang bisa kalian ketahui</p>
                <div className="rounded-xl overflow-hidden my-10 drop-shadow-lg">
                    <div className="grid grid-rows-1 grid-cols-1 sm:grid-cols-2 h-screen max-h-screen xl:h-auto overflow-y-auto">
                        <div className="bg-[url('https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFic3RyYWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')] bg-cover bg-center dark:bg-[url('https://images.unsplash.com/photo-1515462277126-2dd0c162007a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80')]"></div>
                        <div className="bg-gradient-to-b from-white to-gray-100 dark:from-slate-700 dark:to-slate-800 p-5">
                            <h1 className="text-gray-800 text-3xl font-bold dark:text-white font-lora leading-tight border-b border-dashed border-gray-600 pb-3 mb-3">UNWEB.ID</h1>
                            <p className="leading-relaxed tracking-wide text-gray-600 dark:text-gray-300 font-asap mb-8 text-justify">Bukan suatu perusahaan melaikan situs yang dibangun oleh seorang programmer untuk memperudah pembuatan undangan yang dapat diakses dimana saja dan kapan saja oleh siapapun melalui gadget yang mereka pakai.</p>
                            <p className="leading-relaxed tracking-wide text-gray-600 dark:text-gray-300 font-asap text-justify">
                                UNWEB.ID direncanakan pada tahun 2021 pada bulan disember dan mulai dibangun pada tahun 2022 awal januari. Sebelum dirintis sangat banyak suka & duka yang didapat, terlebih pada fasilitas yang masih kurang hanya menggunakan sebuah laptop dengan spek yang tergolong ketinggalan zaman, tetapi karna semangat dan dukungan dari seorang yang sangat berpengarauh dalam kehidupan, UNWEB.ID mulai dirintis dan mulai sejak itu situs terus diperbaharui untuk memaksimalkan pengalaman pengguna.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default About