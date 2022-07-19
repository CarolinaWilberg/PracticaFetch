import { SimpleGrid, HStack, VStack, Center, Image, Heading, Text, Spinner, Button } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

export const CardContainer = () => {

   const [characters, setCharacters] = useState({})
   const [loading, setLoading] = useState(false)
   const [page, setPage] = useState(1)

    useEffect(() => {
        setLoading(true)
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
            .then(res => res.json())
            .then(data =>{
                setLoading(false)
                setCharacters(data)
            })
    },[page])

    return (
        <>
        <SimpleGrid spacing={5} columns={{ base: 1, md: 2, lg: 3 }} p={2}>
            {loading && <Spinner />}
            {characters.results && characters.results.map(character => <HStack key={character.id} bg='lightgray'>
                <Image w='100px' src={character.image}/>
                <VStack>
                    <Heading size='md'>{character.name}</Heading>
                    <Text size='sm' color={(character.status === "Alive" && "green.400") ||
                        (character.status === "Dead" && "red.400") ||
                        "white"}>{character.status}</Text>
                    <Text size='sm'>{character.location.name}</Text>
                </VStack>
            </HStack>)}
        </SimpleGrid>
            <Center>
                <Button colorScheme='teal' disabled={page === 1 && 'disabled'} onClick={() => setPage(page - 1)}>Prev</Button>
                <Button colorScheme='teal' onClick={() => setPage(page + 1)}>Next</Button>
            </Center>
        </>
        
    )
}