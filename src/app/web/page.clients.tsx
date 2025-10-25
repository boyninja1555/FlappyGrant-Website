"use client"

import Link from "next/link"
import { useState } from "react"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function WebEditionInfo() {
    const [open, setOpen] = useState(true)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Warning</DialogTitle>
                    <DialogDescription>
                        This page displays a possibly outdated version of FlappyGrant running on the web. Do not expect top-tier performance or usability. For a more official version of FlappyGrant, please visit the <Link href="/downloads">downloads page</Link>
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button>Okay</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
