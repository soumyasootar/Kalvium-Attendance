
import { FaRegCheckCircle } from "react-icons/fa"
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Button, Text, HStack, Select, Box } from '@chakra-ui/react'
const CardCheckin = ({ data }: any) => {
    return (
        <HStack justify={"space-between"} bg={"white"} color={"black"} width={"450px"} px={2} borderRadius={5}>
            <Text fontSize={"x-small"} fontWeight={"bold"} whiteSpace={"nowrap"} overflow={"hidden"} textOverflow={"ellipsis"} width={"20%"}>{data}</Text>

            <Box width={"25%"} >
                <Select
                    size={"xs"}
                    border={"1px"}
                    py={1}
                >
                    <option value=''>Room No.</option>
                    <option value='25-401'>25-401 </option>
                    <option value='26-402'>26-402 </option>
                    <option value='26-405'>26-405 </option>
                </Select>
            </Box>
            <Button width={"25%"} leftIcon={<FaRegCheckCircle />} size={"xs"} colorScheme='twitter' variant='solid' isLoading={false} loadingText="Checking in..."> CHECK IN</Button>
            <Text fontWeight={"bold"}>0:00 hrs</Text>
        </HStack>
    )
}

export default CardCheckin