import Image from "next/image";
import img from "@/public/images/faq-img.png";
import Link from "next/link";
// import {
// 	Accordion,
// 	AccordionContent,
// 	AccordionItem,
// 	AccordionTrigger,
// } from "../ui/accordion";

// const faqs = [
// 	{
// 		id: 1,
// 		q: "Is there a free trial available?",
// 		a: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
// 	},
// ];
function ServicesFaq() {
	return (
		<section className='bg-white w-full lg:py-20 py-16 space-y-8'>
			{/* <div className='lg:max-w-[768px] lg:w-full w-[90%] mx-auto text-center'>
				<h3>Frequently asked questions</h3>
				<p className="mt-5 mb-14">Everything you need to know about the product and billing.</p>
				<Accordion type='single' collapsible className='w-full'>
					{faqs.map((item) => (
						<AccordionItem value='item-1' key={item.id} className="text-left ">
                            <AccordionTrigger>{ item.q}</AccordionTrigger>
							<AccordionContent>
								{item.a}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div> */}
			<div className='max-w-[1440px] w-[90%] mx-auto bg-[#2E3D37] py-8 flex flex-col items-center space-y-8 font-inter'>
				<Image src={img} alt='' />
				<div className='space-y-2 text-center text-white'>
					<p className='text-xl leading-8 font-medium'>Still have questions?</p>
					<p className='text-lg leading-7'>
						Can’t find the answer you’re looking for? Please chat to our
						friendly team.
					</p>
				</div>

				<Link
					href={""}
					className='rounded-md bg-[#70B301] hover:bg-black text-black hover:text-[#70B301] transition-all duration-500 font-bold px-9 py-2.5'>
					Get Started
				</Link>
			</div>
		</section>
	);
}
export default ServicesFaq;
