import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "ER Widget",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="ko" className={``}>
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	);
}
