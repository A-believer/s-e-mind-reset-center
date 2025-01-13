import Link from "next/link";

function ContactHero() {
	return (
		<section className='bg-[#E8F5FF]'>
			<div className='center w-full xl:pt-44 xl:pb-32 lg:pt-36 md:pt-28 md:pb-20 pt-14 text-center font-amiko'>
				<h3 className='text-black font-amiko lg:text-[56px] md:text-4xl text-3xl xl:leading-[70px] leading-[50px] -tracking-[0.5px] font-bold'>
					We’re Here to Help
				</h3>
				<p className='mt-4 mb-9 text-lg leading-7'>
					Reach out to us for inquiries, support, or to schedule an appointment
				</p>
				<Link
					target='_blank'
					href={"https://cal.com/s-e-mind-reset-center-zj5xrh"}
					className='rounded-md bg-[#60A7DC] hover:bg-black hover:text-[#60A7DC] border border-[#60A7DC] transition-all duration-500 px-6 py-[13.5px] font-inter font-bold'>
					Book An Appointment
				</Link>
			</div>
		</section>
	);
}
export default ContactHero;
