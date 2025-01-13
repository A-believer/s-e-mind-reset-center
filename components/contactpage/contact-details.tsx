import { Mail, MapPin, Phone } from "lucide-react";

const contactDetails = [
	{
		title: "Email",
		desc: "Our friendly team is here to help.",
		icon: <Mail />,
	},
	{
		title: "Office",
		desc: "Come say hello at our office HQ.",
		icon: <MapPin />,
	},
	{
		title: "Phone",
		desc: "Mon-Fri from 8am to 5pm.",
		icon: <Phone />,
	},
];

function ContactDetails() {
	return (
		<section className=''>
			<div className='max-w-[1440px] w-[90%] mx-auto flex flex-wrap justify-between items-center lg:py-[51px] py-8'>
				{contactDetails.map((detail) => (
					<article className='mx-auto text-center' key={detail.title}>
						<div className='bg-[#246A4E] rounded-full p-[14.5px] text-white w-fit mx-auto'>
							{detail.icon}
						</div>
						<p className='text-[#246A4E] font-medium text-xl leading-8 mt-5 mb-2'>
							{detail?.title}
						</p>
						<p className='text-[#667085] font-medium text-base leading-6'>
							{detail?.desc}
						</p>
					</article>
				))}
			</div>
		</section>
	);
}
export default ContactDetails;
