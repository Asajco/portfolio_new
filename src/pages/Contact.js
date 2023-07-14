import { React, useState } from 'react'
import emailjs from '@emailjs/browser'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useForm } from 'react-hook-form'
import contact from '../assets/contact.png'
import PhoneIcon from '@mui/icons-material/Phone'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import PersonIcon from '@mui/icons-material/Person'
import {
  Flex,
  FormLabel,
  Heading,
  Text,
  Input,
  Icon,
  Textarea,
  Link,
  Button,
  useToast,
} from '@chakra-ui/react'

const Contact = () => {
  const toast = useToast()
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: '',
      userEmail: '',
    },
  })
  function handlePopup() {
    toast({
      title: 'Email sent',
      status: 'success',
      position: 'top-right',
      isClosable: true,
      duration: 1500,
    })
    scrollUp()
  }

  const sendEmail = (formData) => {
    emailjs
      .send(
        'service_8ifqz9h',
        'template_n81eybk',
        formData,
        'PplcVTx2tcLqBXnuv',
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        },
      )
    reset()
  }

  return (
    <Flex
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      flexDirection="row"
      position="relative"
      alignItems="flex-start"
      justifyContent="center"
      w="100vw"
      mt="8rem"
      fontFamily="Roboto Mono"
    >
      {/* <Image
        src={contact}
        alt=""
        w="20rem"
        position="absolute"
        right={5}
        top="7"
      /> */}
      <form
        onSubmit={handleSubmit(sendEmail)}
        style={{
          display: 'flex',
          flexDirection: 'column',

          gap: '1rem',
          width: '60vw',
        }}
      >
        <Heading mb="2rem" alignSelf="center" fontSize={60} fontFamily="Oswald">
          {' '}
          Interested in my work?
        </Heading>
        <Flex>
          <Input
            {...register('userName', { required: 'This field is required' })}
            placeholder="Your name..."
            name="userName"
            mr="1rem"
          />
          <p>{errors.userName?.message}</p>

          <Input
            {...register('userEmail', {
              required: 'This field is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            placeholder="Email..."
          />
        </Flex>
        <Text>{errors.userEmail?.message}</Text>

        <Textarea
          {...register('message', {
            required: 'If you want to text me, write me something',
          })}
          name="message"
          placeholder="Write your message..."
          h="10rem"
        ></Textarea>
        <p>{errors.message?.message}</p>

        <Button
          type="submit"
          colorScheme="green"
          onClick={() => handlePopup}
          alignSelf="center"
          mt="2rem"
          w="10rem"
        >
          Send!
        </Button>
      </form>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        w="20rem"
        ml="4rem"
      >
        <Heading fontFamily="Oswald" fontSize={45}>
          Contact me today!
        </Heading>

        <Icon as={PhoneIcon} m="2rem 0rem 0.5rem 0" />
        <Text>+421949 506 171</Text>

        <Icon as={AlternateEmailIcon} m="2rem 0rem 0.5rem 0" />
        <Text>petergacj@gmail.com</Text>

        <Icon as={PersonIcon} m="2rem 0rem 0.5rem 0" />
        <Text>
          For personal meeting send me message and we can set up personal
          meeting
        </Text>
        <Flex m={4} justifyContent="center">
          <Link
            to="https://www.linkedin.com/in/jakub-petergáč-050338238/"
            target="_blanc"
          >
            <LazyLoadImage src={linkedin} width="40px" />
          </Link>
          <Link
            to="https://github.com/Asajco"
            target="_blanc"
            style={{ marginLeft: '1rem' }}
          >
            <LazyLoadImage src={github} width="40px" />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Contact
