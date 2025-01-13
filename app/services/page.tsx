import ServiceEachService from "@/components/servicespage/service-each-service";
import ServiceHero from "@/components/servicespage/service-hero";
import ServiceSpecialtiesExpertise from "@/components/servicespage/service-specialties-expertise";
import ServicesFaq from "@/components/servicespage/services-faq";

function ServicePage() {
	return (
		<main>
			<ServiceHero />
			<ServiceSpecialtiesExpertise />
			<ServiceEachService />
			<ServicesFaq/>
		</main>
	);
}
export default ServicePage;
