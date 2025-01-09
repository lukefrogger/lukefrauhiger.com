import Image from "next/image";
import NavLink from "./NavLink";

export default function PageSection({ image, title, url, description }) {
	return (
		<div className="flex">
			<div className="mr-4 mt-1 relative">
				<Image src={image} alt={`${title} logo`} height={85} width={85} />
			</div>
			<div className="flex-1">
				<h5 className="text-2xl text-highlight mb-0">{title}</h5>
				<NavLink href={`https://${url}`} external className="text-white/70">
					{url}
				</NavLink>
				<p className="mt-2">{description}</p>
			</div>
		</div>
	);
}
