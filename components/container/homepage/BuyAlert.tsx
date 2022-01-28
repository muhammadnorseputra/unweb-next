import { AnnotationIcon, GiftIcon } from '@heroicons/react/solid'

export default function BuyAlert() {
	return (
		<>
			{/* Alert */}
		    <section className="hidden sm:block">
		          <div className="container mx-auto my-10">
		              {/* Alert Success */} 
		              <div className="bg-gradient-to-b from-green-200 border-t border-green-300 dark:from-green-400 dark:to-slate-900 px-3 py-4 rounded-md text-lg flex justify-evenly space-x-3 items-center mx-auto">
		                  <GiftIcon className="h-16 w-16 text-white-400" />
		                  <span className="text-green-800 dark:text-white text-lg sm:text-2xl font-lora">Tunggu apalagi silahkan pesan undangan digital anda sekarang.
		                  </span>
		                  <a href="#" className="flex items-center space-x-2 rounded-md p-2 bg-white border-2 border-b-4 border-black-400 text-black font-asap text-sm">
		                      <span>Pesan disini</span>
		                      <AnnotationIcon className="w-6" />
		                  </a>
		              </div>
		              {/* End Alert Success */}
		          </div>
		      </section>
		</>
	)
}