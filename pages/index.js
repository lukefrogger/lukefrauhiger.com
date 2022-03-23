import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import NavLink from "../components/NavLink";
import portrait from "../public/assets/portrait.png";
import fetchForms from "../public/assets/fetchforms-logo.png";

export default function Home() {
	const pageMeta = {
		title: "Luke Frauhiger | Developer, Entrepreneur, Engineer",
		description:
			"Welcome! I'm Luke, an indie developer, founder, and engineer who loves to build and design new things.",
	};
	return (
		<Layout pageMeta={pageMeta}>
			<div className="pb-10 flex flex-col items-center">
				<div className="w-64">
					<Image src={portrait} alt="luke frauhiger" />
				</div>
				<h1 className="mt-8 text-5xl tracking-tight font-extrabold sm:text-6xl md:text-7xl ">Hey, I'm Luke</h1>
				<h3 className="mt-5 font-light text-white sm:text-3xl md:mt-5 md:text-4xl lg:mx-0 text-center">
					I bring ideas to life with web technologies.
				</h3>
				<p className="mt-4 text-highlight text-2xl lg:mx-0 text-center">Full stack developer + Entrepreneur</p>
			</div>
			<PageSection title="Writing" link={{ href: "/writing", text: "more articles" }}>
				<Link href="/blog/thingsgs">
					<a className="text-2xl text-highlight hover:underline cursor-pointer">
						Full Stack Starter - Svelte and Express
					</a>
				</Link>
				<p className="mt-2">
					Get started with a full-stack app with this tutorial about how to serve a Svelte app with Node.js
					and Express. We'll walk through all the steps starting with creating a new Svelte app and finishing
					with creating a get endpoint and getting data from the GIPHY API.
				</p>
			</PageSection>
			<PageSection title="Current project">
				<div className="flex ">
					<div className="mr-4 mt-1 relative">
						<Image src={fetchForms} alt="fetch forms logo" height={120} width={120} />
					</div>
					<div className="flex-1">
						<h5 className="text-2xl text-highlight mb-2">Fetch Forms</h5>
						<NavLink href="https://www.fetchforms.io" external className="text-white/70">
							www.fetchforms.io
						</NavLink>
						<p className="mt-2">
							Get the speed of a form builder with the control of a code. Fetch Forms empowers developers
							and companies who code by centralizing form submissions and helping devs build forms really
							fast.
						</p>
					</div>
				</div>
			</PageSection>
		</Layout>
	);
}

function PageSection({ title, link, children }) {
	return (
		<div className="py-8">
			<div className="mb-6 flex justify-between items-center bg-primary-dark/50 p-6 rounded-2xl shadow-sm">
				<h3 className="text-3xl font-light">{title}</h3>
				{link && (
					<NavLink href={link.href} className="px-3 py-2 border border-white/10 rounded-lg text-white/80">
						{link.text}
					</NavLink>
				)}
			</div>
			<div className="px-1">{children}</div>
		</div>
	);
}
