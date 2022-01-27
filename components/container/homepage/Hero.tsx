import Image from 'next/image'
import Link from 'next/link'

import { HeartIcon, CollectionIcon, ChatAltIcon } from '@heroicons/react/solid'

export default function Hero () {
	return (
		<>
			{/* Heros */}
		    <section className="relative py-10 sm:py-20 overflow-hidden bg-[url('https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')] bg-center bg-cover">
		        <div className="absolute inset-0 z-10 w-screen h-full bg-gradient-to-b from-white/80 xl:from-white/30 to-sky-50 dark:from-slate-800/90 dark:to-slate-900 filter backdrop-blur-2xl xl:backdrop-blur-xl dark:backdrop-blur-none"></div>
		        <div className="container mx-auto flex lg:flex-row flex-col items-center justify-between z-20 relative">
		            <div className="sm:pr-20 mb-10 xl:mb-0">
		                <p className="flex items-center text-black dark:text-white font-asap select-none mb-5">
		                    <HeartIcon className="h-6 w-6 mr-2 animate-pulse fill-red-500" />
		                    Hi, Selamat datang di unweb.id
		                </p>
		                <h1 className="group text-3xl sm:text-4xl md:text-5xl capitalize font-bold font-black leading-normal lg:leading-snug text-gray-800 dark:text-white font-asap select-none">
		                    Buat <span className="group-hover:underline decoration-[6px] underline-offset-8 text-pink-800 animate-pulse">undangan pernikahan</span> <br />
		                    jadi lebih mudah dan praktis.
		                </h1>
		                <p className="select-none leading-loose mt-5 text-gray-600 dark:text-gray-200 font-asap">
		                    Buat undangan kini lebih mudah, dengan unweb.id anda bisa membuat undangan online dimana saja dan kapan saja. Kami siap membantu anda pada hari yang spesial tanpa ada batasan waktu dan tempat.
		                </p>
		                <div className="flex justify-start items-center">
		                	<Link href="#">
		                    <a className="border-2 text-black border-b-4 rounded-md border-black bg-white px-5 py-3 inline-flex items-center mt-8 mr-3 transition duration-250 hover:-translate-y-0.5 hover:drop-shadow-xl">
		                        <span className="mr-3 truncate">Lihat Katalog</span>
		                        <CollectionIcon className="w-6" />
		                    </a>
		                    </Link>
		                	<Link href="#">
		                    <a className="border-2 border-b-4 rounded-md border-red-400 bg-red-300 text-white px-5 py-3 inline-flex items-center mt-8 transition-all duration-250 ease-linear group  hover:-translate-y-0.5 hover:shadow-xl hover:shadow-red-500/40">
		                        <span className="mr-3 truncate">Pesan Sekarang</span>
		                        <ChatAltIcon className="w-6" />
		                    </a>
		                    </Link>

		                </div>
		            </div>
		            <div className="flex-grow w-full md:w-8/12 xl:w-6/12">
		                <div className="flex flex-col rounded-xl xl:h-96 overflow-hidden border-2 border-white dark:border-gray-300 transition duration-150 cursor-pointer transition duration-150 ease-linear drop-shadow md:hover:-translate-y-2 md:drop-shadow-2xl md:hover:drop-shadow-3xl bg-gradient-to-t from-white dark:from-slate-800 group">
		                    <div>	
			                    <Image 
				                    src="https://images.unsplash.com/photo-1485700281629-290c5a704409?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" 
				                    alt="discover" 
				                    objectFit="cover"
				                    width="500"
				                    height="360"
				                    layout="responsive"
				                    priority
			                    />
		                    </div>
			                <div className="px-8 py-5 font-asap inline-flex justify-between items-center">
		                        <div>
		                            <p className="font-bold text-gray-300">Basic</p>
		                            <p className="font-bold text-xl text-indigo-500">Putra & Nimah</p>
		                        </div>
		                        <div>
		                            <a href="#" className="animate-bounce">
		                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-indigo-600" fill="none" viewBox="0 0 24 24" stroke="none">
		                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
		                                </svg>
		                            </a>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </section>
		</>
	)
}