import React, { useState } from 'react'
import ExtraDate from './ExtraDate'
import { Box, Center, Text } from '@chakra-ui/react'


const DateComp = (nameState:any) => {
    const [DateState, setDateState] = useState(false)
    const updateBoolean = () => {
        setDateState(!DateState)
    }

    return (
        <>
            <Center borderRadius={"5px"} bg={"pink"} m={2} onClick={updateBoolean}>
                <Text>Start Time</Text>
            </Center>
            {nameState&&DateState?<ExtraDate/>:<></>}
        </>
    )
}

export default DateComp