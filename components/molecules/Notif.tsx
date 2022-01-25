export default function Notif() {
    return ( 
    	<> 
    	{ /* Notif*/ }
        <div className="bg-pink-600 p-3 text-white dark:bg-pink-300 dark:text-white">
	        <div className="container mx-auto flex items-start justify-between gap-3">
	            <span className="lg:ml-2">
	                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
	                </svg>
	            </span>
	            <div className="w-full text-center font-asap">Ambil promo akhir tahun sekarang dengan diskon 80%</div>
	            <button type="button" className="p-1 border border-none hover:border-white hover:bg-gray-100 hover:text-black rounded self-center">
	                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
	                </svg>
	            </button>
	        </div>
	    </div> 
    </>
    )
}