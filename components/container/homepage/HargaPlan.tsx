import Link from 'next/link'
import { GiftIcon, ArrowNarrowRightIcon } from '@heroicons/react/solid'
import Items from '@c/components/homepage/HargaPlanItems'

interface PlanProps {
	title: string,
	planIconColor?: string,
	planBorderColor?: string,
	planBgColor?: string,
	price: number,
	afterDicPrice: any,
	isType?: string,
}

const HargaPlan = (props: PlanProps) => {
	let { title, 
			planIconColor="text-gray-800",
			planBorderColor="border-gray-800",
			planBgColor="bg-gray-50",
			price,
			afterDicPrice, 
			isType,
		} = props

	// Akses Items
	let itemTitle = '-';

	if(isType === 'basic') {
		itemTitle = 'Akses Selama 1 Bulan'
	} else if(isType === 'premium') {
		itemTitle = 'Akses Selama 3 Bulan'
	} else {
		itemTitle = 'Akses Selama 4 Bulan'
	}

	// Video Limited
	let itemVideo = '-';

	if(isType === 'basic') {
		itemVideo = 'Maks 1 Galeri Video (jika ada)'
	} else if(isType === 'premium') {
		itemVideo = 'UNLIMITED Galeri Video'
	} else {
		itemVideo = 'UNLIMITED Galeri Video'
	}

	return (
		<>  
			<div className="relative flex flex-col justify-between p-8 lg:p-6 xl:p-8 rounded-2xl">
	            <div className={`absolute inset-0 w-full h-full transform translate-x-2 translate-y-2 ${ planBgColor } dark:${ planBgColor }/10 rounded-2xl`}></div>
	            <div className={`absolute inset-0 w-full h-full border-2 border-b-4 dark:${ planBorderColor } rounded-2xl ${ planBorderColor }`}></div>
	            <div className={`relative flex pb-5 space-x-5 border-b ${ planBorderColor }  lg:space-x-3 xl:space-x-5`}>
	            	<GiftIcon className={`h-16 w-16 ${ planIconColor }`} />
	                <div className="relative flex flex-col items-start">
	                    <h3 className="text-xl font-bold dark:text-white">{ title }</h3>
	                    <p className="tracking-tight text-gray-500">
	                        <span className="text-sm transform inline-block -translate-y-2.5 relative mr-2">Rp</span>
	                        <span className="text-3xl font-bold text-gray-800 dark:text-white">{ price } K</span>
	                        <span className="text-sm -translate-y-0.5 inline-block transform">/ <b className="line-through">{ afterDicPrice } K</b></span>
	                    </p>
	                </div>
	            </div>
	            <ul className="relative py-12 space-y-3 font-asap">
	            	<Items>
	            		<span>Free Subdomain<code className="px-1 bg-slate-800 text-red-300 rounded select-text">.unweb.id</code></span>
	                </Items>
	                <Items title={itemTitle} />
	                <Items title="UNLIMITED Nama Tamu"/>
	                <Items title="UNLIMITED Sebar Undangan"/>
	                <Items title="UNLIMITED Ucapan Via Website"/>
	                <Items title="UNLIMITED Galeri Foto"/>
	                <Items title={itemVideo} />
	                <Items title="Timer Hitung Mundur"/>
	                <Items title="Qoutes"/>
	                <Items title="Peta Navigasi"/>
	                <Items title="Penerapan Protokol Kesehatan"/>
	                {
	                	isType === 'basic' ? ( 
	                		<>
				                <Items title="RSVP (Konfirmasi Kehadiran)" isPremium={true}/>
				                <Items title="Loves Story" isPremium={true}/>
				                <Items title="Google Remainder" isPremium={true}/>
				                <Items title="Amplop Online" isPremium={true}/>
				                <Items title="Live Streaming" isPremium={true}/>
			                </>
	                	) : isType === 'premium' ?  (
	                		<>
				                <Items title="RSVP (Konfirmasi Kehadiran)"/>
				                <Items title="Loves Story"/>
				                <Items title="Google Remainder" isPremium={true}/>
				                <Items title="Amplop Online" isPremium={true}/>
				                <Items title="Live Streaming" isPremium={true}/>
			                </>
	                	) : (
	                		<>
				                <Items title="RSVP (Konfirmasi Kehadiran)"/>
				                <Items title="Loves Story"/>
				                <Items title="Google Remainder"/>
				                <Items title="Amplop Online"/>
				                <Items title="Live Streaming"/>
			                </>
	                	)
	            	}
	            </ul>
	            <Link href="#">
	            <a className="relative flex items-center justify-center w-full px-5 py-5 text-lg font-medium text-white rounded-xl group">
	                <span className="w-full h-full absolute inset-0 transform translate-y-1.5 translate-x-1.5 group-hover:translate-y-0 group-hover:translate-x-0 transition-all ease-out duration-200 rounded-xl bg-green-500"></span>
	                <span className="absolute inset-0 w-full h-full border-2 border-gray-900 rounded-xl"></span>
	                <span className="relative">Pesan Sekarang</span>
	                <ArrowNarrowRightIcon className="w-5 h-5 ml-2 transition-all duration-200 ease-out transform group-hover:translate-x-1" />
	            </a>
	            </Link>
	        </div>
		</>
	)
}

export default HargaPlan