import Navbar from '../components/navbar'
import { useSession } from 'next-auth/client'
import Link from 'next/link'

export default function Profile() {
    const [session, loading] = useSession()

    if (loading) return (
      <div>
        <p>loading...</p>
      </div>
    );
  
    if (!loading && !session) return (
      <div>
        <p>Access Denied</p>
        <Link href='/'>
          <a>Back to login</a>
        </Link>
      </div>
    ) 

    return (
        <div>
            <Navbar />
            <h1>Profile 🤸</h1>
        </div>
    )
}