
interface FlowProps {
	no: number,
	title: string,
	children?: any
}

export default function FlowItems({ no, title, children }: FlowProps) {
	
	return (
		<> 
			<div className="space-y-5 sm:border-r border-dashed border-gray-300 dark:border-slate-600">
                <div className="flex justify-center items-center">
                    <div className="inline-flex items-center justify-center text-3xl w-16 h-16 font-bold text-gray-500 drop-shadow-lg rounded-full transition-all duration-500 bg-gradient-to-b from-white to-gray-100 dark:from-slate-700 dark:to-slate-900 border border-gray-200 dark:border-slate-600">
                        { no }
                    </div>
                </div>
                <div className="text-center px-8 space-y-3">
                    <span className="font-bold text-2xl dark:text-white">{ title }</span>
                    <p className="dark:text-gray-300">
                        { children }
                    </p>
                </div>
            </div>
		</>
	)
} 