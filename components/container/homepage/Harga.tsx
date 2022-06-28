import Plan from '@c/components/homepage/HargaPlan'
import { CashIcon } from '@heroicons/react/solid'


import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'


export default function Harga() {
	return (
		<>
			{/* Harga */}
		    <section className="mb-12" id="price-list">
		        <div className="container mx-auto">
		            <h1 className="flex items-center gap-2 text-3xl font-bold leading-loose text-gray-800 dark:text-white font-lora">
		                <CashIcon className="w-12 h-12" />
		                Harga Spesial
		            </h1>
		            <p className="font-light leading-loose mb-5 text-gray-600 dark:text-gray-200 font-asap">
		                Ada diskon untuk tahun 2022, ayo ambil diskonnya sekarang !
		            </p>
		            {/*<div className="grid grid-rows-1 grid-cols-1 lg:grid-cols-3 gap-5">*/}
		            <Swiper
		              modules={[Pagination]}
				      slidesPerView={1}
				      spaceBetween={30}
				      breakpoints={{
				          640: {
				            slidesPerView: 3,
				            spaceBetween: 30
				          }
				      }}
				      pagination={{
				        clickable: true,
				      }}
				    >
				    	<SwiperSlide>
		            		<Plan isType="basic" title="Basic" planIconColor="text-yellow-500" price={70} afterDicPrice={100} planBgColor="bg-green-50" planBorderColor="border-green-500"/>
				    	</SwiperSlide>
				    	<SwiperSlide>
		            		<Plan isType="premium" title="Premium" planIconColor="text-indigo-500" price={150} afterDicPrice={250} planBgColor="bg-indigo-50" planBorderColor="border-indigo-500"/>
				    	</SwiperSlide>
				    	<SwiperSlide>
		            		<Plan title="Sultan" planIconColor="text-pink-500" price={250} afterDicPrice={500} planBgColor="bg-pink-50" planBorderColor="border-pink-500"/>
				    	</SwiperSlide>
		            </Swiper>
		            {/*</div>*/}
		        </div>
		    </section>
		</>
	)
}