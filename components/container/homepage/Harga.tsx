export default function Harga() {
	return (
		<>
			{/* Harga */}
		    <section className="mb-12" id="price-list">
		        <div className="container mx-auto">
		            <h1 className="flex items-center gap-2 text-3xl font-bold leading-loose text-gray-800 dark:text-white font-lora">
		                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
		                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
		                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd" />
		                </svg>
		                Harga Spesial
		            </h1>
		            <p className="font-light leading-loose mb-5 text-gray-600 dark:text-gray-200 font-asap">
		                Ada diskon untuk tahun 2022, ayo ambil diskonnya sekarang !
		            </p>
		            <div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-3 gap-5">
		                {/* Start First Plan */}
		                <div className="relative flex flex-col justify-between p-8 lg:p-6 xl:p-8 rounded-2xl">
		                    <div className="absolute inset-0 w-full h-full transform translate-x-2 translate-y-2 bg-green-50 dark:bg-green-50/10 rounded-2xl"></div>
		                    <div className="absolute inset-0 w-full h-full border-2 border-b-4 border-gray-900 dark:border-green-500 rounded-2xl"></div>
		                    <div className="relative flex pb-5 space-x-5 border-b border-gray-200 lg:space-x-3 xl:space-x-5">
		                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-400 rounded-2xl" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
		                        </svg>
		                        <div className="relative flex flex-col items-start">
		                            <h3 className="text-xl font-bold dark:text-white">Basic</h3>
		                            <p className="tracking-tight text-gray-500">
		                                <span className="text-sm transform inline-block -translate-y-2.5 relative">Rp</span>
		                                <span className="text-3xl font-bold text-gray-800 dark:text-white">159 K</span>
		                                <span className="text-sm -translate-y-0.5 inline-block transform">/ <b className="line-through">256 K</b></span>
		                            </p>
		                        </div>
		                    </div>
		                    <ul className="relative py-12 space-y-3 font-asap">
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
		                            </svg>
		                            <span>Free Subdomain<code className="px-1 bg-slate-800 text-red-300 rounded select-text">.unweb.id</code></span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
		                            </svg>
		                            <span>Akses Selama 2 Bulan</span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
		                            </svg>
		                            <span>UNLIMITED Nama Tamu</span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
		                            </svg>
		                            <span>UNLIMITED Sebar Undangan</span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
		                            </svg>
		                            <span>UNLIMITED Ucapan Via Website</span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
		                            </svg>
		                            <span>UNLIMITED Galeri Foto</span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
		                            </svg>
		                            <span>Maks 1 Galeri Video (jika ada)</span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
		                            </svg>
		                            <span>Timer Hitung Mundur</span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
		                            </svg>
		                            <span>Qoutes</span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
		                            </svg>
		                            <span>Peta Navigasi</span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
		                            </svg>
		                            <span>Penerapan Protokol Kesehatan</span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" viewBox="0 0 20 20" fill="currentColor">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
		                            </svg>
		                            <span className="line-through">RSVP (Konfirmasi Kehadiran) </span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" viewBox="0 0 20 20" fill="currentColor">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
		                            </svg>
		                            <span className="line-through">Loves Story </span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" viewBox="0 0 20 20" fill="currentColor">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
		                            </svg>
		                            <span className="line-through">Google Remainder </span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" viewBox="0 0 20 20" fill="currentColor">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
		                            </svg>
		                            <span className="line-through">Amplop Online </span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" viewBox="0 0 20 20" fill="currentColor">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
		                            </svg>
		                            <span className="line-through">Live Streaming </span>
		                        </li>
		                    </ul>
		                    <a href="#_" className="relative flex items-center justify-center w-full px-5 py-5 text-lg font-medium text-white rounded-xl group">
		                        <span className="w-full h-full absolute inset-0 transform translate-y-1.5 translate-x-1.5 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ease-out duration-200 rounded-xl bg-green-500"></span>
		                        <span className="absolute inset-0 w-full h-full border-2 border-gray-900 rounded-xl"></span>
		                        <span className="relative">Pesan Sekarang</span>
		                        <svg className="w-5 h-5 ml-2 transition-all duration-200 ease-out transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
		                        </svg>
		                    </a>
		                </div>
		                {/* End First Plan */}
		                {/* Start Middle Plan */}
		                <div className="relative p-8 lg:p-6 xl:p-8 rounded-2xl">
		                    <div className="absolute inset-0 w-full h-full transform translate-x-2 translate-y-2 bg-blue-100 dark:bg-blue-100/10 rounded-2xl"></div>
		                    <div className="absolute inset-0 w-full h-full border-2 border-b-4 border-gray-900 dark:border-blue-500 rounded-2xl"></div>
		                    <div className="relative flex pb-5 space-x-5 border-b border-indigo-400 lg:space-x-3 xl:space-x-5">
		                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-indigo-400 rounded-2xl" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
		                        </svg>
		                        <div className="relative flex flex-col items-start">
		                            <h3 className="text-xl font-bold dark:text-white">Premium</h3>
		                            <p className="tracking-tight text-gray-500">
		                                <span className="text-sm transform inline-block -translate-y-2.5 relative">Rp</span>
		                                <span className="text-3xl font-bold text-gray-800 dark:text-white">259 K</span>
		                                <span className="text-sm -translate-y-0.5 inline-block transform">/ <b className="line-through">550 K</b></span>
		                            </p>
		                        </div>
		                    </div>
		                    <ul className="relative py-12 space-y-3">
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
		                            </svg>
		                            <span>Free Subdomain<code className="px-1 bg-slate-800 text-red-300 rounded select-text">.unweb.id</code></span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
		                            </svg>
		                            <span>Akses Selama 4 Bulan</span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
		                            </svg>
		                            <span>UNLIMITED Nama Tamu</span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
		                            </svg>
		                            <span>UNLIMITED Sebar Undangan</span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
		                            </svg>
		                            <span>UNLIMITED Ucapan Via Website</span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
		                            </svg>
		                            <span>UNLIMITED Galeri Foto</span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
		                            </svg>
		                            <span>UNLIMITED Galeri Video</span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
		                            </svg>
		                            <span>Timer Hitung Mundur</span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
		                            </svg>
		                            <span>Qoutes</span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
		                            </svg>
		                            <span>Peta Navigasi</span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
		                            </svg>
		                            <span>Penerapan Protokol Kesehatan</span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
		                            </svg>
		                            <span>RSVP (Konfirmasi Kehadiran) </span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
		                            </svg>
		                            <span>Loves Story </span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" viewBox="0 0 20 20" fill="currentColor">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
		                            </svg>
		                            <span className="line-through">Google Remainder </span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" viewBox="0 0 20 20" fill="currentColor">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
		                            </svg>
		                            <span className="line-through">Amplop Online </span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" viewBox="0 0 20 20" fill="currentColor">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
		                            </svg>
		                            <span className="line-through">Live Streaming </span>
		                        </li>
		                    </ul>
		                    <a href="#_" className="relative flex items-center justify-center w-full px-5 py-5 text-lg font-medium text-white rounded-xl group">
		                        <span className="w-full h-full absolute inset-0 transform translate-y-1.5 translate-x-1.5 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ease-out duration-200 rounded-xl bg-blue-600"></span>
		                        <span className="absolute inset-0 w-full h-full border-2 border-gray-900 rounded-xl"></span>
		                        <span className="relative">Pesan Sekarang</span>
		                        <svg className="w-5 h-5 ml-2 transition-all duration-200 ease-out transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
		                        </svg>
		                    </a>
		                </div>
		                {/* End Middle Plan */}
		                {/* Start Third Plan */}
		                <div className="relative flex flex-col justify-between p-8 lg:p-6 xl:p-8 rounded-2xl md:col-span-2 lg:col-span-1">
		                    <div className="absolute inset-0 w-full h-full transform translate-x-2 translate-y-2 bg-red-50 dark:bg-red-50/10 rounded-2xl"></div>
		                    <div className="absolute inset-0 w-full h-full border-2 border-b-4 border-gray-900 rounded-2xl dark:border-red-500"></div>
		                    <div className="relative flex pb-5 space-x-5 border-b border-red-400 lg:space-x-3 xl:space-x-5">
		                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-400 rounded-2xl" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
		                        </svg>
		                        <div className="relative flex flex-col items-start">
		                            <h3 className="text-xl font-bold dark:text-white">Sultan</h3>
		                            <p className="tracking-tight text-gray-500">
		                                <span className="text-sm transform inline-block -translate-y-2.5 relative">Rp</span>
		                                <span className="text-3xl font-bold text-gray-800 dark:text-white">459 K</span>
		                                <span className="text-sm -translate-y-0.5 inline-block transform">/ <b className="line-through">860 K</b></span>
		                            </p>
		                        </div>
		                    </div>
		                    <ul className="relative py-12 space-y-3">
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
		                            </svg>
		                            <span>Free Subdomain<code className="px-1 bg-slate-800 text-red-300 rounded select-text">.unweb.id</code></span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
		                            </svg>
		                            <span>Akses Selama 5 Bulan</span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
		                            </svg>
		                            <span>UNLIMITED Nama Tamu</span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
		                            </svg>
		                            <span>UNLIMITED Sebar Undangan</span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
		                            </svg>
		                            <span>UNLIMITED Ucapan Via Website</span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
		                            </svg>
		                            <span>UNLIMITED Galeri Foto</span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
		                            </svg>
		                            <span>UNLIMITED Galeri Video</span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
		                            </svg>
		                            <span>Timer Hitung Mundur</span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
		                            </svg>
		                            <span>Qoutes</span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
		                            </svg>
		                            <span>Peta Navigasi</span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
		                            </svg>
		                            <span>Penerapan Protokol Kesehatan</span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
		                            </svg>
		                            <span>RSVP (Konfirmasi Kehadiran) </span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
		                            </svg>
		                            <span>Loves Story </span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
		                            </svg>
		                            <span>Google Remainder </span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
		                            </svg>
		                            <span>Amplop Online </span>
		                        </li>
		                        <li className="flex items-center space-x-2 text-md font-medium text-gray-500">
		                            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
		                            </svg>
		                            <span>Live Streaming </span>
		                        </li>
		                    </ul>
		                    <a href="#_" className="relative flex items-center justify-center w-full px-5 py-5 text-lg font-medium text-white rounded-xl group">
		                        <span className="w-full h-full absolute inset-0 transform translate-y-1.5 translate-x-1.5 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ease-out duration-200 rounded-xl bg-red-400"></span>
		                        <span className="absolute inset-0 w-full h-full border-2 border-gray-900 rounded-xl"></span>
		                        <span className="relative">Pesan Sekarang</span>
		                        <svg className="w-5 h-5 ml-2 transition-all duration-200 ease-out transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
		                            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
		                        </svg>
		                    </a>
		                </div>
		                {/* End Third Plan */}
		            </div>
		        </div>
		    </section>
		</>
	)
}