import Image from "next/image";
import img from "@/public/images/about-whychooseus-image.png";

function AboutWhychooseus() {
	return (
		<section className='bg-[#2E3D37] text-white pt-16 font-inter'>
			<p className='w-full text-center text-[40px] leading-[56px] font-medium font-poppins'>
				Why Choose Us?
			</p>
			<div className='max-w-[1440px] w-[95%] ml-auto flex items-center justify-between'>
				<div className='max-w-[640px] w-full space-y-12'>
					<div className='space-y-2'>
						<p className='text-xl leading-8 font-medium'>
							Expertise You Can Trust
						</p>
						<p className='text-base leading-6'>
							With a team of skilled professionals specializing in psychiatric
							evaluations, medication management, and behavioral health support,
							we’re equipped to address a wide range of mental health needs.
							From anxiety and depression to complex conditions like
							schizophrenia and psychosis, our experts deliver tailored care
							that works.
						</p>
					</div>

					<div className='space-y-2'>
						<p className='text-xl leading-8 font-medium'>
							Evidence-Based, Holistic Care
						</p>
						<p className='text-base leading-6'>
							We combine cutting-edge, science-backed methods with alternative
							therapeutic approaches to provide comprehensive, individualized
							care. Your well-being is at the heart of everything we do.
						</p>
					</div>

					<div className='space-y-2'>
						<p className='text-xl leading-8 font-medium'>
							Compassionate, Patient-Centred Approach
						</p>
						<p className='text-base leading-6'>
							Every individual’s journey is unique, and so is our care. We
							listen, collaborate, and tailor treatment plans that meet your
							personal goals, ensuring you feel supported every step of the way.
						</p>
					</div>
				</div>
				<Image
					src={img}
					alt='why choose us'
					className='max-w-[617px] w-full h-auto'
				/>
			</div>
		</section>
	);
}
export default AboutWhychooseus;
