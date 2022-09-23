import React from "react";

export default function TextArea({ type, setValue, ...rest }) {
	return (
		<textarea
			{...rest}
			onInput={setValue}
			rows="3"
			className="mt-1 px-3 py-2 rounded-md form-input w-full placeholder-gray-400 text-gray-800"
		/>
	);
}
