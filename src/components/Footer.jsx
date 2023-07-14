import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import Line from './Line'
const Footer = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mt="3rem"
      p="2rem"
    >
      <Line />
      <Text fontFamily="Roboto" fontWeight="hairline">
        © Jakub Petergáč 2023
      </Text>
    </Flex>
  )
}

export default Footer
