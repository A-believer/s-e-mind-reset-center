"use client";

import Link from "next/link";
import Image from "next/image";
import avatar from "@/public/images/home-specialist-image.png";
import heroImg from "@/public/images/home-hero-img.png";
import underline from "@/public/images/hero-text-underline.png";

function HomeHero() {
	return (
		<section className=' lg:mr-0 mx-auto max-w-[1440px] w-[95%] xl:py-36 lg:py-28 md:py-14 py-8 flex lg:flex-row flex-col items-center lg:justify-between'>
			<div className=' w-auto py-10 lg:text-left text-center font-amiri'>
				<h3 className='text-black xl:text-[60px] md:text-4xl text-3xl xl:leading-[67px] md:leading-[44px] leading-9 tracking-[-0.5px] font-bold'>
					Transform Your
					<br />
					<span className='text-[#F27207] relative'>
						Mental Wellness{" "}
						<Image
							src={underline}
							alt='avatar image'
							className='w-full absolute inset-0 xl:top-16 sm:top-10 top-8'
						/>
					</span>
					with <br className='lg:block hidden' />
					Compassionate Care
				</h3>
				<p className='mt-4 mb-9 lg:text-xl text-base lg:leading-6 leading-5 text-[#1F1F1E]'>
					Take the first step toward a healthier, happier you. Access expert
					<br className='xl:block hidden' />
					mental health services tailored to your unique needs
				</p>
				<div className=' text-[#1E201F] flex items-center md:flex-row flex-col lg:justify-start justify-center gap-2 font-bold text-base leading-5 xl:mb-14 mb-10 mx-auto w-full font-inter'>
					<Link 
						href={"https://cal.com/s-e-mind-reset-center-zj5xrh"}
						className='rounded-md bg-[#60A7DC] hover:bg-black hover:text-[#60A7DC] border border-[#60A7DC] transition-all duration-500 px-6 py-[13.5px]'>
						Book an Appointment
					</Link>
					<Link
						href={"/services"}
						className='hover:text-[#1E201F] hover:bg-[#60A7DC] border border-[#60A7DC] rounded-md transition-all duration-500 px-[21.5px] py-[13.5px]'>
						Explore Services
					</Link>
				</div>
				<div className='flex items-center lg:justify-start justify-center gap-x-4 font-amiri leading-6'>
					<Image src={avatar} alt='avatar image' />
					<p className='flex flex-col'>
						<span>
							Talk with a <b className='text-[#693103]'>specialist</b>
						</span>
						<span>
							(Call Us Now! <b className='text-[#693103]'>240-896-4850</b>)
						</span>
					</p>
				</div>
			</div>
			<Image
				src={heroImg}
				alt='avatar image'
				className='max-w-[800px] w-full h-auto'
			/>
		</section>
	);
}
export default HomeHero;
