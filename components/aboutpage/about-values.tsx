import Image from "next/image";
import img from "@/public/images/about-values-image.png";
import { Users } from "lucide-react";



function AboutValues() {
  return (
		<section className='bg-white font-poppins text-black'>
			<div className='max-w-[1440px] w-[90%] mx-auto lg:py-14 py-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-x-20 gap-y-10'>
				<Image src={img} alt='mission image' className='max-w-[383px] w-full h-auto' />
				<div className='space-y-7 w-full'>
					<p>Our values</p>
					<h3 className='text-[48px] leading-[64px]'>
						A world where mental health is prioritized,
					</h3>
					<p className='text-[#9A98A9]'>
						we empower individuals to transform their lives positively and
						promote a compassionate, stigma-free society.
					</p>
					<ul className='capitalize w-full grid xl:grid-cols-2 gap-5'>
						{[
							"Comprehensive psychiatric evaluations.",
							"Support for families and caregivers.",
							"Ongoing medication management",
							"Treatment for anxiety, and more",
						].map((item) => (
							<li
								className='bg-[#F4F4F4] xl:w-full w-fit flex items-center gap-x-5 rounded-[14px] sm:py-5 py-2 sm:px-7 px-2'
								key={item}>
								<span className='bg-white sm:w-12 w-10 sm:h-12 h-10 rounded-full flex justify-center items-center'>
									<Users className='text-[#246A4E]' size={20} />
								</span>
								<span className='text-[#57575F]'>{item}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
export default AboutValues