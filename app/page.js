import Image from "next/image";
import Layout from "../components/Layout";
import PageSection from "../components/PageSection";
import Project from "../components/Project";
import portrait from "../public/assets/portrait.png";
import { projects } from "../content";

export const metadata = {
	title: "Luke Frauhiger | Developer, Entrepreneur, Indie developer",
	description:
		"Welcome! I'm Luke, an front-end developer, serverless developer, and founder who loves to build and design new things on the web.",
	openGraph: {
		title: "Luke Frauhiger | Developer, Entrepreneur, Indie developer",
		description:
			"Welcome! I'm Luke, an front-end developer, serverless developer, and founder who loves to build and design new things on the web.",
	},
	twitter: {
		title: "Luke Frauhiger | Developer, Entrepreneur, Indie developer",
		description:
			"Welcome! I'm Luke, an front-end developer, serverless developer, and founder who loves to build and design new things on the web.",
	},
};

export default function Home() {
	return (
		<Layout>
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
					I've been building website, APIs, and web apps for over a decade. I've built everything from APIs to static websites
					to data integrations. Right now, you can find working as a freelance contractor while building my
					own SaaS projects and businesses.
				</p>
			</PageSection>
			<PageSection title="Recent projects">
				<div className="space-y-8 mt-8">
					{projects.map((project) => (
						<Project
							key={project.url}
							title={project.title}
							image={project.image}
							url={project.url}
							description={project.description}
						/>
					))}
				</div>
			</PageSection>
		</Layout>
	);
}
