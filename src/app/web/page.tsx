import type { Metadata } from "next"
import { WebEditionInfo } from "./page.clients"

export function generateMetadata(): Metadata {
    return {
        title: "FlappyGrant Web Edition",
        description: "The minimal web edition of FlappyGrant",
    }
}

export default function WebEdition() {
    return (
        <div className="pt-[56.25%] relative">
            <WebEditionInfo />

            <iframe
                src="https://web.flappygrant.com"
                className="w-full h-full border rounded-md inset-0 absolute"
                allowFullScreen
            />
        </div>
    )
}
