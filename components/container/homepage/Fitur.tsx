import Image from 'next/image'
import Item from '@c/components/homepage/FiturItems'

export default function Fitur() {
	return (
		<>
			{/* Fitur */}
		    <section className="mb-12 py-10">
		        <div className="container mx-auto">
		            <div className="bg-white dark:bg-slate-700/90 dark:border dark:border-slate-600 rounded-2xl flex flex-col sm:flex-row justify-between xl:justify-start items-center gap-2 overflow-hidden">
		                <div className="relative xl:order-last p-5 sm:pr-10">
		                    <h1 className="text-4xl font-bold font-black font-lora mb-5 sub-masking flex">
		                        Mengapa Memilih Kami ?
		                    </h1>
		                    <ul className="space-y-3 z-10">
		                    	<Item title="Bikin undangan bisa dimana aja dan kapan saja" />
		                    	<Item title="Bagikan undangan tanpa batas" />
		                    	<Item title="Bagikan undangan tanpa batas" />
		                    	<Item title="Gratis sub domain dengan nama" />
		                    	<Item title="Unlimited nama tamu" />
		                    	<Item title="Bisa Pakai Photo atau Video" />
		                    	<Item title="Tersedia banyak pilihan tema yang dapat dipilih" />
		                    	<Item title="Proses pembuatan lebih cepat" />
		                    	<Item title="Gratis Konsultasi sampai proses selesai." />
		                    	<Item title="Bisa dilakukan revisi" />
		                    	<Item title="Harga Terjangkau Dan masih banyak lagi ..." />
		                    </ul>
		                </div>
		                <div className="hidden md:block w-auto h-auto md:w-5/12">
		                    <Image 
		                    	src="https://images.unsplash.com/photo-1632396690014-cf7a0a2f3bbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdlZGRpbmclMjBjYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
		                    	alt="cover" 
		                    	layout="responsive"
		                    	objectFit="cover"
		                    	width="500"
		                    	height="600"
		                    />
		                </div>
		            </div>
		        </div>
		    </section>
		</>
	)

}