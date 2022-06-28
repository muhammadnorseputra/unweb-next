import { HashtagIcon } from '@heroicons/react/solid'
import TestiItem from '@c/components/homepage/TestiItems'

export default function Testi() {
	return (
		<>
			{/* Testimonial */}
		    <section id="testimonials">
		        <div className="container mx-auto">
		            <h1 className="flex flex-col items-center justify-center gap-2 text-3xl font-bold leading-loose sub-masking font-lora">
		                <HashtagIcon className="text-gray-600 h-24 w-24" />
		                Testimonial's
		            </h1>
		            <p className="text-center font-light leading-loose mb-10 text-gray-600 dark:text-gray-200 font-asap">
		                Apa kata mereka tentang unweb.id
		            </p>
		            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
		                <TestiItem name="Putra" satuKata="Sangat Baik">
		                	Lorem Lorem LoremLorem Lorem Lorem Lorem
		                </TestiItem>
		                <TestiItem name="Aqdas" satuKata="Pelayanan Baik">
		                	Pelayanan sangat baik
		                </TestiItem>
		            </div>
		        </div>
		    </section>
		</>
	)
}