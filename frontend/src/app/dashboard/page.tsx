"use client"
import NameComp from '@/components/NameComp'
import { Box, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'

const Dashboard = () => {
  const [name, setName] = useState(["Soumya","Aman"])
  return (
    <Box p={10} textAlign={'center'}>
    <Heading>DASHBOARD</Heading>
    {name.map((e,i)=>{
      console.log("e: ", e);
      return <NameComp key={i} data={e}/>
    })}
    </Box>
  )
}

export default Dashboard