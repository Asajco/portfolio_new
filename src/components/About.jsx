import React from 'react'
import {
  Box,
  Heading,
  Text,
  Flex,
  Container,
  chakra,
  Image,
  useMediaQuery,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import study from '../assets/study.png'
import Line from './Line'

const About = () => {
  const [isSmallerThan1200] = useMediaQuery('(max-width: 1200px)')

  const renderTimelineItem = (heading, date, description) => (
    <Flex
      alignItems="center"
      as={motion.div}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      flexDirection={isSmallerThan1200 ? 'column' : 'row'}
      borderTop={isSmallerThan1200 ? '1px solid gray' : 'none'}
      mt={isSmallerThan1200 ? '1.5rem' : 0}
    >
      <Heading>{heading}</Heading>
      <Box
        w={isSmallerThan1200 ? '3.5rem' : '0.2rem'}
        h={isSmallerThan1200 ? '0.2rem' : '3.5rem'}
        bg="gray.300"
        m="1rem"
      ></Box>
      <Text>{date}</Text>
      <Box
        w={isSmallerThan1200 ? '3.5rem' : '0.2rem'}
        h={isSmallerThan1200 ? '0.2rem' : '3.5rem'}
        bg="gray.300"
        m="1rem"
      ></Box>
      <Text>{description}</Text>
    </Flex>
  )

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      mt="2rem"
      mb="3rem"
      textAlign="center"
    >
      <Heading fontSize={isSmallerThan1200 ? 35 : 55} fontFamily="Oswald">
        My journey
      </Heading>
      <Line />

      {renderTimelineItem(
        'BeCode',
        'December/2022 - present',
        'Front-end developer',
      )}
      {renderTimelineItem(
        'WebCreators',
        'October/2022 - May/2023',
        'Front-end developer',
      )}
      {renderTimelineItem(
        'Erasmus+ at OAMK',
        'January/2022 - May/2022',
        'Study field - Web development',
      )}
      {renderTimelineItem(
        'Applied Science and Software Engineering at UMB',
        'September/2019 - present',
        'University of Matej Bell',
      )}
      {renderTimelineItem(
        'Business academy in Rožňava',
        'September/2016 - July/2019',
        'High school',
      )}

      <Image
        src={study}
        position="absolute"
        right="1rem"
        bottom="0rem"
        w="20rem"
        sx={{
          '@media screen and (max-width: 1500px)': {
            display: 'none',
          },
        }}
      />
    </Flex>
  )
}

export default About
