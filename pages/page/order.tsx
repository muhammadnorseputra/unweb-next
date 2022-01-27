import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Order: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cara Order Undangan - Unweb.id</title>
      </Head>
      
      <main>
        <div className="container mx-auto my-10 text-center">
            <h1 className="text-gray-800 dark:text-white text-3xl xl:text-4xl font-bold font-lora inline-flex items-center justify-start gap-3">Cara Order <span className="text-white font-bold font-asap tracking-widest p-2 text-sm rounded-full bg-gradient-to-r from-pink-600 to-pink-400 truncate">Tips</span></h1>
            <p className="leading-relaxed font-asap text-gray-400 dark:text-gray-200 mt-5">Silahkan baca cara pesan undangan di unweb.id</p>
        </div>
        <div className="container mx-auto my-10">
            <div className="flex justify-center items-center">
                <div className="w-full lg:w-8/12 xl:w-6/12 bg-gradient-to-b from-white to-gray-50 py-3 px-5 rounded-xl drop-shadow-2xl dark:drop-shadow-none dark:border-t dark:border-slate-600 dark:from-slate-700 dark:to-slate-700 dark:border-b">
                    <div className="mb-5">
                        <div className="flex justify-start items-center space-x-4 border-b border-dashed border-gray-200 dark:border-slate-600 pb-3 mb-3">
                            <div className="inline-flex items-center justify-center text-2xl w-12 h-12 font-bold text-gray-500 rounded-lg drop-shadow-lg rounded-full transition-all duration-500 bg-gradient-to-b from-white to-gray-100 dark:from-slate-700 dark:to-slate-900 border border-gray-200 dark:border-slate-600">
                                1
                            </div>
                            <h1 className="font-extrabold font-lora text-2xl text-gray-700 dark:text-gray-300">Buka unweb.id</h1>
                        </div>
                        <p className="text-gray-400 leading-relaxed font-asap sm:pl-16">
                            Silakan buka situs unweb.id, pilih katalog yang tersedia atau bisa langsung hubungi CS ke nomor wa dengan tekan tombol <b>pesan sekarang</b> di unweb.id
                        </p>
                    </div>
                    <div className="mb-5">
                        <div className="flex justify-start items-center space-x-4 border-b border-dashed border-gray-200 dark:border-slate-600 pb-3 mb-3">
                            <div className="inline-flex items-center justify-center text-2xl w-12 h-12 font-bold text-gray-500 rounded-lg drop-shadow-lg rounded-full transition-all duration-500 bg-gradient-to-b from-white to-gray-100 dark:from-slate-700 dark:to-slate-900 border border-gray-200 dark:border-slate-600">
                                2
                            </div>
                            <h1 className="font-extrabold font-lora text-2xl text-gray-700 dark:text-gray-300">Isi Formulir</h1>
                        </div>
                        <p className="text-gray-400 leading-relaxed font-asap sm:pl-16">
                            Isikan formulir yang sudah kami sediakan via website dan upload juga photo atau video kamu di instagram dengan hastag #unweb_namakamu.
                        </p>
                    </div>
                    <div className="mb-5">
                        <div className="flex justify-start items-center space-x-4 border-b border-dashed border-gray-200 dark:border-slate-600 pb-3 mb-3">
                            <div className="inline-flex items-center justify-center text-2xl w-12 h-12 font-bold text-gray-500 rounded-lg drop-shadow-lg rounded-full transition-all duration-500 bg-gradient-to-b from-white to-gray-100 dark:from-slate-700 dark:to-slate-900 border border-gray-200 dark:border-slate-600">
                                3
                            </div>
                            <h1 className="font-extrabold font-lora text-2xl text-gray-700 dark:text-gray-300">Metode Pembayaran</h1>
                        </div>
                        <p className="text-gray-400 leading-relaxed font-asap sm:pl-16">
                            Silahkan pilih metode pembayaran yang kami sediakan.
                            <Image src="/assets/images/payment-method.png" alt="payment-method" layout="responsive" width="500" height="180" />
                        </p>

                        <div className="bg-gradient-to-b from-green-200 dark:from-green-100 dark:to-green-200 px-3 py-4 sm:ml-16 rounded-md text-lg flex items-start mx-auto font-asap">
                            <svg viewBox="0 0 24 24" className="text-green-600 w-10 sm:w-10 mt-1 mr-3">
                                <path fill="currentColor" d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"></path>
                            </svg>
                            <span className="text-green-800 text-sm">Sesudah melakukan order harap hubungi CS kami melalui wa untuk melakukan konfirmasi pesanan dengan melampirkan bukti pembayaran. </span>
                        </div>
                        
                    </div>
                    <div className="mb-5">
                        <div className="flex justify-start items-center space-x-4 border-b border-dashed border-gray-200 dark:border-slate-600 pb-3 mb-3">
                            <div className="inline-flex items-center justify-center text-2xl w-12 h-12 font-bold text-gray-500 rounded-lg drop-shadow-lg rounded-full transition-all duration-500 bg-gradient-to-b from-white to-gray-100 dark:from-slate-700 dark:to-slate-900 border border-gray-200 dark:border-slate-600">
                                4
                            </div>
                            <h1 className="font-extrabold font-lora text-2xl text-gray-700 dark:text-gray-300">Pesanan Diproses</h1>
                        </div>
                        <p className="text-gray-400 leading-relaxed font-asap sm:pl-16">
                            Tunggu pesanan anda kami proses pembuatan.
                        </p>
                    </div>
                    <div className="mb-5">
                        <div className="flex justify-start items-center space-x-4 border-b border-dashed border-gray-200 dark:border-slate-600 pb-3 mb-3">
                            <div className="inline-flex items-center justify-center text-2xl w-12 h-12 font-bold text-gray-500 rounded-lg drop-shadow-lg rounded-full transition-all duration-500 bg-gradient-to-b from-white to-gray-100 dark:from-slate-700 dark:to-slate-900 border border-gray-200 dark:border-slate-600">
                                5
                            </div>
                            <h1 className="font-extrabold font-lora text-2xl text-gray-700 dark:text-gray-300">Pesanan Selesai</h1>
                        </div>
                        <p className="text-gray-400 leading-relaxed font-asap sm:pl-16">
                            Pesanan telah selesai kami akan memberikan informasi alamat website undangan anda seperti <code className="p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">romeo-juliet.unweb.id</code> jika terdapat kesalahan dalam informasi dapat dilakukan revisi dan jangan lupa untuk memberikan testi kepada kami jika anda puas terhadap pelayanan yang kami berikan.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </>
  )
}

export default Order