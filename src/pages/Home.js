import { Box, Text, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import pc from "../assets/pc.png";
import Projects from "./Projects";
import Line from "../components/Line";

// Import Swiper styles
import "swiper/css";

import About from "../components/About";
import { motion } from "framer-motion";

function Home() {
  return (
    <Flex flexDirection="column" alignItems="center" position="relative">
      <Flex flexDirection="column" alignItems="center" textAlign="center">
        <Text
          fontSize="3rem"
          fontWeight="bold"
          fontFamily="Oswald"
          mt="1rem"
          alignSelf="center"
        >
          Front-End NextJS & TypeScript Developer
        </Text>

        <Flex
          flexDirection="column"
          w="60%"
          mt="3rem"
          p="1rem"
          alignItems="center"
          sx={{
            "@media screen and (max-width: 1200px)": {
              w: "100%",
            },
          }}
        >
          <Text fontFamily="Roboto" fontWeight="hairline" fontSize="1.5rem">
            If you are looking for front-end developer, you are at right place!
          </Text>
          <Line />
          <Box
            mt="1rem"
            sx={{
              "@media screen and (max-width: 1200px)": {
                display: "none",
              },
            }}
          >
            <LazyLoadImage
              src={pc}
              width="27%"
              style={{
                position: "absolute",
                left: "0",
                top: "0",
                margin: "2rem 0rem 0rem 2rem",
              }}
            />
          </Box>
          <Text
            textAlign="justify"
            w="55%"
            as={motion.p}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            exit={{ opacity: 0 }}
            fontFamily="Roboto Mono"
            fontWeight="hairline"
            sx={{
              "@media screen and (max-width: 1200px)": {
                mt: "2rem",
              },
            }}
          >
            I am a 23-year-old web developer based in Slovakia with almost two
            years of professional experience. In 2023 i have graduated at
            University of Matej Bel in Slovakia. I have finnished my Bachelor in
            Computer Sciences and Software Engineering. Throughout my career, I
            have worked on various projects, improving my skills in a wide range
            of technologies. My primary tech stack is bellow. As a developer,
            I'm always eager to learn and grow, constantly seeking new
            opportunities to expand my skill set and take on exciting
            challenges.
          </Text>
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        w="100%"
        alignItems="center"
        my={"6rem"}
        gap={"3rem"}
      >
        <Heading fontSize="2.5rem" fontWeight="bold" fontFamily="Oswald">
          My tech stack
        </Heading>
        {/* <Slider /> */}
        <Flex
          mt="0rem"
          flexDirection="row"
          alignItems="center"
          justifySelf="center"
          gap="3rem"
          sx={{
            "@media screen and (max-width: 1200px)": {
              flexDirection: "column",
              textAlign: "center",
            },
          }}
        >
          <Flex flexDirection="column">
            <Heading fontSize="2.5rem" fontWeight="bold" fontFamily="Oswald">
              Front-end
            </Heading>
            <Text>React, TypeScript, NextJS, HTML5, CSS3, SCSS</Text>
          </Flex>
          <Flex flexDirection="column">
            <Heading fontSize="2.5rem" fontWeight="bold" fontFamily="Oswald">
              Back-end
            </Heading>

            <Text>NodeJS, Express</Text>
          </Flex>
          <Flex flexDirection="column">
            <Heading fontSize="2.5rem" fontWeight="bold" fontFamily="Oswald">
              Database
            </Heading>
            <Text>PostgreSQL, FIrebase, Supabase</Text>
          </Flex>
          <Flex flexDirection="column">
            <Heading fontSize="2.5rem" fontWeight="bold" fontFamily="Oswald">
              Other
            </Heading>
            <Text>Jira, Vercel, Git, Figma</Text>
          </Flex>
        </Flex>
      </Flex>

      <About />
    </Flex>
  );
}

export default Home;
