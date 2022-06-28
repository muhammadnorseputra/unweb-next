import { useState } from 'react'
import { XIcon, BellIcon } from '@heroicons/react/solid'

export interface NotifProps {
	isClose?: boolean
}

export default function Notif({ isClose=false }: NotifProps) {
	const [close, setClose] = useState(false)

	const cloneNotif = () => {
		setClose(true)
	}

    return ( 
    	<> 
    	{ /* Notif*/ }
    	{ isClose === close ? (
		        <div className="bg-pink-600 p-3 text-white dark:bg-gray-100 dark:text-slate-700">
			        <div className="container mx-auto flex items-start justify-between gap-3">
			            <span className="lg:ml-2">
			                <BellIcon className="w-6 h-6" />
			            </span>
			            <div className="w-full text-center font-asap">Ambil promo akhir tahun sekarang dengan diskon 80%</div>
			            <button onClick={cloneNotif} type="button" className="p-1 border border-none hover:border-white hover:bg-gray-200 hover:text-black rounded self-center">
			                <XIcon className="w-5 h-5" />
			            </button>
			        </div>
			    </div> 
    		) : '' }
    </>
    )
}