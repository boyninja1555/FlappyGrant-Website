import Link from "next/link"
import Image from "next/image"
import Icon from "@/assets/logos/icon_2000x2000.png"

const startYear = process.env.NEXT_PUBLIC_START_YEAR

export function Footer() {
    const year = new Date().getFullYear().toString()
    return (
        <footer className="flex flex-col gap-10 py-10 bg-card border-t text-card-foreground w-full">
            <div className="flex items-center justify-between px-10 w-full">
                <Link href="/" className="override flex items-center gap-1 text-lg">
                    <Image className="w-10 h-full border rounded-md" src={Icon} alt="#" width={2000} height={2000} />
                    <span>FlappyGrant</span>
                </Link>

                <p className="text-muted-foreground">&copy; {startYear || year} - {year}</p>
            </div>
        </footer>
    )
}
