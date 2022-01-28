import { DuplicateIcon } from '@heroicons/react/solid'
import Link from 'next/link'

interface KategoriProps {
	title?: string,
	slug?: string,
	ImgSource?: any,
}

export default function KategoriItems(props: KategoriProps) {

	const { title="Uncategory", slug="all", ImgSource } = props

	return (
		<> 	
			<Link href={slug}>
				<a className="rounded-xl transition duration-300 border-2 border-b-4 border-white hover:-translate-y-2 hover:shadow-xl dark:border-slate-600 dark:hover:drop-shadow-none bg-white dark:bg-slate-700 overflow-hidden">
	                <div className={`h-40 sm:h-52 bg-cover bg-center bg-[url('${ ImgSource }')]`}></div>
	                <div className="flex flex-col justify-center items-center space-y-4 pb-8">
	                    <span className="p-3 bg-white dark:bg-slate-700 rounded-full drop-shadow-sm -mt-8 inline text-gray-200">
	                        <DuplicateIcon className="h-10 w-10" />
	                    </span>
	                    <p className="font-extrabold font-lora text-2xl dark:text-white">{ title }</p>
	                </div>
	            </a>
            </Link>
		</>
	)
} 