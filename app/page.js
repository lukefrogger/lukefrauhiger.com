import Image from "next/image";
import Layout from "../components/Layout";
import PageSection from "../components/PageSection";
import Project from "../components/Project";
import portrait from "../public/assets/portrait.png";
import { projects } from "../content";
import NavLink from "../components/NavLink";

export const metadata = {
	title: "Luke Frauhiger | Developer, Consultant, Entrepreneur",
	description:
		"I'm Luke, an software developer, consultant, and founder who loves to design and build things on the web.",
	openGraph: {
		title: "Luke Frauhiger | Developer, Consultant, Entrepreneur",
		description:
			"I'm Luke, an software developer, consultant, and founder who loves to design and build things on the web.",
	},
	twitter: {
		title: "Luke Frauhiger | Developer, Consultant, Entrepreneur",
		description:
			"I'm Luke, an software developer, consultant, and founder who loves to design and build things on the web.",
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
					I help businesses bring their ideas to life.
				</h3>
				<p className="mt-4 text-highlight text-2xl lg:mx-0 text-center">
					Technical Leader and Software Architect
				</p>
			</div>
			<PageSection title="About me">
				<p className="mt-3">
					I'm a technical leader who designs and builds software systems. I've been doing this since 2013,
					first as an engineer, then as an architect, and recently as a founder.
				</p>
				<p className="mt-3">
					I was the technical co-founder of ChurchReserve where I built the platform and led the company
					through its acquisition by TheEventsCalendar. Today I lead engineering at Clarify, a studio I
					co-founded, where I architect and build full-stack apps and websites for businesses in the
					outdoor-industry.
				</p>
				<p className="mt-3">
					During my career, I've developed a talent for translating messy business problems and ideas into
					defined technical requirements. I do my best work in collaborative and high-autonomy teams where I
					can own the technical direction from start to finish.
				</p>
				<p className="mt-3">
					During my career, I've developed a talent for translating messy business problems and ideas into
					defined technical requirements. I do my best work in collaborative and high-autonomy teams where I
					can own the technical direction from start to finish.
				</p>
				<p className="mt-2">
					If you need help with a project or just want to chat, feel free to book a time with me!{" "}
					<NavLink target="_blank" href="https://app.orcacal.com/scheduler/21aaae59-3b85-4bc9-b4a9-28a314b6c5e7" className="text-white/70">
						Book Here.
					</NavLink>
					.
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
