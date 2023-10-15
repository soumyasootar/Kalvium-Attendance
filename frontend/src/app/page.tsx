import styles from './page.module.css'
import { Providers } from './providers'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Checkin from '@/components/Checkin'


export default function Home() {
  return (
    <main className={styles.main}>
      <Providers>
        <Navbar/>
        <Checkin/>
        <Footer/>
      </Providers>
    </main>
  )
}
