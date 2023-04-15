import { Box, Center, Heading } from '@chakra-ui/react'
import React from 'react'
import WorkList from '../../components/WorkList'



type Props = {}

function Works({}: Props) {
  return (
    <Box p={10} border="2px solid orange">
        <Center>
            <Heading>My Work</Heading>
        </Center>
        <WorkList />
    </Box>
  )
}

export default Works