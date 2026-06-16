import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
	return (
		<div className="subpixel-antialiased pt-4 pb-10 px-4">
			<Header />
			<main className="max-w-3xl w-100 mx-auto py-6 sm:px-6">{children}</main>
			<Footer />
		</div>
	);
}
