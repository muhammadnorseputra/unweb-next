export default function Testi() {
	return (
		<>
			{/* Testimonial */}
		    <section id="testimonials">
		        <div className="container mx-auto">
		            <h1 className="flex flex-col items-center justify-center gap-2 text-3xl font-bold leading-loose sub-masking font-lora">
		                <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-600 h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
		                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
		                </svg>
		                Testimonial's
		            </h1>
		            <p className="text-center font-light leading-loose mb-10 text-gray-600 dark:text-gray-200 font-asap">
		                Apa kata mereka tentang unweb.id
		            </p>
		            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
		                <div className="bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg p-6">
		                    <div className="flex items-center space-x-6 mb-4">
		                        <img className="h-28 w-28 object-cover object-center rounded-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo" />
		                        <div>
		                            <p className="text-xl text-gray-700 dark:text-gray-900 font-normal mb-1">Dany Bailey</p>
		                            <p className="text-base text-pink-600 font-normal">Software Engineer</p>
		                        </div>
		                    </div>
		                    <div>
		                        <p className="text-gray-400 leading-loose font-normal text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
		                    </div>
		                </div>
		                <div className="bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg p-6">
		                    <div className="flex items-center space-x-6 mb-4">
		                        <img className="h-28 w-28 object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo" />
		                        <div>
		                            <p className="text-xl text-gray-700 dark:text-gray-900 font-normal mb-1">Lucy Carter</p>
		                            <p className="text-base text-pink-600 font-normal">Graphic Designer</p>
		                        </div>
		                    </div>
		                    <div>
		                        <p className="text-gray-400 leading-loose font-normal text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </section>
		</>
	)
}