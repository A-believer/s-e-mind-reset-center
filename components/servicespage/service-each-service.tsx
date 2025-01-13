import service_image_1 from "@/public/images/services-pae.png";
import service_image_2 from "@/public/images/services-mm.png";
import service_image_3 from "@/public/images/services-bhs.png";
import service_image_4 from "@/public/images/services-fs.png";
import service_image_5 from "@/public/images/services-sudt.png";
import service_image_6 from "@/public/images/services-cis.png";
import Image from "next/image";

function ServiceEachService() {
	const services = [
		{
			id: 1,
			image: service_image_1,
			header: "Psychiatric Assessment and Evaluation",
			subheader:
				"Get a clear understanding of your mental health with professional, personalized evaluations.",
			points: [
				"In-depth mental health evaluations tailored to your specific needs.",
				"Collaboration with you to develop an accurate diagnosis and treatment plan",
				"Assessment for mental health conditions such as anxiety, depression, PTSD, and more",
			],
		},
		{
			id: 2,
			image: service_image_2,
			header: "Medication Management",
			subheader:
				"At S&E Mind Reset Center, we offer personalized medication management to ensure you receive the most effective medications for your condition.",
			points: [
				"Medication assessment to find the right treatment for you.",
				"Ongoing monitoring of medication efficacy and any side effects",
				"Collaborative approach with your primary care provider to ensure comprehensive care",
				"Specialization in medications for conditions such as anxiety disorders, depression, PTSD, ADHD, and mood disorders",
			],
		},
		{
			id: 3,
			image: service_image_3,
			header: "Behavioral Health Support",
			subheader:
				"We provide a safe space for you to explore your emotions, triggers, and coping mechanisms while working to implement lasting positive changes.",
			points: [
				"Evidence-based therapies for treating mental health conditions such as depression, anxiety, and PTSD.",
				"Individualized care for adults, teens, and families.",
				"Cognitive Behavioral Therapy (CBT), Dialectical Behavioral Therapy (DBT), and other therapeutic approaches.",
			],
		},
		{
			id: 4,
			image: service_image_4,
			header: "Family Support and Counseling",
			subheader:
				"We work with families to build understanding, strengthen communication, and address the challenges of living with a loved one experiencing mental health issues.",
			points: [
				"Evidence-based Family therapy sessions aimed at improving communication and resolving conflicts.sed therapies for treating mental health conditions such as depression, anxiety, and PTSD.",
				"Counseling to support families navigating mental health conditions like depression, anxiety, or PTSD",
				"Guidance on providing the necessary support for a loved one with mental health issues.",
				"Skills for promoting emotional well-being and resilience in the family unit.",
			],
		},
		{
			id: 5,
			image: service_image_5,
			header: "Substance Use Disorder Treatment",
			subheader:
				"We use evidence-based techniques alongside holistic methods to help you regain control over your life, heal, and develop the skills necessary to maintain lasting recovery",
			points: [
				"Comprehensive assessments for substance use disorders (e.g., opioids, alcohol, benzodiazepines).",
				"Aftercare planning to support sustained recovery and relapse prevention.",
				"Individualized treatment plans incorporating therapy, counseling, and medication management.",
				"Holistic recovery options such as mindfulness, nutrition support, and stress management.",
			],
		},
		{
			id: 6,
			image: service_image_6,
			header: "Crisis Intervention Services",
			subheader:
				"We work with families to build understanding, strengthen communication, and address the challenges of living with a loved one experiencing mental health issues.",
			points: [
				"Expert Care: Our experienced team includes psychiatrists, therapists, and counsellors who specialize in a wide range of mental health conditions",
				"Personalized Approach: We offer individualized treatment plans tailored to your specific needs.",
				"Holistic Services: We integrate evidence-based practices with holistic approaches to ensure comprehensive mental wellness.",
				"Confidential and HIPAA-Compliant: Your privacy and confidentiality are our priority. We adhere to the highest standards of healthcare privacy and security.",
			],
		},
    ];
    

    return (
			<section className='bg-[#F9FCF3] space-y-6'>
				{services.map((service, index) => (
					<div
						key={service.id}
						className={`max-w-[1440px] w-[90%] mx-auto flex ${
							index % 2 === 0 ? "flex-col-reverse lg:flex-row-reverse" : "flex-col lg:flex-row"
						} items-center justify-between px-8 py-6 gap-10`}>
						<div className='lg:w-1/2 w-full'>
							<h3 className='text-[32px] leading-10 font-semibold'>
								{service.header}
							</h3>
							<p className='mt-2 mb-5 text-base leading-6'>
								{service.subheader}
							</p>
							<ul className='text-base leading-6 marker:text-black list-disc list-outside space-y-6 ml-10'>
								{service.points.map((point) => (
									<li key={point}>{point}</li>
								))}
							</ul>
						</div>
						<Image
							src={service.image}
							alt={service.header}
							className='lg:w-1/2 w-full'
						/>
					</div>
				))}
			</section>
		);
}
export default ServiceEachService;
