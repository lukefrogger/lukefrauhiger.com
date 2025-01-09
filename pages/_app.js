import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	return (
		<>
			<DefaultSeo
				openGraph={{
					type: "website",
					url: `https://lukefrauhiger.com${router.asPath}`,
					site_name: "Luke Frauhiger",
					image: [
						{
							url: "https://www.lukefrauhiger.com/seo/luke_frauhiger_og.png",
							width: 1200,
							height: 630,
							alt: "Luke Frauhiger banner",
						},
					],
				}}
				twitter={{
					image: {
						url: "https://www.lukefrauhiger.com/seo/luke_frauhiger_og.png",
						width: 1200,
						height: 630,
						alt: "Luke Frauhiger banner",
					},
					handle: "@lukefrogger",
					site: "@lukefrogger",
					cardType: "summary_large_image",
				}}
			/>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
