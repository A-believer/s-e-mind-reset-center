function HomeSpecialtiesExpertise() {
  return (
		<section className='bg-[#F8FEFF] text-[#0F3857]'>
			<div className='center space-y-10 lg:py-[77px] py-14 font-amiri'>
				<div className='text-center space-y-4'>
					<h3 className='font-bold md:text-[40px] text-3xl '>
						Specialties and Expertise
					</h3>
					<p>
						The Key Service Highlights section is crucial for providing an
						at-a-glance overview of the mental health
						<br className='xl:flex hidden' /> services offered by the S and E
						Mind Reset Center
					</p>
				</div>

				<div className='flex flex-wrap items-center justify-center gap-x-4 gap-y-6 font-averia'>
					{[
						"Autism Spectrum Disorders",
						"Sleep Disorders",
						"Psychosis & Psychotic Disorders",
						"Impulse Control Disorders",
						"Personality Disorders ",
						"Behavioral Issues",
						"Personality Disorders",
						"Schizophrenia",
					].map((item) => (
						<div
							className='transition-all hover:translate-x-1 hover:translate-y-1 border border-[#0F3857] shadow-lg shadow-[#BFBFBFA3] bg-[#0F3857] rounded-lg uppercase lg:py-[18.5px] py-3.5 w-fit text-center lg:px-20 px-10 md:text-sm text-sm leading-6 text-[#F8FEFF] font-bold'
							key={item}>
							{item}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
export default HomeSpecialtiesExpertise