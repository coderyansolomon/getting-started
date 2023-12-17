'use client'

import { useRouter } from "next/navigation"

export default function ButtonNavigation({path, label}){
    const router = useRouter()
    return (
        <button onClick={() => router.push(path)}>
            {label}
        </button>
    )
}