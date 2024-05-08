import { Swiper, SwiperSlide } from 'swiper/react'
import { Flex, Grid, useMediaQuery } from '@chakra-ui/react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import reactImage from '../assets/react.png'
import ts from '../assets/ts.png'
import chakra from '../assets/chakra.png'
import firebase from '../assets/firebase.png'
import figma from '../assets/figma.png'
import jira from '../assets/jira.png'
import html from '../assets/html.png'
import npm from '../assets/npm.png'
import nextJS from '../assets/nextJS.png'
import git from '../assets/git.png'
import tailwind from '../assets/tailwind.png'
import node from '../assets/node.png'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

const images = [
  { src: reactImage, alt: 'React' },
  { src: ts, alt: 'TypeScript' },
  { src: nextJS, alt: 'NextJs' },
  { src: node, alt: 'NodeJS' },
  { src: chakra, alt: 'Chakra UI' },
  { src: tailwind, alt: 'Tailwind' },
  { src: firebase, alt: 'Firebase' },
  { src: figma, alt: 'Figma' },

  { src: html, alt: 'HTML' },
  { src: jira, alt: 'Jira' },
  { src: npm, alt: 'NPM' },
  { src: git, alt: 'Git' },
]

const imageStyle = {
  width: '100px',
  height: '80px',
  objectFit: 'contain',
  padding: '0',
}

const Slider = () => {
  const [isSmallerThan600] = useMediaQuery('(max-width: 900px)')
  return (
    <Flex
      w="100%"
      justifyContent="space-evenly"
      m="2rem 0rem"
      p="0.5rem"
      cursor="grab"
    >
      <Flex
        w="70%"
        justifyContent={isSmallerThan600 ? 'center' : 'space-evenly'}
        m="2rem 0rem"
        p="0.5rem"
        cursor="grab"
      >
        <Swiper
          spaceBetween={50}
          slidesPerView={isSmallerThan600 ? 2 : 5}
          autoplay={{
            delay: 1500,
          }}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <LazyLoadImage
                src={image.src}
                alt={image.alt}
                style={imageStyle}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>
    </Flex>
  )
}

export default Slider
