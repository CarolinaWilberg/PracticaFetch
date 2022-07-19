import { useState, useEffect } from 'react'
import { Container, Image, VStack, Heading, Text } from '@chakra-ui/react'
import { useParams, NavLink } from 'react-router-dom'

const Character = () => {

    let {id} = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => res.json())
            .then(data => {
                setCharacter(data)
            })
    }, [])

    return (
        <>
            {character && <Container key={character.id}  w="600px" bg="green.200" color="black" borderRadius="10px" padding="2%" display="flex">
                <Image src={character.image} h="200px"/>
                <VStack>
                    <Heading size='md'>{character.name}</Heading>
                    <Text fontSize='sm'>{character.gender}</Text>
                    <Text fontSize='sm'>{character.status}</Text>
                    <Text fontSize='sm'>{character.species}</Text>
                    <Text fontSize='sm'>{character?.location?.name}</Text>
                    <NavLink to="/characters">Volver</NavLink>
                </VStack>
            </Container>}
        </>
    )
}

export { Character }