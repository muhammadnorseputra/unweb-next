import { DuplicateIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import Image from 'next/image'

interface KategoriProps {
	title?: string,
	slug?: string,
	image?: any,
}

export default function KategoriItems(props: KategoriProps) {

	const { title="Uncategory", slug="all", image } = props

	return (
		<> 	
			<Link href={slug}>
				<a className="hover:-translate-y-2 overflow-hidden">
	                <Image src={image} width="300" height="210" layout="responsive" className="rounded-xl"/>
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