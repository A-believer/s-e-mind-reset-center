import Image from "next/image";
import img from '@/public/images/about-founder-image.png'
function AboutFounder() {
  return (
		<section className='bg-white font-inter text-[#2B2B3D]'>
			<div className='max-w-[1440px] w-[90%] mx-auto lg:py-14 py-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-x-16 gap-y-10'>
				<Image
					src={img}
					alt='mission image'
					className='md:max-w-[532px] w-full h-auto'
				/>
				<div className='space-y-7 max-w-[600px] w-full '>
					<h3 className='text-[36px] font-semibold leading-[44px]'>
						Our Founders
					</h3>
					<p className='text-xl leading-10'>
						S&E Mind Reset Center was founded by Dr. Ekwe and Mrs. Susan, two
						passionate advocates for mental health. Together, they envisioned a
						place where individuals and families could find the help they need
						to reset, rebuild, and thrive.
					</p>
				</div>
			</div>
		</section>
	);
}
export default AboutFounder