import Plan from '@c/components/homepage/HargaPlan'

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
		            	<Plan isType="basic" title="Basic" planIconColor="text-yellow-500" price={156} afterDicPrice={256} planBgColor="bg-green-50" planBorderColor="border-green-500"/>
		            	<Plan isType="premium" title="Premium" planIconColor="text-indigo-500" price={156} afterDicPrice={256} planBgColor="bg-indigo-50" planBorderColor="border-indigo-500"/>
		            	<Plan title="Sultan" planIconColor="text-pink-500" price={156} afterDicPrice={256} planBgColor="bg-pink-50" planBorderColor="border-pink-500"/>
		            </div>
		        </div>
		    </section>
		</>
	)
}