import styles from '../../styles/Navbar.module.css'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Navbar() {
    const [session, loading] = useSession()

    return (
        <nav>
            <div>
                <Link href='/home'>
                    <a className={styles.links}>Home</a>
                </Link>
                <Link href='/profile'>
                    <a className={styles.links}>Profile</a>
                </Link>
                {session
                    ? <button onClick={signOut}>Logout</button>
                    : <button onClick={signIn}>Login</button>}
            </div>
            <p>Login Testing NextJS Auth0</p>
        </nav>
    )
}