import Head from 'next/head'
import Navbar from '../components/navbar'
import React, { useEffect } from 'react'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

export default function Login() {
    const [session, loading] = useSession()
    const router = useRouter()

    useEffect(() => {
        if (session) router.push('/home')
    }, [session])

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <h1>Login 🔑</h1>
            {!session && (
                <>
                    <p>Not signed in</p>
                </>
            )}
        </div>
    )
}