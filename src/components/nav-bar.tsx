import Link from "next/link"
import Image from "next/image"
import Icon from "@/assets/logos/icon_2000x2000.png"

export function NavBar({
    children,
    bottom,
}: {
    children?: React.ReactNode
    bottom?: React.ReactNode
}) {
    const links: LinkConfig[] = [
        {
            path: "/",
            label: "Home",
        },
        {
            path: "/downloads",
            label: "Downloads",
        },
        {
            path: "/web",
            label: "Web Edition",
        },
    ]

    return (
        <>
            <main className="mx-10 py-16 min-h-screen">
                {children}
            </main>

            {bottom}

            <nav className="flex items-center justify-between px-10 backdrop-blur-sm w-full h-16 top-0 left-0 fixed z-50">
                <Link href="/" className="override flex items-center gap-1 text-lg h-10">
                    <Image className="w-10 h-full border rounded-md" src={Icon} alt="#" width={2000} height={2000} />
                    <span>FlappyGrant</span>
                </Link>

                <ul className="flex items-center gap-4">
                    {links.map((link: LinkConfig, index: number) => (
                        <li key={index}>
                            <Link href={link.path}>
                                {link.label}
                            </Link>
                        </li>
                    ))}

                    <li><a href="https://boyninja1555.itch.io/flappygrant" target="_blank">Legacy Edition</a></li>
                </ul>
            </nav>
        </>
    )
}
