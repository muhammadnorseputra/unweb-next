import { BadgeCheckIcon } from '@heroicons/react/solid'

interface FiturProps {
	title: any
}

export default function FiturItems(props: FiturProps) {

	const { title } = props

	return (
		<> 
			<li className="flex items-center gap-3 group">
                <div>
                    <BadgeCheckIcon className="w-8 h-8 text-green-400 group-hover:text-green-300" />
                </div>
                <div className="normal-case font-asap leading-relaxed tracking-wider text-gray-600 dark:text-gray-300">
                    {title}
                </div>
            </li>
		</>
	)
} 