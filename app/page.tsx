import Image from "next/image";
import Link from "next/link";
import homeData from "../data/home/page.json";

export default function Home() {
	const { hero, sections } = homeData;

	return (
		<main className='max-w-5xl mx-auto px-4 py-8 text-white'>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-start'>
				<div className='flex justify-center md:justify-start'>
					<Image
						src={hero.avatarSrc}
						alt={hero.avatarAlt}
						width={200}
						height={200}
						className='rounded-lg object-cover w-full max-w-[200px]'
					/>
				</div>

				<div className='md:col-span-2 flex flex-col justify-center'>
					<p className='text-lg mb-2'>{hero.greeting}</p>
					<h1 className='text-4xl font-bold mb-4'>{hero.name}</h1>
					<p className='text-zinc-400 mb-8 leading-relaxed'>
						{hero.description}
					</p>

					<div className='flex flex-wrap gap-4'>
						{hero.ctaButtons.map((button: any) => (
							<Link
								key={button.href}
								href={button.href}
								className={button.className}>
								{button.text}
							</Link>
						))}
					</div>
				</div>
			</div>

			{sections.map((section: any) => (
				<section key={section.title}>
					<h2 className='text-2xl font-bold mb-6'>
						{section.title}
					</h2>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
						{section.cards.map((card: any) => (
							<div key={card.title} className='bg-zinc-800 p-6 rounded-xl'>
								<div className='flex justify-between items-start mb-4'>
									<h3 className='text-lg font-semibold'>
										{card.title}
									</h3>
									<span className='text-2xl'>{card.icon}</span>
								</div>
								<p className='text-zinc-400 leading-relaxed'>
									{card.description}
								</p>
							</div>
						))}
					</div>
				</section>
			))}
		</main>
	);
}
