import React from 'react'
import { Box, Flex, Button, chakra } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import ToggleColorButton from './ToggleColorButton'

function Header() {
  const CustomLink = chakra(Link, {
    baseStyle: {
      fontFamily: 'Roboto Mono',
      transition: 'transform 0.3s, color 0.3s',
      '&:hover': {
        transform: 'scale(1.1)',
        textDecoration: 'underline',
      },
    },
  })
  return (
    <Flex
      fontFamily="roboto"
      textDecoration="none"
      w="100%"
      justifyContent="center"
      alignItems="center"
    >
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/projects" style={{ margin: '1rem' }}>
        Projects
      </CustomLink>
      <CustomLink to="/contact">Contact me</CustomLink>
      <ToggleColorButton />
    </Flex>
  )
}

export default Header
