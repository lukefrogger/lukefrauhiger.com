import "../styles/globals.css";

export const metadata = {
	metadataBase: new URL("https://lukefrauhiger.com"),
	title: {
		default: "Luke Frauhiger",
		template: "%s | Luke Frauhiger",
	},
	openGraph: {
		type: "website",
		siteName: "Luke Frauhiger",
		images: [
			{
				url: "https://www.lukefrauhiger.com/seo/luke_frauhiger_og.png",
				width: 1200,
				height: 630,
				alt: "Luke Frauhiger banner",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@lukefrogger",
		creator: "@lukefrogger",
		images: ["https://www.lukefrauhiger.com/seo/luke_frauhiger_og.png"],
	},
	icons: {
		icon: [
			{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
			{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
		],
		apple: "/apple-touch-icon.png",
	},
	manifest: "/site.webmanifest",
};

export const viewport = {
	themeColor: "#04386e",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="text-white font-light font-nunito bg-primary">{children}</body>
		</html>
	);
}
