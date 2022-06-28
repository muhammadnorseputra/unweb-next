
export interface KatalogItemsType {
	people: string,
	date: string,
	cover: string
}

export default function KatalogItems({people, date, cover}: KatalogItemsType) {
	return (
		<>
			<figure className="relative rounded-lg overflow-hidden group w-100">
	            <img className="object-cover object-center rounded-lg w-full h-full" src={cover} alt="01" />
	            <figcaption className="absolute bottom-5 z-10 text-center w-full">
	                <h1 className="lg:text-xl text-sm font-bold text-white text-center truncate">{ people }</h1>
	                <p className="text-gray-100">
	                    { date }
	                </p>
	            </figcaption>
	            {/* Overlay */}
	            <div className="absolute w-full h-full transition-all duration-250 bg-black opacity-50 top-0 left-0 group-hover:opacity-30"></div>
	            <a href="#" className="group">
	                <div className="absolute bg-white/90 dark:bg-slate-600/50 transition-all duration-150 top-3 right-3 text-gray-400 flex items-center justify-center space-x-3 rounded-full bg-white py-2 px-2 lg:px-3 lg:border-b-3">
	                    <span className="text-sm">
	                        Open
	                    </span>
	                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
	                    </svg>
	                </div>
	            </a>
	        </figure>
		</>
	)
}