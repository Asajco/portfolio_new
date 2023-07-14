import * as React from 'react'
import {
  Box,
  Heading,
  Text,
  Flex,
  Container,
  chakra,
  Image,
  shouldForwardProp,
} from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'
import study from '../assets/study.png'
import Line from './Line'

const About = () => {
  const ChakraBox = chakra(motion.div, {
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: (prop) =>
      isValidMotionProp(prop) || shouldForwardProp(prop),
  })
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      mt="2rem"
    >
      <Heading fontSize={39}>My journey</Heading>
      <Line />

      <Flex
        alignItems="center"
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Heading>BeCode</Heading>
        <Box w="0.2rem" h="3.5rem" bg="gray.300" m="1rem"></Box>
        <Text>December/2022 - present</Text>
      </Flex>
      <Flex
        alignItems="center"
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Heading>WebCreators</Heading>
        <Box w="0.2rem" h="3.5rem" bg="gray.300" m="1rem"></Box>
        <Text>October/2022 - May/2023</Text>
      </Flex>
      <Flex
        alignItems="center"
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Flex>
          <Heading>Erasmus+ at OAMK</Heading>
        </Flex>
        <Box w="0.2rem" h="3.5rem" bg="gray.300" m="1rem"></Box>
        <Text>January/2022 - May/2022</Text>
      </Flex>
      <Flex
        alignItems="center"
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Flex>
          <Heading>Applied Science and softvare engineering at UMB</Heading>
        </Flex>
        <Box w="0.2rem" h="3.5rem" bg="gray.300" m="1rem"></Box>
        <Text>September/2019 - present</Text>
      </Flex>
      <Flex
        alignItems="center"
        as={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Flex>
          <Heading>Business academy in Rožňava</Heading>
        </Flex>
        <Box w="0.2rem" h="3.5rem" bg="gray.300" m="1rem"></Box>
        <Text>September/2016 - July/2019</Text>
      </Flex>
      <Container display="flex" alignItems="center" justifyContent="center">
        <ChakraBox
          animate={{
            scale: [1, 1.2, 1.2, 1.2, 1],
            rotate: [0, 0, 30, -30, 0],
          }}
          // @ts-ignore no problem in operation, although type error appears.
          transition={{
            duration: 3,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'loop',
          }}
          padding="2"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100px"
          height="100px"
        >
          {/* <Image src={study} alt="" /> */}
        </ChakraBox>
      </Container>
      <Image
        src={study}
        position="absolute"
        right="1rem"
        bottom="0rem"
        w="20rem"
      />
    </Flex>
  )
}

export default About
