import { Button, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
  return (
    <>
    <InputGroup mt={5}>
            <InputLeftElement
              pointerEvents="none"
              children={<FaSearch color="gray.300" />}
            />
            <Input type="text" placeholder="Search for your dream home" />
          </InputGroup>

          <Button colorScheme="whiteAlpha" mt={5}>
            Get Started
          </Button>
    
    </>
  )
}

export default Search