"use client"
import NameComp from '@/components/NameComp'
import { Box, Center, HStack, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useState } from 'react'

const Dashboard = () => {
  const [name, setName] = useState(["Soumya", "Aman","Nettie", "Emily", "Alfred", "Frankjhgugskjhbhbfhwrehjbrehkj", "Tom", "John", "Nettie", "Emily", "Alfred", "Frankjhgugskjhbhbfhwrehjbrehkj", "Tom", "John", "Nettie", "Emily", "Alfred", "Frankjhgugskjhbhbfhwrehjbrehkj", "Tom", "John", "Nettie", "Emily", "Alfred", "Frankjhgugskjhbhbfhwrehjbrehkj", "Tom", "John"])
  return (
    <Box p={10} textAlign={'center'}>
      <Center margin={"auto"} w={"100%"} gap={10} >
        <Link href={".."}>Back</Link>
        <Heading>DASHBOARD</Heading>
      </Center>
      <Box width={"80%"} m={"100px auto"}
      >

        {name.map((e, i) => {
          return <NameComp key={i} data={e} />
        })}
      </Box>
    </Box>
  )
}

export default Dashboard