import React from 'react'
import { Button, useColorMode, useMediaQuery } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ToggleColorButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const [isSmallerThan1200] = useMediaQuery('(max-width: 1200px)')
  return (
    <Button
      onClick={() => toggleColorMode()}
      position={isSmallerThan1200 ? 'relative' : 'absolute'}
      top="0"
      right="0"
      m="1rem"
    >
      {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}

export default ToggleColorButton
