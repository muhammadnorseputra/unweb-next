import Item from '@c/components/homepage/FlowItems'

export default function Flow () {
	return (
		<>
			{/* Orders */}
		    <section>
		        <div className="container mx-auto">
		            <div className="bg-gradient-to-b from-white to-sky-50 dark:border-t dark:border-slate-600 dark:from-slate-700 dark:to-slate-900 h-auto rounded-2xl p-5">
		                <div className="grid grid-flow-row sm:grid-rows-2 sm:grid-cols-3 gap-y-10 font-asap">
		                	<Item no={1} title="Nama Domain">
		                		Bingung pilih nama domain? pake namamu dan pasangan aja kayak gini.
                                <br className="mb-3" />
                                <code className="bg-red-100 dark:bg-slate-800 rounded-lg p-2 text-sm">romeo-juliet.unweb.id</code>
		                	</Item>
		                	<Item no={2} title="Layout & Style">
		                		Pilih paket theme atau bisa custom desain chat ke wa
		                        <br className="mb-3" />
		                        <a href="#" className="border border-red-300 bg-red-100 dark:bg-slate-800 dark:border-slate-600 hover:bg-red-50 rounded-lg p-2 text-sm">Lihat Katalog</a>
		                	</Item>
		                	<Item no={3} title="Isi Form / Blanko">
		                		Isi nama mempelai dan info lainya di form yang sudah kami sediakan secara online.
		                	</Item>
		                	<Item no={4} title="Upload Foto">
		                		Kasih hastag # di foto IG fotonya langsung masuk web.
		                	</Item>
		                	<Item no={5} title="Input Nama Tamu">
		                		Tambahkan juga nama tamu yang akan kamu undang tanpa batas.
		                	</Item>
		                	<Item no={6} title="Udah Beres">
		                		Nah tingal nungu aja nih kita siapin smua yang udah di request tadi.
		                	</Item>
		                </div>
		            </div>
		        </div>
		    </section>
		</>
	)
}