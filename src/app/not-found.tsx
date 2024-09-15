import React from 'react'
import Link from 'next/link'

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 absolute inset-0">
            <h1 className="text-4xl font-bold">404 Not Found</h1>
            <Link href={'/'} className={'button'}>
                Go back to home
            </Link>
        </div>
    )
}

export default NotFound
