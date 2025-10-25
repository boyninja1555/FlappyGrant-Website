"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const startYear = process.env.NEXT_PUBLIC_START_YEAR

export function MobileNavBar({
    links,
    outLinks,
}: {
    links: LinkConfig[]
    outLinks: LinkConfig[]
}) {
    const [open, setOpen] = useState(false)
    const year = new Date().getFullYear().toString()
    return (
        <>
            <Button onClick={() => setOpen(!open)} className="md:hidden">Menu</Button>

            {open ? (
                <div className="w-full h-screen top-0 left-0 fixed z-60" onClick={() => setOpen(false)}>
                    <ul className="flex flex-col md:hidden text-xl p-4 bg-card border-r w-max h-screen top-0 left-0 fixed z-61">
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

                        <p className="mt-auto text-center text-base text-muted-foreground">&copy; {startYear || year} - {year}</p>
                    </ul>
                </div>
            ) : null}
        </>
    )
}
