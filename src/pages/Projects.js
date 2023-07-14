import React from 'react'
import { projects } from '../projects'
import { Flex, Text, Button, Link, Heading } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import github from '../assets/github.png'
import viewtown from '../assets/viewtown.png'
import autocentrum from '../assets/autocentrum.png'
import voidd from '../assets/voidd.png'
import projectImage from '../assets/projectsImage.png'
import Line from '../components/Line'
function Projects() {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Heading fontFamily="Oswald" m="3rem" fontSize="8rem">
        Projects i worked on
      </Heading>
      {projects.map((item) => {
        return (
          <Flex
            flexDirection="column"
            w="50%"
            alignItems="center"
            as={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            h="80vh"
          >
            <LazyLoadImage
              src={projectImage}
              width="27%"
              style={{
                position: 'absolute',
                left: '0',
                top: '0',
                margin: '3rem 0rem 0rem 2rem',
                rotate: '340deg',
              }}
            />
            <LazyLoadImage
              src={(() => {
                switch (item.name) {
                  case 'Viewtown':
                    return viewtown
                  case 'Autocentrum':
                    return autocentrum
                  case 'Voidd':
                    return voidd
                  default:
                    return null
                }
              })()}
              width="17%"
              style={{
                position: 'absolute',
                right: '3rem',
                buttom: '0',
                margin: '4rem 0rem 0rem 0rem',
                // rotate: '350deg',
              }}
            />
            <Heading fontFamily="Oswald" m="1rem 0rem 0.45rem 0rem">
              {item.name}
            </Heading>
            <Text fontSize="small" fontFamily="Roboto Mono">
              {item.tech}
            </Text>
            <Line width={'90%'} />
            <Text textAlign="justify" fontFamily="Roboto Mono">
              {item.description}
            </Text>
            <Heading fontSize="1.2rem" m="1.5rem">
              My role{' '}
            </Heading>

            <Text textAlign="justify" fontFamily="Roboto Mono">
              {item.jobDesription}
            </Text>

            {item.repo !== '' ? (
              <Button m="1rem">
                <Link href={item.repo} target="_blank" mr="0.5rem">
                  Repo
                </Link>
                <LazyLoadImage src={github} width="20.4rem" />
              </Button>
            ) : null}
          </Flex>
        )
      })}
    </Flex>
  )
}

export default Projects
