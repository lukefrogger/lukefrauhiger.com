import NavLink from "./NavLink";

export default function Header() {
	const poweredBy = [
		// { title: "TinaCMS", href: "https://tina.io" },
		{ title: "Next.js", href: "https://nextjs.org" },
		{ title: "Netlify", href: "https://vercel.com" },
	];
	return (
		<footer className="fixed bottom-0 flex border-t border-white/10 bg-primary-dark text-sm w-full">
			<div className="border-r border-white/10 px-6 text-white/70 py-2">Powered by:</div>
			{poweredBy.map((item) => (
				<div key={item.title} className="border-r border-white/10 px-6 py-2 text-white/70 relative">
					<NavLink
						key={item.href}
						href={item.href}
						external={true}
						className="hover:underline underline-offset-4 no-underline"
					>
						<span className="text-sm">{item.title}</span>
					</NavLink>
				</div>
			))}
		</footer>
	);
}
