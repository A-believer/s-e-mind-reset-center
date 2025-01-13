import AboutCommitment from "@/components/aboutpage/about-commitment";
import AboutFounder from "@/components/aboutpage/about-founder";
import AboutHero from "@/components/aboutpage/about-hero";
import AboutMission from "@/components/aboutpage/about-mission";
import AboutValues from "@/components/aboutpage/about-values";
import AboutWhychooseus from "@/components/aboutpage/about-whychooseus";

function AboutPage() {
	return (
		<main>
			<AboutHero />
			<AboutMission />
			<AboutValues />
			<AboutCommitment />
			<AboutFounder />
			<AboutWhychooseus />
		</main>
	);
}
export default AboutPage;
