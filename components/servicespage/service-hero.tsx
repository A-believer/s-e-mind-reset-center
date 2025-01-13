import Link from "next/link";
import HeroWrapper from "../layout/hero-wrapper";

function ServiceHero() {
	return (
		<HeroWrapper>
			<div className='w-full xl:pt-44 xl:pb-32 md:pt-28 md:pb-20 pt-14 text-center'>
				<h3 className='text-black font-amiko xl:text-[56px] md:text-4xl text-3xl xl:leading-[70px] leading-[50px] -tracking-[0.5px] font-bold'>
					Transforming Mental Health with
					<br />
					Tailored Care
				</h3>
				<p className='mt-4 mb-9 text-xl leading-6'>
					Discover how our expert team supports individuals and families with
					compassionate,
					<br className='xl:block hidden' /> evidence-based services.
				</p>
				<Link
					href={"https://cal.com"}
					className='bg-[#246A4E] text-[#D7DAD4] font-bold rounded-md py-[12.5px] px-14 hover:bg-[#0e3525] transition-all duration-500'>
					Book An Appointment
				</Link>
			</div>
		</HeroWrapper>
	);
}
export default ServiceHero;
