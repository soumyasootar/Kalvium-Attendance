import React, { useState } from 'react'
import ExtraDate from './ExtraDate'
import { Box, Center, HStack, Text } from '@chakra-ui/react'


const DateComp = (nameState: any) => {
    const [DateState, setDateState] = useState(false)
    const updateBoolean = () => {
        setDateState(!DateState)
    }

    return (
        <>
            <Center borderRadius={"5px"} bg={"yellow"} color={"black"} w={"60%"} p={5} onClick={updateBoolean} cursor={"pointer"}>
                <HStack gap={"50px"}>
                    <Text>Date : 12/09/2023</Text>
                    <Text>Total Duration : 04:30 hrs</Text>
                </HStack>
            </Center>
            {nameState && DateState ? <ExtraDate /> : <></>}
        </>
    )
}

export default DateComp