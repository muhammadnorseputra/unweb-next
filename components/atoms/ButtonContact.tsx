export default function ButtonContact() {
	return(
		<>
			{/* Contact */}
		    <button type="button" className="fixed w-14 h-14 p-2 transition-all duration-300 bg-gradient-to-br from-gray-200 to-white rounded-full flex items-center justify-center drop-shadow-md z-50 bottom-5 right-5 hover:from-white hover:to-gray-200 hover:-translate-y-1">
		        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" viewBox="0 0 20 20" fill="currentColor">
		          <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
		        </svg>
		        <span className="inline-flex h-2 w-2 absolute top-1 right-1">
		            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
		            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
		        </span>
		    </button>
		</>
		)	
}