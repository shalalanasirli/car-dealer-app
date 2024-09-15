import type { Metadata } from 'next'
import '../globals.css'
import { ReactNode } from 'react'

export const metadata: Metadata = {
    title: 'Car Dealer App',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <html lang="en">
            <body className={'p-2'}>
                <div
                    className={
                        'relative w-full min-h-96 md:max-w-2xl bg-white shadow-sm border border-slate-200 rounded-lg overflow-hidden mx-auto p-4'
                    }
                >
                    {children}
                </div>
            </body>
        </html>
    )
}
