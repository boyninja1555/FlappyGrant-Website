"use client"

import { Button } from "@/components/ui/button"
import { getVersion } from "@/lib/download"

async function downloadVersion(versions: Version[], version?: Version): Promise<void> {
    if (!version)
        version = versions[0]

    const versionData = await getVersion(version)

    if (versionData instanceof Error) {
        console.error(versionData.message)
        return
    }

    try {
        const resp = await fetch(versionData.download)

        if (!resp.ok)
            throw new Error("That version is not downloadable")

        const blob = await resp.blob()
        const file = URL.createObjectURL(blob)
        const downloadAnchor = document.createElement("a")
        downloadAnchor.href = file
        downloadAnchor.download = `FlappyGrant v${version.join(".")}.exe`
        downloadAnchor.click()
        downloadAnchor.remove()
    } catch (ex) {
        console.error(ex instanceof Error ? ex.message : String(ex))
        return
    }
}

export function DownloadLatest({
    versions,
    className,
}: {
    versions: Version[]
    className?: string
}) {
    return (
        <Button onClick={() => downloadVersion(versions)} className={className ?? ""}>
            Download Latest
        </Button>
    )
}

export function DownloadButton({
    versions,
    version,
    fullVersion,
    className,
}: {
    versions: Version[]
    version: Version
    fullVersion: string
    className?: string
}) {
    return (
        <Button variant="secondary" onClick={() => downloadVersion(versions, version)} className={`w-full${className ? ` ${className}` : ""}`}>
            {fullVersion}
        </Button>
    )
}
