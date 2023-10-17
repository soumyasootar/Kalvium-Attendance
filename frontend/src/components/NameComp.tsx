import { Box, Center, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import DateComp from './DateComp'


const NameComp = ({ data }: any) => {
    const [NameState, setNameState] = useState(true)
    const updateBoolean = () => {
        setNameState(!NameState)
    }
    return (
        <>
            <Center borderRadius={"5px"} bg={"rebeccapurple"} m={2} onClick={updateBoolean}>
                <Text>{data}</Text>
            </Center>
            {NameState ? <DateComp nameState={NameState} /> : <></>}
        </>
    )
}

export default NameComp