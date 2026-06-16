import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function NavLink({ href, external, noIcon, children, className }) {
	return (
		<Link
			href={href ?? "#"}
			className={`whitespace-nowrap hover:underline text-base flex ${className ? className : ""}`}
			{...(external && { target: "_target", rel: "noopener noreferrer" })}
		>
			{children}
			{external && !noIcon && (
				<span className="mt-1 ml-px">
					<ArrowTopRightOnSquareIcon className="h-3 w-3 ml-0.5" />
				</span>
			)}
		</Link>
	);
}
