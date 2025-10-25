"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export function MobileNavBar({
    links,
    outLinks,
}: {
    links: LinkConfig[]
    outLinks: LinkConfig[]
}) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Button onClick={() => setOpen(!open)}>Menu</Button>

            {open ? (
                <div className="w-full h-screen top-0 left-0 fixed z-60" onClick={() => setOpen(false)}>
                    <ul className="flex flex-col md:hidden p-4 bg-card border-r w-3/4 h-screen top-0 left-0 fixed z-61">
                        {links.map((link: LinkConfig, index: number) => (
                            <li key={index}>
                                <Link href={link.path}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}

                        {outLinks.map((link: LinkConfig, index: number) => (
                            <li key={index}>
                                <a href={link.path}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : null}
        </>
    )
}
