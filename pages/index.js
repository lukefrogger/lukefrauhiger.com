import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import PageSection from "../components/PageSection";
import Project from "../components/Project";
import portrait from "../public/assets/portrait.png";
import fetchForms from "../public/assets/fetchforms-logo.png";
import churchReserve from "../public/assets/churchReserve-logo.png";
import klonCalendar from "../public/assets/klon-logo.png";
import ContactForm from "../components/forms/ContactForm";

export default function Home() {
	const pageMeta = {
		title: "Luke Frauhiger | Developer, Entrepreneur, Indie developer",
		description:
			"Welcome! I'm Luke, an front-end developer, serverless developer, and founder who loves to build and design new things on the web.",
	};
	return (
		<Layout pageMeta={pageMeta}>
			<div className="pb-20 flex flex-col items-center">
				<div className="w-48 relative">
					<Image src={portrait} alt="luke frauhiger" className="border border-white rounded-full" />
				</div>
				<h1 className="mt-12 text-5xl tracking-tight font-extrabold sm:text-6xl md:text-7xl tracking-normal">
					Hey, I'm Luke
				</h1>
				<h3 className="mt-5 font-light text-white sm:text-3xl md:mt-5 md:text-4xl lg:mx-0 text-center">
					I bring ideas to life with web technology.
				</h3>
				<p className="mt-4 text-highlight text-2xl lg:mx-0 text-center">Full stack developer + Entrepreneur</p>
			</div>
			<PageSection title="About me">
				<p className="mt-2">
					I’ve been building things on the web since 2013. I’ve built everything from APIs to static websites
					to data integrations. Right now, you can find working as a freelance contractor while building my
					own SaaS projects and businesses. If you’d like to work with me -{" "}
					<Link href="#contact-me">
						<a className="text-highlight underline decoration-dotted underline-offset-2">let’s talk!</a>
					</Link>
				</p>
			</PageSection>
			<PageSection title="Writing">
				<Link href="https://medium.com/swlh/full-stack-development-starter-svelte-and-express-831aefee41c0">
					<a target="_blank" className="text-2xl text-highlight hover:underline cursor-pointer">
						Full Stack Starter - Svelte and Express
					</a>
				</Link>
				<p className="mt-2">
					Get started with a full-stack app with this tutorial about how to serve a Svelte app with Node.js
					and Express. We'll walk through all the steps starting with creating a new Svelte app and finishing
					with creating a get endpoint and getting data from the GIPHY API.
				</p>
			</PageSection>
			<PageSection title="Recent projects">
				<div className="space-y-8 mt-8">
					<Project
						title="Fetch Forms"
						image={fetchForms}
						url="www.fetchforms.io"
						description="A headless form builder that is built to empower teams and developers to collaborate and use forms at blazing speeds."
					/>
					<Project
						title="ChurchReserve"
						image={churchReserve}
						url="www.churchreserve.com"
						description="A guest reservation platform designed to help churches manage seating during social-distancing requirements. Sold to The Events Calendar in late 2021."
					/>
					<Project
						title="Klōn Calendar"
						image={klonCalendar}
						url="app.kloncalendar.com"
						description="Helping consultants and freelancers never be double-booked with multi-directional calendar syncing with multiple calendars."
					/>
				</div>
			</PageSection>
			<PageSection title="Contact me">
				<ContactForm />
			</PageSection>
		</Layout>
	);
}
