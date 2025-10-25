import Image from "next/image"
import { DownloadLatest } from "./downloads/page.clients"
import { listVersions } from "@/lib/download"
import Screenshot from "@/assets/screenshots/in-game-1.png"

export default async function Home() {
    let versions = await listVersions()

    if (versions instanceof Error) {
        console.error(versions.message)
        return null
    }

    versions = versions.reverse()
    return (
        <div className="flex flex-col mt-10 mx-auto max-w-2xl">
            <h1 className="my-2 text-4xl font-semibold">An actually good Flappy Bird spin-off,</h1>
            <p className="text-xl text-muted-foreground">Playable on most Windows machines</p>

            <DownloadLatest versions={versions} className="mt-5 md:mt-0 ml-auto w-full md:w-max" />
            <Image src={Screenshot} alt="In game screenshot #1" className="mt-10 border rounded-md" />
        </div>
    )
}
