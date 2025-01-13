"use client";

import Link from "next/link";
import HeroWrapper from "../layout/hero-wrapper";
import Image from "next/image";
import avatar from "@/public/images/home-specialist-image.png";
import heroImg from "@/public/images/home-hero-img.png";

function HomeHero() {
	return (
		<HeroWrapper>
			<div className=' lg:ml-auto center xl:py-36 md:py-28 py-14 flex lg:flex-row flex-col items-center lg:justify-between'>
				<div className='lg:w-1/2 w-full py-10 lg:text-left text-center'>
					<h3 className='text-black font-amiko xl:text-[56px] md:text-4xl text-3xl xl:leading-[70px] leading-[50px] -tracking-[0.5px] font-bold'>
						Transform Your
						<br />
						<span className='text-[#70B301] bg-[#236C4E] px-2 rounded-lg my-2 md:text-nowrap'>
							Mental Wellness with
						</span>
						<br />
						Compassionate Care
					</h3>
					<p className='mt-4 mb-9 text-xl leading-6'>
						Take the first step toward a healthier, happier you. Access expert
						mental health
						<br className='xl:block hidden' /> services tailored to your unique
						needs
					</p>
					<div className='flex items-center md:flex-row flex-col lg:justify-start justify-center gap-2 font-bold text-base leading-5 mb-14 mx-auto w-full'>
						<Link
							href={"https://cal.com/s-e-mind-reset-center-zj5xrh"}
							className='bg-[#70B301] hover:bg-black text-black hover:text-[#70B301] transition-all duration-500 font-bold rounded-md py-3 px-4'>
							Book an Appointment
						</Link>
						<Link
							href={"/services"}
							className='text-[#246A4E] bg-[#D7DAD4] hover:bg-white hover:text-[#70B301] rounded-md py-3 px-4'>
							Explore Services
						</Link>
					</div>
					<div className='flex items-center lg:justify-start justify-center gap-x-4 font-amiri leading-6'>
						<Image src={avatar} alt='avatar image' />
						<p className='flex flex-col'>
							<span>
								Talk with a <b>specialist</b>
							</span>
							<span>(Call Us Now! 240-896-4850)</span>
						</p>
					</div>
				</div>
				<Image
					src={heroImg}
					alt='avatar image'
					className='lg:w-1/2 w-full h-auto'
				/>
			</div>
		</HeroWrapper>
	);
}
export default HomeHero;
