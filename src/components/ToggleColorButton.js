import React from 'react'
import { Button, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ToggleColorButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button
      onClick={() => toggleColorMode()}
      position="absolute"
      top="0"
      right="0"
      m="1rem"
    >
      {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}

export default ToggleColorButton
