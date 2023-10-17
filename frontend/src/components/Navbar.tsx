"use client"
import { Image, Stack } from "@chakra-ui/react"
import { Button, ButtonGroup, HStack, Heading, Text } from "@chakra-ui/react"
import Link from "next/link"

import { VscDashboard, VscDebugStart } from "react-icons/vsc"

const Navbar = () => {
  return (
    <>
      <Stack direction={["column", "row"]} align={"center"} m={"auto"} my={"10"} gap={[2, 10]} width={"80%"}>
        <Image src="https://kalvium.com/wp-content/uploads/2023/04/Kalvium.svg" width={"10"} alt="Kalvium Logo"></Image>
        <Heading alignSelf={"center"} size={["xs", "md"]} color="red" >
          ATTENDANCE</Heading>
        <Link href={"/dashboard"}>
          <Button width={"80%"} leftIcon={<VscDashboard />} size={"xs"} px={4} colorScheme='whiteAlpha' variant='solid'> Dashboard</Button>
        </Link>
        <Button width={"80%"} leftIcon={<VscDebugStart />} size={"xs"} colorScheme='yellow' variant='solid'> START</Button>
      </Stack>
    </>
  )
}

export default Navbar