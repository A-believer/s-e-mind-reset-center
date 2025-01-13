import ContactDetails from "@/components/contactpage/contact-details";
import ContactForm from "@/components/contactpage/contact-form";
import ContactHero from "@/components/contactpage/contact-hero";

function ContactPage() {
	return (
		<main>
			<ContactHero />
			<ContactDetails />
			<ContactForm />
		</main>
	);
}
export default ContactPage;
