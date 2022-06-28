import { SparklesIcon } from '@heroicons/react/solid'

export default function FiturUnggulan() {
	return (
		<>
			{/* Fitur Unggulan */}
		    <section>
		        <div className="container mx-auto">
		            <div className="flex flex-col lg:flex-row items-center justify-center">
		                <SparklesIcon className="h-24 w-24 mb-8 sm:mr-5 text-yellow-400" />
		                <h1 className="text-3xl text-center lg:text-4xl font-bold sub-masking font-lora mb-5">Fitur Menarik</h1>
		            </div>
		            <div className="flex flex-col lg:flex-row items-start justify-around my-10 gap-x-10">
		                <div className="relative grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10">
		                    <div className="px-4 py-5 flex-auto">
		                        <div className="text-gray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white dark:bg-white lg:dark:bg-slate-800">
		                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="lightgreen" className="bi bi-images" viewBox="0 0 16 16">
		                                <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
		                                <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
		                            </svg>
		                        </div>
		                        <h6 className="text-xl mb-1 font-semibold dark:text-white">Galeri Foto & Video</h6>
		                        <p className="mb-4 text-gray-500">
		                            Dapat menampilkan foto serta menampilkan video cinematic dari Youtube.
		                        </p>
		                    </div>
		                    <div className="px-4 py-5 flex-auto rounded-2xl lg:bg-white lg:shadow-md lg:dark:bg-slate-800">
		                        <div className="text-gray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white lg:dark:bg-slate-900">
		                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="orange" className="bi bi-stopwatch" viewBox="0 0 16 16">
		                                <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z" />
		                                <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z" />
		                            </svg>
		                        </div>
		                        <h6 className="text-xl mb-1 font-semibold dark:text-white">Countdown Timer</h6>
		                        <p className="mb-4 text-gray-500">
		                            Hitung mundur menuju hari pernikahan, sehingga para tamu mudah memperkirakan jadwalnya.
		                        </p>
		                    </div>
		                    <div className="px-4 py-5 flex-auto">
		                        <div className="text-gray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white lg:dark:bg-slate-800">
		                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="skyblue" className="bi bi-music-note-beamed" viewBox="0 0 16 16">
		                                <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z" />
		                                <path fillRule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z" />
		                                <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z" />
		                            </svg>
		                        </div>
		                        <h6 className="text-xl mb-1 font-semibold dark:text-white">Musik Kontrol</h6>
		                        <p className="mb-4 text-gray-500">
		                            Lengkapi undangan pernikahan dengan latar musik agar lebih menarik.
		                        </p>
		                    </div>
		                    <div className="px-4 py-5 flex-auto rounded-2xl lg:bg-white lg:dark:bg-slate-800 lg:shadow-md">
		                        <div className="text-gray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white lg:dark:bg-slate-900">
		                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="gray" className="bi bi-chat-left-quote" viewBox="0 0 16 16">
		                                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
		                                <path d="M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
		                            </svg>
		                        </div>
		                        <h6 className="text-xl mb-1 font-semibold dark:text-white">Ucapan & RSVP</h6>
		                        <p className="mb-4 text-gray-500">
		                            Para tamu dapat memberikan ucapan dan konfirmasi kehadiran langsung di website-mu.
		                        </p>
		                    </div>
		                    <div className="px-4 py-5 flex-auto">
		                        <div className="text-gray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white lg:dark:bg-slate-800">
		                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="red" className="bi bi-display" viewBox="0 0 16 16">
		                                <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z" />
		                            </svg>
		                        </div>
		                        <h6 className="text-xl mb-1 font-semibold dark:text-white">UI Friendly</h6>
		                        <p className="mb-4 text-gray-500">
		                            Semua desain yang ada sudah responsive, dapat menyesuaikan berbagai macam ukuran layar device.
		                        </p>
		                    </div>
		                    <div className="px-4 py-5 flex-auto rounded-2xl lg:bg-white lg:shadow-md lg:dark:bg-slate-800">
		                        <div className="text-gray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white lg:dark:bg-slate-900">
		                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="purple" className="bi bi-pin-map" viewBox="0 0 16 16">
		                                <path fillRule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z" />
		                                <path fillRule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z" />
		                            </svg>
		                        </div>
		                        <h6 className="text-xl mb-1 font-semibold dark:text-white">Lokasi & Waktu Resepsi</h6>
		                        <p className="mb-4 text-gray-500">
		                            Memudahkan para tamu undangan untuk menuju lokasi acara, menghindari kemungkinan tersesat.
		                        </p>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </section>
		</>
	)

}