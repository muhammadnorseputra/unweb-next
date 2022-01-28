import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/solid'

interface PlanItemsProps {
	title?: string,
	children?: any,
	isPremium?: boolean
}
 
const HargaPlanItems = ({ children, title, isPremium=false }: PlanItemsProps) => {
	return (
		<>  
			<li className="flex items-center text-md font-medium text-gray-500">
					{ !isPremium ? <CheckCircleIcon className="w-6 h-6 text-green-400 mr-4" /> : <XCircleIcon className="w-6 h-6 text-red-400 mr-4" />}
		            { !isPremium ? (children ?? title) : <span className="line-through">{children ?? title }</span>} 
            </li>
		</>
	)
}

export default HargaPlanItems