import Image from 'next/image'

interface TestiItemProps {
    name: string,
    satuKata: string,
    children?: any
}

export default function TestiItems({ name, satuKata, children }: TestiItemProps) {
	
	return (
		<> 
			<div className="bg-white dark:bg-slate-700 border-b dark:border-t border-gray-200 dark:border-slate-600 rounded-lg p-6">
                <div className="flex items-center space-x-6 mb-4">
                <span className="h-16 w-16 object-cover object-center rounded-full overflow-hidden">
                    <Image src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo" width="150" height="150" layout="responsive" objectFit="cover" />
                </span>
                    <div>
                        <p className="text-xl text-gray-700 dark:text-gray-900 font-normal mb-1">{ name }</p>
                        <p className="text-base text-pink-600 font-normal">{ satuKata }</p>
                    </div>
                </div>
                <div>
                    <p className="text-gray-400 leading-loose font-normal text-base">
                        { children }
                    </p>
                </div>
            </div>
		</>
	)
} 