import { useState, useEffect } from 'react'
import { HStack, Input, Select, Grid, Spinner, Container, Image, VStack, Heading, Text } from '@chakra-ui/react'
import { NavLink, useSearchParams } from 'react-router-dom'

export const Characters = () => {

    let [searchParams, setSearchParams] = useSearchParams()
    const [characters, setCharacters] = useState({})
    const [loading, setLoading] = useState(false)
    const [searchName, setSearchName] = useState(searchParams.get("searchName")||"")
    const [status, setStatus] = useState(searchParams.get("status")||"")
    const [species, setSpecies] = useState(searchParams.get("species")||"")

    useEffect(() => {
        setLoading(true)
        fetch(`https://rickandmortyapi.com/api/character/?name=${searchName}&status=${status}&species=${species}`)
            .then(res => res.json())
            .then(data => {
                setCharacters(data)
                setLoading(false)
            })
            setSearchParams({searchName,status,species})
    },[searchName,status,species])

    return (
        <>
            <HStack mb="15px" mt="15px" w="80%">
                <Input placeholder='Search Name' value={searchName} onChange={(e) => setSearchName(e.target.value)}/>
                <Select placeholder='Status' value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value='Alive'>Alive</option>
                    <option value='Dead'>Dead</option>
                    <option value='unknown'>unknown</option>
                </Select>
                <Select placeholder='Species' value={species} onChange={(e) => setSpecies(e.target.value)}>
                    <option value='Human'>Human</option>
                    <option value='Humanoid'>Humanoid</option>
                    <option value='Alien'>Alien</option>
                    <option value='Animal'>Animal</option>
                    <option value='Robot'>Robot</option>
                </Select>
            </HStack>
            <Grid templateColumns="repeat(3, 1fr)" gap={4} p="10px">
                {loading && <Spinner/>}
                {characters.results && characters.results.map(character => <Container key={character.id}  w="400px" bg="green.200" color="black" borderRadius="10px" padding="2%" display="flex">
                    <Image src={character.image} h="150px"/>
                    <VStack>
                        <Heading size='md'>{character.name}</Heading>
                        <Text fontSize='sm'>{character.status}</Text>
                        <Text fontSize='sm'>{character.species}</Text>
                        <Text fontSize='sm'>{character.location.name}</Text>
                        <NavLink to={`/characters/${character.id}`}>Detalle</NavLink>
                    </VStack>
                </Container>)}
            </ Grid>
        </> 
    )
}