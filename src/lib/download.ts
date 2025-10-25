const url = process.env.NEXT_PUBLIC_URL!

export async function listVersions(): Promise<Version[] | Error> {
    try {
        const resp = await fetch(`${url}/release/releases.txt`)

        if (!resp.ok)
            throw new Error("Releases list could not be found")

        const data = await resp.text()
        const list = data.replace(/\r/g, "").split("\n")
        return list.map((version: string) => {
            const parts = version.split(".").map((p: string) => Number(p))
            return parts as Version
        })
    } catch (ex) {
        return ex instanceof Error ? ex : new Error(String(ex))
    }
}

export async function getVersion(version: Version): Promise<VersionData | Error> {
    try {
        const resp = await fetch(`${url}/release/data/${version.join(".")}.json`)

        if (!resp.ok)
            throw new Error("That release could not be found")

        const data = await resp.json() as VersionData
        return data
    } catch (ex) {
        return ex instanceof Error ? ex : new Error(String(ex))
    }
}
