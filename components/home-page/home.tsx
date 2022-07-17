import { useEffect, useState } from 'react'
import {
  Flex,
  Avatar,
  Box,
  Text,
  Badge,
  Stack,
  Link,
  UnorderedList,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react'
import { MotionBox, MotionFlex } from 'components/shared/animations/motion'
import Header from 'components/shared/header'
import NextLink from 'next/link'
import { useLinkColor } from 'components/theme'
import PopularArticles from './PopularArticles'
import { BlogPostProps } from 'interfaces/interface'
import { newContent } from 'data/data'

const ANIMATION_DURATION = 0.5
const ORANGE = '#ff9400'
const emojis = ['👋', '👍', '🖐','👋', '👍', '🖐','🙏','🙇']
const salutations = [ 'Hello','Halo','Hej','Ciao','Hola','ನಮಸ್ಕಾರ','नमस्कार']

const Home: React.FC<BlogPostProps> = (props) => {
  const { posts } = props
  const linkColor = useLinkColor()
  const [showEmogi, setShowEmoji] = useState(false)
  const [emojiCounter, setEmojiCounter] = useState(-1)
  const [salutationCounter, setSalutationCounter] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (emojiCounter >= emojis.length) setEmojiCounter(0)
    }, 500)
    return () => clearInterval(interval)
  }, [emojiCounter])

  useEffect(() => {
    const interval = setInterval(() => {
      if (salutationCounter >= salutations.length) setSalutationCounter(0)
    }, 50)
    return () => clearInterval(interval)
  }, [salutationCounter])

  return (
    <Flex direction="column" align="center">
      <Flex direction={['column', 'column', 'row']}>
      
        <MotionFlex
          position="relative"
          ml={['auto', 'auto', 16]}
          m={['auto', 'initial']}
          w={['90%', '85%', '80%']}
          maxW="800px"
          opacity="0"
          justify="center"
          direction="column"
          initial={{
            opacity: 0,
            translateX: 150,
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              duration: ANIMATION_DURATION,
            },
          }}
        >
          <Box position="relative">
            <Box
              position="absolute"
              width="full"
              fontSize="2xl"
              textAlign="center"
            >
              {emojis.map((item, index) => {
                return (
                  <MotionBox
                    key={index}
                    position="absolute"
                    right="80%"
                    animate={
                      showEmogi && emojiCounter === index ? 'show' : 'hide'
                    }
                    variants={{
                      hide: { translateY: -80, opacity: 0 },
                      show: {
                        translateY: [0, -40, -60],
                        opacity: [0, 1, 0],
                      },
                    }}
                    initial="hide"
                  >
                    {item}
                  </MotionBox>
                )
              })}
            </Box>
            <MotionBox whileHover={{ translateY: -5 }} width="max-content">
              <Header
                underlineColor={ORANGE}
                emoji="👋"
                mt={0}
                cursor="pointer"
                width="max-content"
                onClick={() => {
                  setEmojiCounter((prevCounter) => prevCounter + 1)
                  setSalutationCounter((prevCounter) => prevCounter + 1)
                  setShowEmoji(true)
                }}
              >
                {salutations[salutationCounter]}
              </Header>
            </MotionBox>
          </Box>
          
        </MotionFlex>
      </Flex>

      <MotionBox
        w="100%"
        opacity="0"
        initial={{
          translateY: 80,
        }}
        animate={{
          translateY: 0,
          opacity: 1,
          transition: {
            delay: ANIMATION_DURATION - 0.1,
            duration: ANIMATION_DURATION,
          },
        }}
        zIndex={1}
      >
        <Box mt={10}>
          <ContentBox linkColor={linkColor} />
          {/* <PopularArticles posts={posts} /> */}
        </Box>
      </MotionBox>
    </Flex>
  )
}

const ContentBox = ({ linkColor }) => {
  return (
    <Stack
      mb={10}
      mx={[0, 0, 10]}
      padding={4}
      align="start"
      borderLeft="4px solid"
      borderColor={linkColor}
      color={'whatsapp'}
      _hover={{ shadow: 'lg' }}
      backgroundColor={useColorModeValue('gray.100', '#1e2533')}
      rounded="sm"
      fontSize="md"
    >
      <Text
        textAlign="center"
        color="#53c8c4"
        fontWeight="bold"
        fontSize={['md', 'lg']}
        variant="gradient"
        fromcolor="blue.400"
        tocolor="red.500"
      >
         My name is Deepak,
      </Text>
      <MotionFlex
          position="relative"
          ml={['auto', 'auto', 16]}
          m={['auto', 'initial']}
          w={['100%']}
          maxW="800px"
          opacity="1"
          justify="center"
          direction="column"
          initial={{
            opacity: 0,
            translateX: 150,
          }}

          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              duration: ANIMATION_DURATION,
            },
          }}
         >
           <Flex justify={'center'}>
          <MotionBox  w={['max-content']} whileHover={{ scale: 1.2 }} rounded="full" shadow="lg">
            <Avatar
              size={'2xl'}
              showBorder={true}
              borderColor={linkColor}
              src={'/assets/images/user_icon.png'}
            />
          </MotionBox></Flex>
      <Box as="h4" fontSize="18" fontWeight="400" mt={8} textAlign="justify">
       I have 10+ years experience in Software Engineering, developing products in the EdTech, Digital Automotive, and FinTech industries with an innate ability to quickly adapt to emerging technologies. I am studying MBA to improve my business skills, where I specialise in Innovation Management, Digital Business, and Project Management. I am considering transitioning into Product Management to leverage my technical expertise and business acumen.
     </Box>
     </MotionFlex>
      {/* <UnorderedList textAlign="left" paddingLeft={5} m={0}>
        {newContent.map((content, index) => (
          <ListItem key={index}>
            <NextLink href={content.link} passHref>
              <Link color={linkColor}>
                {content.text}
                {content.showNewTag && (
                  <Badge ml="1" colorScheme="green">
                    New
                  </Badge>
                )}
              </Link>
            </NextLink>
          </ListItem>
        ))}
      </UnorderedList> */}
    </Stack>
  )
}

export default Home
