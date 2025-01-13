import { ChartNoAxesColumn, Mail, Zap } from 'lucide-react';

const reasons = [
	{
		id: 1,
		title: "Expert Team",
		desc: "Our specialists provide personalized, evidence-based care.",
		icon: <Mail />,
	},
	{
		id: 2,
		title: " Holistic Approach",
		desc: "We combine traditional and alternative therapies for optimal outcomes.",
		icon: <Mail />,
	},
	{
		id: 3,
		title: "Compassionate Care",
		desc: "Your well-being is our priority. We’re here to listen and support.",
		icon: <Zap />,
	},
	{
		id: 4,
		title: "Accessibility",
		desc: "We accept most major insurances and offer flexible scheduling",
		icon: <ChartNoAxesColumn /> ,
	},
];

function HomeWhyChooseUs() {
  return (
		<section className='bg-[#E8F5FF] text-[#0F3857] space-y-10 pb-20 font-averia'>
			<div className='center text-center pt-20 space-y-2'>
				<h3 className='font-bold md:text-[40px] text-3xl '>
					Why Choose S&E Mind Reset Center?
				</h3>
				<p>
					Because your mental health deserves expert care and compassionate
					support.
				</p>
			</div>

			<div className='center flex flex-wrap items-center xl:justify-between justify-center gap-x-8 gap-y-5'>
				{reasons.map((reason) => (
					<article
						key={reason.id}
						className='flex flex-col items-center text-white gap-y-3 w-[280px] h-[232px] bg-[#0F3857] rounded-[16px] pt-6 pb-8 text-center -full hover:border-[#FD7E14] border transition-all duration-700 shadow hover:shadow-2xl'>
						<div className='bg-[#FD7E14] rounded-full p-4 text-white'>
							{reason.icon}
						</div>
						<h4 className='font-bold text-xl leading-8 capitalize'>
							{reason.title}
						</h4>
						<p className='w-[90%]'>{reason.desc}</p>
					</article>
				))}
			</div>
		</section>
	);
}
export default HomeWhyChooseUs