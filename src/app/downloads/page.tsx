import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DownloadButton, DownloadLatest } from "./page.clients"
import { listVersions } from "@/lib/download"

export default async function DownloadsPage() {
    let versions = await listVersions()

    if (versions instanceof Error) {
        console.error(versions.message)
        return null
    }

    versions = versions.reverse()
    return (
        <Card className="mt-10 mx-auto max-w-2xl">
            <CardHeader>
                <CardTitle>Downloads</CardTitle>
                <CardAction>
                    <DownloadLatest versions={versions} />
                </CardAction>
            </CardHeader>
            <CardContent>
                <ul className="flex flex-col gap-2 w-full">
                    {versions.map((version: Version) => {
                        const fullVersion = `FlappyGrant v${version.join(".")}`
                        return (
                            <li key={fullVersion} title={fullVersion} aria-label={fullVersion}>
                                <DownloadButton versions={versions} version={version} fullVersion={fullVersion} />

                                <span className="hidden">
                                    {fullVersion}
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </CardContent>
        </Card>
    )
}
