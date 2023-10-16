import styles from './page.module.css'
import { Providers } from './providers'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Checkin from '@/components/Checkin'
import { Box } from '@chakra-ui/react'


export default function Home() {
  return (
    <Box>
      <Providers>
        <Navbar/>
        <Checkin/>
        <Footer/>
      </Providers>
    </Box>
  )
}
