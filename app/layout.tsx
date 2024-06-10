import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import clsx from "clsx";
import { cn } from "@/lib/utils"
import AuthProvider from "@/components/AuthProvider";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
	},
};


export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={cn(
					"font-sans antialiased",
					fontSans.variable
				)}
			>
				{/* <AuthProvider> */}
						<div className="relative flex flex-col bg-black-800 text-white">
							<main className="flex-grow">
								{children}
							</main>
						</div>
				{/* </AuthProvider> */}
			</body>
		</html>
	);
}
