import KatalogItems from '@c/components/homepage/KatalogItems';

export default function Katalog () {
	return (
		<>
			{/* Katalog */}
		    <section className="relative py-24 mb-12 bg-[url('https://images.unsplash.com/photo-1517722014278-c256a91a6fba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')] bg-cover bg-center bg-fixed">
		        <div className="absolute inset-0 z-10 w-screen h-full bg-gradient-to-b from-black/80 xl:from-black/30 to-sky-50 dark:from-slate-900/90 dark:to-slate-900 filter backdrop-blur-md dark:backdrop-blur-none sm:backdrop-blur-sm md:backdrop-blur-none"></div>
		        <div className="container mx-auto z-20 relative">
		            <div className="flex justify-between items-center">
		                <div>
		                    <h1 className="flex items-center gap-2 text-3xl font-bold leading-loose text-white font-lora">
		                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
		                            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
		                        </svg>
		                        Katalog's
		                    </h1>
		                    <p className="font-light lg:leading-loose mb-5 text-gray-200 dark:text-gray-200 font-asap">
		                        Katalog undangan yang paling baru
		                    </p>
		                </div>
		                <div className="lg:block hidden">
		                    <a href="#" className="font-bold font-asap inline-flex items-center justify-center text-white dark:text-red-300 dark:hover:text-gray-600 hover:text-gray-300 truncate text-nowrap">
		                        <span>Lihat Lainnya</span>
		                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 lg:mt-1 lg:ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
		                        </svg>
		                    </a>
		                </div>
		            </div>
		            <div className="grid grid-rows-1 grid-cols-2 lg:grid-cols-5 space-x-3 lg:space-x-8">
		                <KatalogItems people="Tikah & Galih" date="5 June 2020" cover="https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
		                <KatalogItems people="Putra & Nimah" date="4 July 2021" cover="https://images.unsplash.com/photo-1537907690979-ee8e01276184?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2VkZGluZ3xlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60"/>
	           		</div>
		        </div>
		    </section>
		</>
	)

}