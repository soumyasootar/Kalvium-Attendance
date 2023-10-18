import React from 'react'
import { Box, Center, HStack, Text } from '@chakra-ui/react'

const ExtraDate = () => {
    return (
        <Center borderRadius={"5px"} bg={"green"} m={2} p={4} w={"50%"} cursor={"no-drop"}>
            <HStack gap={"50px"}>
                
                <Text>Start Time : 04:30 hrs</Text>
                <Text>End Time : 04:30 hrs</Text>
                <Text>Total Duration : 04:30 hrs</Text>
                <Text>Room No : 26-405</Text>
            </HStack>
        </Center>
    )
}

export default ExtraDate