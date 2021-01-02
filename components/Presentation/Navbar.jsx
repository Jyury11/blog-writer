import React from 'react'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-4 bg-gray-500 w-full">
            <p className="text-2xl font-bold text-white px-2 p-2 m-2">Blog Writer</p>
            <div className="flex">
                <Link href="/" >
                    <a className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 m-2">
                        Home
                    </a>
                </Link>
                <Link href="/posts" >
                    <a className="rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 m-2">
                        Setting
                    </a>
                </Link>
            </div>
        </nav>
    )
}