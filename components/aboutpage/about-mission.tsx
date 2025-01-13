import Image from "next/image"
import img from '@/public/images/about-mission-image.png'

function AboutMission() {
  return (
		<section className='bg-[#0F3857] font-inter text-white'>
			<div className='max-w-[1440px] w-[90%] mx-auto pt-14 lg:pb-0 pb-10 flex flex-col lg:flex-row items-center justify-between gap-x-14 gap-y-10'>
				<Image
					src={img}
					alt='mission image'
					className='max-w-[600px] w-full h-auto'
				/>
				<div className='space-y-7 max-w-[560px] w-full'>
					<h3 className='text-[32px] leading-10'>Our Mission</h3>
					<p>
						To provide compassionate, culturally competent mental health care
						that exceeds the needs of our clients. We aim to promote emotional
						well-being, strengthen resources and support systems, and encourage
						community understanding of mental health.
					</p>
				</div>
			</div>
		</section>
	);
}
export default AboutMission