import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { HeartIcon, CollectionIcon, ChatAltIcon, ExternalLinkIcon } from '@heroicons/react/solid'

export default function Hero () {
	return (
		<>
			{/* Heros */}
		    <section className="relative py-10 sm:py-20 overflow-hidden bg-[url('https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')] bg-center bg-cover">
		        <div className="absolute inset-0 z-10 w-screen h-full bg-gradient-to-b from-white/80 xl:from-white/30 to-sky-50 dark:from-slate-800/90 dark:to-slate-900 filter backdrop-blur-2xl xl:backdrop-blur-xl dark:backdrop-blur-none"></div>
		        <div className="container mx-auto flex lg:flex-row flex-col items-center justify-between z-20 relative">
		            <div className="sm:pr-20 mb-10 xl:mb-0">
		                <motion.p initial={{opacity: 0, translateY: -50}} animate={{opacity: 1, translateY: 0}} className="flex items-center text-black dark:text-white font-asap select-none mb-5">
		                    <HeartIcon className="h-6 w-6 mr-2 animate-pulse fill-red-500" />
		                    Hi, Selamat datang di unweb.id
		                </motion.p>
		                <motion.h1 initial={{opacity: 0, translateX: -50}} animate={{opacity: 1, translateX: 0}} className="group text-3xl sm:text-4xl md:text-5xl capitalize font-bold font-black leading-normal lg:leading-snug text-gray-800 dark:text-white font-asap select-none">
		                    Buat <span className="group-hover:underline decoration-[6px] underline-offset-8 text-pink-800 animate-pulse">undangan pernikahan</span> <br />
		                    jadi lebih mudah dan praktis.
		                </motion.h1>
		                <motion.p initial={{opacity: 0, translateY: 50}} animate={{opacity: 1, translateY: 0}} className="select-none leading-loose mt-5 text-gray-600 dark:text-gray-200 font-asap">
		                    Buat undangan kini lebih mudah, dengan unweb.id anda bisa membuat undangan online dimana saja dan kapan saja. Kami siap membantu anda pada hari yang spesial tanpa ada batasan waktu dan tempat.
		                </motion.p>
		                <motion.div initial={{opacity: 0, translateX: 50}} animate={{opacity: 1, translateX: 0}} className="flex justify-start items-center">
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
		                </motion.div>
		            </div>
		            <div className="flex-grow w-full md:w-8/12 xl:w-6/12">
		                <motion.div initial={{opacity: 0.6, scale: 0.90, translateY: 50}} transition={{duration: 0.3}} animate={{opacity: 1, scale: 1, translateY: 0}} className="flex flex-col rounded-xl xl:h-96 overflow-hidden border-2 border-white dark:border-gray-300 transition duration-150 cursor-pointer transition duration-150 ease-linear drop-shadow md:hover:-translate-y-2 md:drop-shadow-2xl md:hover:drop-shadow-3xl bg-gradient-to-t from-white dark:from-slate-800 group">
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
		                        	<Link href="#">
			                            <a className="animate-bounce">
			                                <ExternalLinkIcon className="h-8 w-8"/>
			                            </a>
		                            </Link>
		                        </div>
		                    </div>
		                </motion.div>
		            </div>
		        </div>
		    </section>
		</>
	)
}