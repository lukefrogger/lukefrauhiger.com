import { useState } from "react";
import TextInput from "../form/TextInput";
import TextArea from "../form/TextArea";
import Message from "../Message";

const fields = [
	{ type: "text", name: "name", label: "Your name", placeholder: "Elrond the Lord of Rivendell" },
	{
		type: "email",
		name: "email",
		label: "Email Address",
		pattern: "/^[w-.]+@([w-]+.)+[w-]{2,4}$/",
		placeholder: "elrond@rivendell.org",
	},
	{
		type: "textarea",
		name: "message",
		label: "What's on your mind?",
	},
	{
		type: "text",
		name: "honey",
		label: "",
		hidden: true,
	},
];

export default function ContactForm() {
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);
	const [form, setForm] = useState(fields.reduce((acc, field) => ({ ...acc, [field.name]: "" }), {}));

	const handleSubmit = (e) => {
		e.preventDefault();
		setError(false);

		if (form.email.includes("spam")) {
			return setSuccess(true);
		}

		const encode = (data) => {
			return Object.keys(data)
				.map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
				.join("&");
		};

		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", ...form }),
		})
			.then(() => setSuccess(true))
			.catch((err) => {
				console.error(err);
				setError(true);
			});
	};

	const updateForm = (val, field) => {
		setForm({
			...form,
			[field]: val,
		});
	};

	if (success) {
		return <Message type="success" message="Your message has been submitted!" />;
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-8 mt-8">
			{fields.map((field) => {
				if (field.type === "textarea") {
					return (
						<div key={field.name}>
							<label htmlFor={field.name}>{field.label}</label>
							<TextArea
								name={field.name}
								id={field.name}
								value={form[field.name]}
								setValue={(e) => updateForm(e.target.value, field.name)}
								required
							/>
						</div>
					);
				} else if (field.hidden) {
					<TextInput
						type={field.type}
						name={field.name}
						id={field.name}
						placeholder={field.placeholder || ""}
						value={form[field.name]}
						setValue={(e) => updateForm(e.target.value, field.name)}
						required
						hidden
						{...(field.pattern && { pattern: field.pattern })}
					/>;
				} else {
					return (
						<div key={field.name}>
							<label htmlFor={field.name}>{field.label}</label>
							<TextInput
								type={field.type}
								name={field.name}
								id={field.name}
								placeholder={field.placeholder || ""}
								value={form[field.name]}
								setValue={(e) => updateForm(e.target.value, field.name)}
								required
								{...(field.pattern && { pattern: field.pattern })}
							/>
						</div>
					);
				}
			})}
			{error && <Message type="error" message="There was an error submitting your entry." />}
			<button type="submit" className="px-6 py-2 bg-white text-primary rounded-md">
				Submit
			</button>
		</form>
	);
}
