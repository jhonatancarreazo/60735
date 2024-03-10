import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Stack, Image, Heading, Button, ButtonGroup, Divider, Text } from '@chakra-ui/react'
import './Item.css'
const Item = ({nombre, descripcion, precio, image}) => {

  return (
    <Card maxW='sm' className='card'>
    <CardBody>
        <Image
        src={image}
        alt={nombre}
        borderRadius='lg'
        boxSize='100%'
        objectFit='cover' 
        h='400px' 
        />
        <Stack mt='6' spacing='3'>
        <Heading size='md'>{nombre}</Heading>
        <Text color='blue.600' fontSize='2xl'>
            ${precio}
        </Text>
        </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
        <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='blue'>
            Ver detalle
        </Button>
        </ButtonGroup>
    </CardFooter>
    </Card>
  )
}

export default Item
