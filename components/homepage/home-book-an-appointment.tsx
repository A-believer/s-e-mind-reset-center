"use client";

import Link from "next/link";
import backgroundImage from "@/public/images/book-appointment.png";
import Image from "next/image";
import underline from "@/public/images/hero-text-underline.png";

function HomeBookAnAppointment() {
	return (
		<section
			style={{
				backgroundImage: `url(${backgroundImage.src})`,
				backgroundPosition: "center top",
			}}
			className='bg-no-repeat bg-cover'>
			<div className='bg-black/70 lg:h-[50vh] h-[80vh] '>
				<div className='text-white w-[90%] text-center mx-auto font-amiri lg:py-24 py-32'>
					<h3 className=' font-amiko xl:text-[50px] text-4xl xl:leading-[53px] leading-10 -tracking-[0.5px] font-bold'>
						Take the First Step Toward Better <br />
						<span className='relative text-[#F27207]'>
							{" "}
							Mental Health
							<Image
								src={underline}
								alt='avatar image'
								className='w-full absolute inset-0 xl:top-12 sm:top-10 top-8'
							/>
						</span>
					</h3>
					<p className='py-10 text-xl leading-6 font-semibold'>
						Our dedicated team is here to support you. Book your appointment
						today!
					</p>
					<Link
						href={"https://cal.com/s-e-mind-reset-center-zj5xrh"}
						className='font-inter rounded-md text-[#1E201F] font-bold text-base leading-5 bg-[#60A7DC] hover:bg-black hover:text-[#60A7DC] border border-[#60A7DC] transition-all duration-500 px-6 py-[13.5px]'>
						Book an Appointment
					</Link>
				</div>
			</div>
		</section>
	);
}
export default HomeBookAnAppointment;
