import { useState, useEffect } from 'react'
import { VStack, HStack, Center, Text, Button } from '@chakra-ui/react'
import { BsPlusLg } from 'react-icons/bs'
import { AiOutlineMinus } from 'react-icons/ai'
import { FiRefreshCw } from 'react-icons/fi'

export const Contador = () => {

    const [count, setCount] = useState(0)
    const [color, setColor] = useState('white')

    const sumar = () => setCount(count + 1)
    const restar = () => setCount(count - 1)
    const refresh = () => setCount(0)

    const changeColor = () => {
        if(count < 0 ){
            setColor('red.200')
            return
        } 
        if (count > 0) {
           setColor('blue.200') 
           return
        } 
        setColor('white')
    }

    useEffect(()=> {
        document.title = `Hiciste ${count} clicks`
        changeColor()
    }, [count])

    return (
        <>
            <VStack direction={['column', 'row']} spacing='24px'>
                <Center w='300px' h='200px' border='1px' borderColor='gray.400' borderRadius="md" bg={color}>
                    <Text fontSize='6xl'>
                        {count}
                    </Text>
                </Center>
                <HStack>
                    <Button colorScheme='green' onClick={sumar}><BsPlusLg/></Button>
                    <Button colorScheme='yellow' onClick={refresh}><FiRefreshCw/></Button>
                    <Button colorScheme='red' onClick={restar}><AiOutlineMinus/></Button>
                </HStack>
            </VStack>
        </>
    )
}