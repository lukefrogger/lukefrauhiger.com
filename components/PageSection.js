export default function PageSection({ title, children }) {
	return (
		<div className="py-10" id={title.replaceAll(" ", "-").toLowerCase()}>
			<div className="mb-4">
				<h3 className="text-3xl font-semibold">{title}</h3>
			</div>
			{children}
		</div>
	);
}
