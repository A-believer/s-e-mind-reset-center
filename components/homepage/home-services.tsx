import backgroundImage from "@/public/images/home-services.png";
import icon1 from "@/public/icons/services-1.png";
import icon2 from "@/public/icons/services-2.png";
import icon3 from "@/public/icons/services-3.png";
import icon4 from "@/public/icons/services-4.png";
import icon5 from "@/public/icons/services-5.png";
import icon6 from "@/public/icons/services-6.png";
import Image from "next/image";

const services = [
	{
		id: 1,
		title: "Psychiatric Assessment and Evaluation",
		desc: "Gain a deeper understanding of your mental health with tailored evaluations",
		icon: icon1,
	},
	{
		id: 2,
		title: "Medication Management",
		desc: "Personalised plans to address conditions like anxiety, depression, PTSD, and more.",
		icon: icon2,
	},
	{
		id: 3,
		title: "Behavioral Health Support",
		desc: "Expertise in managing conditions like schizophrenia, psychosis, and personality disorders",
		icon: icon3,
	},
	{
		id: 4,
		title: "family Support and Counselling",
		desc: "Empower families to navigate challenges with compassion and understanding",
		icon: icon4,
	},
	{
		id: 5,
		title: "Substance Use Disorder Treatment",
		desc: "Holistic care to help individuals overcome addiction and rebuild their lives.",
		icon: icon5,
	},
	{
		id: 6,
		title: "Crisis Intervention Services",
		desc: "Immediate, compassionate support during mental health emergencies to help stabilize and guide you toward recovery",
		icon: icon6,
	},
];

function HomeServices() {
	return (
		<section className='w-full bg-[#2E3D37] lg:py-28 py-20 font-averia'>
			<div
				style={{
					backgroundImage: `url(${backgroundImage.src})`,
					backgroundPosition: "center bottom",
				}}
				className='bg-no-repeat bg-contain h-full '>
				<div className='text-center space-y-4 text-white pb-[71px]'>
					<h3 className='font-bold text-[40px]'>Our Services at a Glance</h3>
					<p>
						From psychiatric evaluations to ongoing support, we’re here to help
						you thrive
					</p>
				</div>
				<div className='center flex gap-5 flex-wrap justify-center'>
					{services.map((service) => (
						<article
							key={service.id}
							className='flex flex-col items-center gap-y-6 lg:w-[390px] w-[300px] bg-[#F3F6EF] rounded-[22px] pt-6 pb-8 text-center lg:h-[280px] md:h-[380px] h-full'>
							<Image src={service.icon} alt={service.title} />
							<h4 className='font-bold text-xl leading-8 capitalize w-[70%]'>
								{service.title}
							</h4>
							<p className='w-[80%]'>{service.desc}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
export default HomeServices;
