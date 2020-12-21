import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import { useSession } from 'next-auth/client'
import Link from 'next/link'

export default function Home() {
  const [session, loading] = useSession()

  if (loading) return (
    <div>
      <p>loading...</p>
    </div>
  );

  if (!loading && !session) return (
    <div>
      <Link href='/'>
        <a>Back to login</a>
      </Link>
    </div>
  )

  if (session) {
    return (
      <div className={styles.container}>
        <Navbar />
        <h1>Home 🏠</h1>
      </div>
    )
  }
}
