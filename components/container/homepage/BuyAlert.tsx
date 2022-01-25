export default function BuyAlert() {
	return (
		<>
			{/* Alert */}
		    <section className="hidden sm:block">
		          <div className="container mx-auto my-10">
		              {/* Alert Success */} 
		              <div className="bg-gradient-to-b from-green-200 border-t border-green-300 dark:from-green-400 dark:to-slate-900 px-3 py-4 rounded-md text-lg flex justify-evenly space-x-3 items-center mx-auto">
		                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-400 rounded-2xl" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
		                  </svg>
		                  <span className="text-green-800 dark:text-white text-lg sm:text-2xl font-lora">Tunggu apalagi silahkan pesan undangan digital anda sekarang.
		                  </span>
		                  <a href="#" className="flex items-center space-x-2 rounded-md p-2 bg-green-300 border-2 border-b-4 border-green-400 text-black font-asap text-sm">
		                      <span>Pesan disini</span>
		                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 items-end" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
		                      </svg>
		                  </a>
		              </div>
		              {/* End Alert Success */}
		          </div>
		      </section>
		</>
	)
}