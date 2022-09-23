import React from "react";

export default function TextInput({ type, setValue, ...rest }) {
	return (
		<input
			{...rest}
			onChange={setValue}
			type={type}
			className="mt-1 px-3 py-2 rounded-md form-input w-full placeholder-gray-400 text-gray-800"
		/>
	);
}
