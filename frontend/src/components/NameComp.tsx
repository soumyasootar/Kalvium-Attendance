import { Box, Center, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import DateComp from './DateComp'


const NameComp = ({ data }: any) => {
    const [NameState, setNameState] = useState(false)
    const updateBoolean = () => {
        setNameState(!NameState)
    }
    return (
        <VStack>
            <Center borderRadius={"5px"} bg={"purple"} w={"80%"} m={10} p={5} onClick={updateBoolean} cursor={"pointer"}>
                <Heading size={'sm'}>{data}</Heading>
            </Center>
            {NameState ? <DateComp nameState={NameState} /> : <></>}
        </VStack>
    )
}

export default NameComp