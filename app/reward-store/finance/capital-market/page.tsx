import CustomCard from "@/components/ui/CustomCard";
import { data } from "@/context/data";

export default function CapitalMarket() {
	return (
		<main className="flex flex-col text-gold-500 items-center justify-center">
			<div className='flex flex-col items-start justify-center gap-4'>
				<h2 className="ml-10 text-3xl font-bold">Capital Market</h2>
			</div>
			<div className='flex flex-wrap items-start justify-center gap-5 py-4'>
				{data.map((card, index) => (
					<CustomCard key={index} title={card.title} content={card.content} image={card.imageUrl} rating={3} price={card.price} />
				))}
				{data.map((card, index) => (
					<CustomCard key={index} title={card.title} content={card.content} image={card.imageUrl} rating={3} price={card.price} />
				))}
				{data.map((card, index) => (
					<CustomCard key={index} title={card.title} content={card.content} image={card.imageUrl} rating={3} price={card.price} />
				))}
			</div>
		</main>
	);
}
