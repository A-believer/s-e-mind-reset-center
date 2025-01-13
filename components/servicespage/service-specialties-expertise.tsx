function ServiceSpecialtiesExpertise() {
	return (
		<section className='bg-[#F7FEED]'>
			<div className='center space-y-10 lg:py-[77px] py-14 font-averia'>
				<div className='text-center space-y-4 text-[#033421]'>
					<h3 className='font-bold md:text-[40px] text-3xl '>
						Specialties and Expertise
					</h3>
					<p>
						The Key Service Highlights section is crucial for providing an
						at-a-glance overview of the mental health services offered by the S
						and E<br className='xl:flex hidden'/> Mind Reset Center
					</p>
				</div>

				<div className='flex flex-wrap items-center justify-center gap-x-4 gap-y-6'>
					{[
						"Autism Spectrum Disorders",
						"Sleep Disorders",
						"Psychosis & Psychotic Disorders",
						"Impulse Control Disorders",
						"Personality Disorders ",
						"Behavioral Issues",
						"Personality Disorders",
						"Schizophrenia"
					].map((item) => (
						<div
							className='transition-all hover:translate-x-1 hover:translate-y-1 border border-[#1D1F1B] shadow-lg shadow-[#BFBFBFD4] bg-[#F9FFEF] rounded-lg uppercase lg:py-3 py-2 w-fit text-center lg:px-20 px-10 md:text-sm text-xs leading-6 text-[#0A241A] font-bold'
							key={item}>
							{item}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
export default ServiceSpecialtiesExpertise;
