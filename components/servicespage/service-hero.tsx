import Link from "next/link";
import underline from "@/public/images/hero-text-underline.png";
import Image from "next/image";

function ServiceHero() {
	return (
		<section className='w-full'>
			<div className='mx-auto max-w-[1440px] w-[90%] xl:pt-44 xl:pb-32 lg:pt-36 md:pt-28 md:pb-20 pt-14 text-center'>
				<h3 className='text-black font-amiri xl:text-[50px] text-[40px] xl:leading-[60px] leading-[50px] -tracking-[0.5px] font-bold'>
					Transforming Mental Health with
					<br className='' />
					<span className='text-[#F27207] relative max-w-[405px] w-full'>
						{" "}
						Tailored Care
						<Image
							src={underline}
							alt='avatar image'
							className='w-full absolute inset-0 xl:top-14 top-12'
						/>
					</span>
				</h3>
				<p className='mt-4 mb-9 text-lg leading-7 font-amiko -tracking-[0.5px]'>
					Discover how our expert team supports individuals and families with
					compassionate,
					<br className='xl:block hidden' /> evidence-based services.
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
export default ServiceHero;
