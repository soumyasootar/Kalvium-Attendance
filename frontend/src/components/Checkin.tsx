"use client"
import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import CardCheckin from './CardCheckin'
import { Lato } from 'next/font/google'
import { VscDebugStart } from "react-icons/vsc"


const LatoFont = Lato({ subsets: ['latin'], weight: "900" })

const Checkin = () => {

  const [Squad, setSquad] = useState(["Nettie", "Emily", "Alfred", "Frankjhgugskjhbhbfhwrehjbrehkj", "Tom", "John", "Nettie", "Emily", "Alfred", "Frankjhgugskjhbhbfhwrehjbrehkj", "Tom", "John", "Nettie", "Emily", "Alfred", "Frankjhgugskjhbhbfhwrehjbrehkj", "Tom", "John", "Nettie", "Emily", "Alfred", "Frankjhgugskjhbhbfhwrehjbrehkj", "Tom", "John"])
  return (
    < >
      <Stack gap={10} m={"auto"} direction={["column", "row"]} >

        <VStack gap={10} width={["100%","50%"]}>
          <Heading size='lg'>SQUAD 43</Heading>
          <VStack align={"start"}>
            {Squad.map((e, i) => {
              return <CardCheckin key={i} data={e} />
            })}
          </VStack>
        </VStack >

        <VStack gap={10} width={["100%","50%"]} >
          <Heading size='lg'>SQUAD 44</Heading>
          <VStack align={"start"}>
            {Squad.map((e, i) => {
              return <CardCheckin key={i} data={e} />
            })}
          </VStack>
        </VStack >
      </Stack>
    </>
  )
}

export default Checkin