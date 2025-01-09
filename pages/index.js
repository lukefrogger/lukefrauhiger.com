import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import PageSection from "../components/PageSection";
import Project from "../components/Project";
import portrait from "../public/assets/portrait.png";
import { projects } from "../content";
import ContactForm from "../components/forms/ContactForm";

export default function Home() {
	const pageMeta = {
		title: "Luke Frauhiger | Developer, Entrepreneur, Indie developer",
		description:
			"Welcome! I'm Luke, an front-end developer, serverless developer, and founder who loves to build and design new things on the web.",
	};

	console.log(projects)
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
					I’ve been building things on the web since 2013. I've built everything from APIs to static websites
					to data integrations. Right now, you can find working as a freelance contractor while building my
					own SaaS projects and businesses. If you'd like to work with me -{" "}
					<Link href="#contact-me">
						<a className="text-highlight underline decoration-dotted underline-offset-2">let’s talk!</a>
					</Link>
				</p>
			</PageSection>
			<PageSection title="Recent projects">
				<div className="space-y-8 mt-8">
					{projects.map((project) => (
						<Project
							title={project.title}
							image={project.image}
							url={project.url}
							description={project.description}
						/>
					))}
				</div>
			</PageSection>
			<PageSection title="Contact me">
				<ContactForm />
			</PageSection>
		</Layout>
	);
}
