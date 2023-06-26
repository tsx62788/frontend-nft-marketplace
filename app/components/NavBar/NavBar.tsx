'use client'

import { Flex, Grid, GridItem, Text, InputGroup, Input, InputRightElement, Box } from '@chakra-ui/react'
import { ConnectBtn } from '../'
import { GrBitcoin, GrSearch } from 'react-icons/gr'

const NavBar: React.FC<{}> = () => {
  return (
    <Grid templateColumns='repeat(6, 1fr)' gap={6} alignItems='center'>
      <GridItem colSpan={2}>
        <Flex align='center' fontSize='3xl' color='blue.500'>
          <GrBitcoin />
          <Text p={4} as='b' display={['none', 'none', 'none', 'none', 'block']} whiteSpace={'nowrap'}>
            NFT Marketplace
          </Text>
        </Flex>
      </GridItem>
      <GridItem>
        <InputGroup>
          <Input placeholder='Search NFT' rounded='full' w={'xs'} />
          <InputRightElement cursor='pointer' _hover={{ backgroundColor: 'blue.50', rounded: 'full' }}>
            <Box display={['none', 'none', 'none', 'block']}>
              <GrSearch />
            </Box>
          </InputRightElement>
        </InputGroup>
      </GridItem>
      <GridItem colStart={6} colEnd={7}>
        <ConnectBtn />
      </GridItem>
    </Grid>
  )
}
export default NavBar
