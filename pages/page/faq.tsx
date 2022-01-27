import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Faq: NextPage = () => {
  return (
    <>
      <Head>
        <title>Frequently Asked Questions - Unweb.id</title>
      </Head>
      <main>
            <div className="container mx-auto my-10">
                <h1 className="text-gray-800 dark:text-white text-3xl xl:text-4xl font-bold font-lora inline-flex items-center justify-start gap-3">Frequently Asked Questions <span className="text-white font-bold font-asap tracking-widest p-2 text-sm rounded-full bg-gradient-to-r from-pink-600 to-pink-400 truncate">8 Asked</span></h1>
                        <p className="leading-relaxed font-asap text-gray-400 dark:text-gray-200 mt-5">8 Pertanyaan umum yang sudah kami jawab.</p>
                <div className="border-l-2 border-dashed border-gray-300 mt-10 sm:ml-5 font-asap">
                    <div className="transform transition hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                        <div className="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                        <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>
                        <div className="flex-auto">
                            <h1 className="text-xl font-bold mb-5">Apa itu unweb.id</h1>
                            <p>unweb.id adalah situs resmi untuk membuat undangan online berbasis web. Undangan dapat diakses di berbagai device seperti Handphone, Tablet hingga Desktop, untuk mengetahui lebih lanjut perkembangan unweb.id silahkan klik disini</p>
                        </div>
                    </div>
                    <div className="transform transition hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-pink-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                        <div className="w-5 h-5 bg-pink-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                        <div className="w-10 h-1 bg-pink-300 absolute -left-10 z-0"></div>
                        <div className="flex-auto">
                            <h1 className="text-xl font-bold mb-5">Bagaimana cara mesan undangan di unweb.id</h1>
                            <p>untuk membuat undangan di unweb.id sudah kami terangkan pada halaman depan silahkan klik disini untuk melihat alur pembuatan undangan</p>
                        </div>
                    </div>
                    <div className="transform transition hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-green-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                        <div className="w-5 h-5 bg-green-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                        <div className="w-10 h-1 bg-green-300 absolute -left-10 z-0"></div>
                        <div className="flex-auto">
                            <h1 className="text-xl font-bold mb-5">Apakah harga bisa dinegosiasi atau ditawar</h1>
                            <p>untuk kesepakatan harga sudah sesuai dengan kualitas yang kami berikan, jadi harga merupakan patokan permanen sudah kami turunkan semaksimal mungkin</p>
                        </div>
                    </div>
                    <div className="transform transition hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-gray-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                        <div className="w-5 h-5 bg-gray-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                        <div className="w-10 h-1 bg-gray-300 absolute -left-10 z-0"></div>
                        <div className="flex-auto">
                            <h1 className="text-xl font-bold mb-5">Berapa lama proses pembuatan undangan</h1>
                            <p>proses pembuatan undangan terhitung mulai dari anda memesan kepada CS kami, maksimal pengerjaan paling lambat 5 hari kalender sebelum hari H, lebih cepat mesan udangan lebih baik.</p>
                        </div>
                    </div>
                    <div className="transform transition hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-orange-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                        <div className="w-5 h-5 bg-orange-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                        <div className="w-10 h-1 bg-orange-300 absolute -left-10 z-0"></div>
                        <div className="flex-auto">
                            <h1 className="text-xl font-bold mb-5">Apakah unweb.id bisa bekerjasama dengan pihak lain</h1>
                            <p>sangat bisa, kami sangat mengharapkan pihak lain untuk berkerjasama dengan kami demi kemajuan unweb.id dan memberikan pelayanan yang baik untuk masyarakat luas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
     
    </>
  )
}

export default Faq