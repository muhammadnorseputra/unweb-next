import { ChatAltIcon } from '@heroicons/react/solid'

export default function ButtonContact() {
	return(
		<>
			{/* Contact */}
		    <button type="button" className="fixed w-14 h-14 p-2 transition-all duration-300 bg-gradient-to-br from-gray-200 to-white rounded-full flex items-center justify-center drop-shadow-md z-50 bottom-5 right-5 hover:from-white hover:to-gray-200 hover:-translate-y-1">
		    <ChatAltIcon className="h-8 w-8 text-green-500"/>
		        <span className="inline-flex h-2 w-2 absolute top-1 right-1">
		            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
		            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
		        </span>
		    </button>
		</>
		)	
}