export default function Kategori () {
	return (
		<>
			{/* Kategori */}
		    <section className="mt-12">
		        <div className="container mx-auto mb-12 relative">
		            <h1 className="flex flex-col items-center justify-center space-y-2">
		                <span className="text-4xl font-bold leading-loose sub-masking font-lora">Kategori's</span>
		            </h1>
		            <p className="font-light leading-loose text-gray-500 dark:text-gray-200 font-asap text-center">
		                Banyak pilihan tema yang telah kami kategorikan.
		            </p>
		            <div className="grid grid-rows-1 grid-cols-2 lg:grid-cols-3 gap-8 text-center mt-12">
		                <a href="#" className="rounded-xl transition duration-300 border-2 border-b-4 border-white hover:-translate-y-2 hover:shadow-xl dark:border-slate-600 dark:hover:drop-shadow-none bg-white dark:bg-slate-700 overflow-hidden">
		                    <div className="h-40 sm:h-52 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdlZGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')]"></div>
		                    <div className="flex flex-col justify-center items-center space-y-4 pb-8">
		                        <span className="p-3 bg-white dark:bg-slate-700 rounded-full drop-shadow-sm -mt-8 inline text-gray-200">
		                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
		                            </svg>
		                        </span>
		                        <p className="font-extrabold font-lora text-2xl dark:text-white">Minimalist</p>
		                    </div>
		                </a>
		                <a href="#" className="rounded-xl transition duration-300 border-2 border-b-4 border-white hover:-translate-y-2 hover:shadow-xl dark:border-slate-600 dark:hover:drop-shadow-none bg-white dark:bg-slate-700 overflow-hidden">
		                    <div className="h-40 sm:h-52 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1515626553181-0f218cb03f14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHdlZGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')]"></div>
		                    <div className="flex flex-col justify-center items-center space-y-4 pb-8">
		                        <span className="p-3 bg-white dark:bg-slate-700 rounded-full drop-shadow-sm -mt-8 inline text-gray-200">
		                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
		                            </svg>
		                        </span>
		                        <p className="font-extrabold font-lora text-2xl dark:text-white">Harmony</p>
		                    </div>
		                </a>
		                <a href="#" className="rounded-xl transition duration-300 border-2 border-b-4 border-white hover:-translate-y-2 hover:shadow-xl dark:border-slate-600 dark:hover:drop-shadow-none bg-white dark:bg-slate-700 overflow-hidden">
		                    <div className="h-40 sm:h-52 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1485700281629-290c5a704409?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80')]"></div>
		                    <div className="flex flex-col justify-center items-center space-y-4 pb-8">
		                        <span className="p-3 bg-white dark:bg-slate-700 rounded-full drop-shadow-sm -mt-8 inline text-gray-200">
		                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
		                            </svg>
		                        </span>
		                        <p className="font-extrabold font-lora text-2xl dark:text-white">Simple</p>
		                    </div>
		                </a>
		            </div>
		        </div>
		    </section>
		</>
	)
}