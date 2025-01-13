import HomeBookAnAppointment from "@/components/homepage/home-book-an-appointment";
import HomeHero from "@/components/homepage/home-hero";
import HomeServices from "@/components/homepage/home-services";
import HomeSpecialtiesExpertise from "@/components/homepage/home-specialties-expertise";
import HomeTestimonials from "@/components/homepage/home-testimonials";
import HomeWhyChooseUs from "@/components/homepage/home-whychooseus";

function HomePage() {
	return (
		<main className=''>
			<HomeHero />
			<HomeServices />
			<HomeSpecialtiesExpertise />
			<HomeWhyChooseUs />
			<HomeBookAnAppointment />
			<HomeTestimonials />
		</main>
	);
}
export default HomePage;
