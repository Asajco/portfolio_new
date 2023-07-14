import { Box, Text, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import pc from '../assets/pc.png'

import Line from '../components/Line'

// Import Swiper styles
import 'swiper/css'
import Slider from '../components/Slider'
import About from '../components/About'

function Home() {
  return (
    <Flex flexDirection="column" alignItems="center" position="relative">
      <Flex flexDirection="column" alignItems="center">
        <Text fontSize="3rem" fontWeight="bold" fontFamily="Oswald" mt="1rem">
          Front-End React & TypeScript Developer
        </Text>

        <Flex flexDirection="column" w="60%" mt="3rem" alignItems="center">
          <Text fontFamily="Roboto" fontWeight="hairline" fontSize="1.5rem">
            If you are looking for front-end developer, you are at right place!
          </Text>
          <Line />
          <Box mt="1rem">
            <LazyLoadImage
              src={pc}
              width="27%"
              style={{
                position: 'absolute',
                left: '0',
                top: '0',
                margin: '2rem 0rem 0rem 2rem',
              }}
            />
          </Box>
          <Text
            textAlign="justify"
            w="55%"
            fontFamily="Roboto Mono"
            fontWeight="hairline"
          >
            I am a 22-year-old web developer based in Slovakia with almost two
            years of professional experience. Throughout my career, I have
            worked on various projects, improving my skills in a wide range of
            technologies. My primary tech stack is bellow, but I also have some
            experience with NodeJS, PostgreSQL, GraphQL, and Twig, which I
            primarily used in school projects. As a developer, I'm always eager
            to learn and grow, constantly seeking new opportunities to expand my
            skill set and take on exciting challenges.
          </Text>
        </Flex>
      </Flex>
      <Flex
        mt="6rem"
        flexDirection="column"
        w="100%"
        alignItems="center"
        h="40vh"
      >
        <Heading fontSize="2.5rem" fontWeight="bold" fontFamily="Oswald">
          My tech stack
        </Heading>
        <Slider />
      </Flex>

      <About />
    </Flex>
  )
}

export default Home
