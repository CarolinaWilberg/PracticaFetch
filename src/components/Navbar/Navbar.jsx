import { NavLink } from 'react-router-dom'
import { VStack, Box, Text, HStack } from '@chakra-ui/react'

const Navbar = () => {
    return (
        <VStack>
            <Box bg="gray.300" w="100%">
                <Text fontSize='5xl'>Rick and Morty API Project</Text>
            </Box>
            <HStack>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/characters">Characters</NavLink>
                <NavLink to="/about">About</NavLink>
            </HStack>
        </VStack>
    )
}

export { Navbar }