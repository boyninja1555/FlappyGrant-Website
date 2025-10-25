import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import "@/styles/global.css"

const roboto = Roboto({
	variable: "--font-roboto",
	subsets: ["latin"],
})

export function generateMetadata(): Metadata {
	return {
		title: "FlappyGrant",
		description: "An actually good Flappy Bird spin-off",
	}
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className="dark">
			<body
				className={`${roboto.variable} antialiased`}
			>
				<NavBar bottom={<Footer />}>
					{children}
				</NavBar>
			</body>
		</html>
	)
}
