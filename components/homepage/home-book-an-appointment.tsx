"use client";

import Link from "next/link";
import HeroWrapper from "../layout/hero-wrapper";
import Image from "next/image";
import baa from "@/public/images/book-appointment-image.png";

function HomeBookAnAppointment() {
	return (
		<HeroWrapper>
			<div className=' lg:ml-auto center xl:py-36 md:py-20 py-10 flex lg:flex-row flex-col items-center lg:justify-between'>
				<div className='lg:w-1/2 w-full py-10 lg:text-left text-center'>
					<h3 className='text-black font-amiko xl:text-[56px] md:text-4xl text-3xl xl:leading-[70px] leading-[50px] -tracking-[0.5px] font-bold'>
						Take the First Step
						<br />
						Toward
						<span className='text-[#70B301] bg-[#236C4E] px-2 rounded-lg my-2 md:text-nowrap'>
							Better Mental
						</span>
						<br />
						Health
					</h3>
					<p className='mt-4 mb-9 text-xl leading-6'>
						Our dedicated team is here to support you.
						<br className='xl:block hidden' />
						Book your appointment today!
					</p>
					<Link
						href={"https://cal.com/s-e-mind-reset-center-zj5xrh"}
						className='bg-[#70B301] hover:bg-black text-black hover:text-[#70B301] transition-all duration-500 font-bold rounded-md py-3 px-4'>
						Book an Appointment
					</Link>
				</div>
				<Image
					src={baa}
					alt='avatar image'
					className='lg:w-1/2 w-full h-auto'
				/>
			</div>
		</HeroWrapper>
	);
}
export default HomeBookAnAppointment;
