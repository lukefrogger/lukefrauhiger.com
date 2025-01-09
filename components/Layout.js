import { NextSeo } from "next-seo";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, pageMeta }) {
	return (
		<>
			{pageMeta && (
				<NextSeo
					description={pageMeta.description}
					title={pageMeta.title}
					openGraph={{
						description: pageMeta.description,
						title: pageMeta.title,
					}}
					twitter={{
						description: pageMeta.description,
						title: pageMeta.title,
					}}
				/>
			)}
			<div className="subpixel-antialiased pt-4 pb-10 px-4">
				<Header />
				<main className="max-w-4xl w-100 mx-auto py-6 sm:px-6">{children}</main>
				<Footer />
			</div>
		</>
	);
}
