import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
	return (
		<>
			<Hero />
			<Services />
			<Projects />
			<Testimonials />
			<Process />
			<Contact />
		</>
	);
}
