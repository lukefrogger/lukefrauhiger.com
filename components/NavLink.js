import Link from "next/link";
import { ExternalLinkIcon } from "@heroicons/react/outline";

export default function NavLink({ href, external, children, className }) {
	return (
		<Link href={href ?? "#"} passHref>
			<a
				className={`whitespace-nowrap hover:underline text-base flex ${className ? className : ""}`}
				{...(external && { target: "_target" })}
			>
				{children}
				{external && typeof children === "string" && (
					<span className="mt-1 ml-px">
						<ExternalLinkIcon className="h-3 w-3" />
					</span>
				)}
			</a>
		</Link>
	);
}
