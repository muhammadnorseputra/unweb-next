import Items from '@c/components/homepage/KategoriItems'

const KategoriList = [
	{
		"title": 'Minimalist', 
		"img": 'https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdlZGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
	},
	{
		"title": 'Loved', 
		"img": 'https://images.unsplash.com/photo-1515626553181-0f218cb03f14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHdlZGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
	},
	{
		"title": 'Simple', 
		"img": 'https://images.unsplash.com/photo-1485700281629-290c5a704409?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80'
	}
]

export default function Kategori () {
	return (
		<>
			{/* Kategori */}
		    <section className="mt-12">
		        <div className="container mx-auto mb-12 relative">
		            <h1 className="flex flex-col items-center justify-center space-y-2">
		                <span className="text-4xl font-bold leading-loose sub-masking font-lora">Kategori's</span>
		            </h1>
		            <p className="font-light leading-loose text-gray-500 dark:text-gray-200 font-asap text-center">
		                Banyak pilihan tema yang telah kami kategorikan.
		            </p>
		            <div className="grid grid-rows-1 grid-cols-2 lg:grid-cols-3 gap-8 text-center mt-12">
		            	{
		            		KategoriList.map((d, index) => {
		            			return (
		            				<Items key={d.title} title={d.title} slug={`categorys/${d.title.toLowerCase()}`} ImgSource={d.img} />
		            			)
		            		})
		            	}
		            </div>
		        </div>
		    </section>
		</>
	)
}