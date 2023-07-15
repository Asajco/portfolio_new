import React from 'react'
import {
  Box,
  Flex,
  Button,
  chakra,
  useMediaQuery,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
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
  const [isSmallerThan1200] = useMediaQuery('(max-width: 1200px)')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return isSmallerThan1200 ? (
    <Flex position="relative" flexDirection="column">
      <Button
        ref={btnRef}
        onClick={onOpen}
        w="10%"
        alignSelf="flex-end"
        m="0.25rem"
      >
        <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Flex
            fontFamily="roboto"
            textDecoration="none"
            flexDirection="column"
            w="100%"
            h="100%"
            justifyContent="center"
            alignItems="center"
          >
            <CustomLink to="/" onClick={onClose}>
              Home
            </CustomLink>
            <CustomLink
              to="/projects"
              style={{ margin: '1rem' }}
              onClick={onClose}
            >
              Projects
            </CustomLink>
            <CustomLink to="/contact" mb="4rem" onClick={onClose}>
              Contact me
            </CustomLink>
            <ToggleColorButton />
          </Flex>
        </DrawerContent>
      </Drawer>
    </Flex>
  ) : (
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
