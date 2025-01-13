import Image from "next/image";
import img from '@/public/images/about-commitment-image.png'
function AboutCommitment() {
	return (
		<section className='bg-[#E8F5FF] font-inter text-black'>
			<div className='max-w-[1440px] w-[90%] mx-auto lg:py-14 py-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-x-16 gap-y-10'>
				<div className='space-y-7 max-w-[600px] w-full'>
					<h3 className='text-[36px] font-semibold leading-[44px]'>
						Our Commitment to Accessibility and Inclusivity
					</h3>
					<p className='text-base leading-8'>
						We strive to create an inclusive space for individuals from all
						walks of life. Our services are accessible, culturally sensitive,
						and designed to meet the unique needs of diverse populations.
						<br />
						<br />
						We also accept most major insurance providers, making quality mental
						health care more accessible to everyone.
					</p>
				</div>
				<Image
					src={img}
					alt='mission image'
					className='md:max-w-[563px] w-full h-auto'
				/>
			</div>
		</section>
	);
}
export default AboutCommitment;
