export default function Message({ message, type }) {
	const block = "w-full p-4 rounded-md";
	const types = {
		error: "bg-rose-700 text-rose-100",
		success: "bg-emerald-700 text-emerald-100",
		default: "bg-transparent border border-white",
	};

	return <div className={`${block} ${types[type]}`}>{message}</div>;
}
