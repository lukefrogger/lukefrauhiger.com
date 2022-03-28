import Link from "next/link";
import { ExternalLinkIcon } from "@heroicons/react/outline";

export default function NavLink({ href, external, children, className }) {
	return (
		<Link href={href ?? "#"} passHref>
			<a
				className={`whitespace-nowrap hover:underline text-base font-medium px-2${
					className ? ` ${className}` : ""
				} relative`}
			>
				{children}
				{external && typeof children === "string" && (
					<span className="absolute text-white top-0 -right-1">
						<ExternalLinkIcon className="h-3 w-3" />
					</span>
				)}
			</a>
		</Link>
	);
}
