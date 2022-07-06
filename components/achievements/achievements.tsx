import * as React from 'react'
import {
  FiPackage,
  FiHome,
  FiEdit2,
  FiUsers,
  FiBarChart2,
} from 'react-icons/fi'
import { FaTools,FaPlane,FaShieldAlt } from 'react-icons/fa'
import { BiWorld } from 'react-icons/bi'
import { VStack, Heading, Box, Link, LinkProps } from '@chakra-ui/react'
import { TimelineItem } from './Timeline'
import { PageSlideFade } from 'components/shared/animations/page-transitions'
import Header from 'components/shared/header'
import NextLink from 'next/link'
import { useLinkColor } from 'components/theme'

interface ExternalLinkProps extends LinkProps {
  url: string
  linkProps?: LinkProps
  text: string
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  url,
  linkProps,
  text,
  ...props
}) => {
  return (
    <NextLink href={url} passHref>
      <Link {...linkProps} {...props}>
        {text}
      </Link>
    </NextLink>
  )
}

const InternalLink: React.FC<ExternalLinkProps> = ({
  url,
  linkProps,
  text,
  ...props
}) => {
  return (
    <NextLink href={url} passHref>
      <Link {...linkProps} {...props}>
        {text}
      </Link>
    </NextLink>
  )
}
const Achievements = () => {
  const linkColor = useLinkColor()

  return (
    <PageSlideFade>
      <Box align="start" mb={6}>
        <Header mt={0} mb={0}>
          Achievements
        </Header>
      </Box>
      <VStack textAlign="start" align="start" mb={5}>
      <Box zIndex={5}>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2022
          </Heading>
          <Box>
            <TimelineItem icon={BiWorld}>
              Learnt  Sustainable Decisions and Organisations - Worked on scenario based hypothetical Fashion Retail{' '}
              <InternalLink color={linkColor} url="#" text={'WearingWell'} />
              {' '} for the UK market. Served as Chief Sustainability Officer.
            </TimelineItem>
           
            <TimelineItem icon={FiHome} skipTrail>
              Rebuilt my portfolio with React, Next.JS, 
              Vercel and ChakraUI {' '}
              <ExternalLink
                color={linkColor}
                url="https://github.com/deepakpadukone20/portfolio"
                text={'source on Github'}
                target="_blank"
              />
              .
            </TimelineItem>
          </Box>
        </Box>
        <Box zIndex={5}>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2021
          </Heading>
          <Box>
            <TimelineItem icon={FaTools}>
              Learnt{' '}
              <ExternalLink
                color={linkColor}
                url="https://www.typescriptlang.org"
                text={'Typescript'}
                target="_blank"
              />{' '}
              and{' '}
              <ExternalLink
                color={linkColor}
                url="https://nextjs.org"
                text={'Next.js'}
                target="_blank"
              />
            </TimelineItem>
            <TimelineItem icon={FiUsers}>Started my MBA in {' '}
            <ExternalLink
                color={linkColor}
                url="https://www.nottingham.ac.uk/"
                text={'University of Nottingham'}
                target="_blank"
              />
              </TimelineItem>
              
            <TimelineItem icon={FiPackage}>
              Published 3 posts on my portfolio website{' '}
              <InternalLink color={linkColor} url="/blog" text={'Blog'} />
            </TimelineItem>
            <TimelineItem icon={FaPlane}>
              Moved to the United Kingdom 🇬🇧
            </TimelineItem>
            <TimelineItem icon={FaShieldAlt}>
              Resigned from Visa Bangalore
            </TimelineItem>
            <TimelineItem icon={FiPackage}>
              Published or contributed to{' '}
              <InternalLink
                color={linkColor}
                url="/open-source"
                text={'open-source'}
              />
            </TimelineItem>
            <TimelineItem icon={FiBarChart2}>
              CyberVision Dashboard for {' '}
              <ExternalLink
                color={linkColor}
                url="#"
                text={'Visa'}
                target="_blank"
              />
              {' '} Cybersecurity was released
            </TimelineItem>
            <TimelineItem icon={FiHome} skipTrail>
              Rebuilt my portfolio PWA with React, Next.JS and 
              Vercel,{' '}
              <ExternalLink
                color={linkColor}
                url="https://github.com/Deepakpadukone20/deepak-padukone"
                text={'source on Github'}
                target="_blank"
              />
              .
            </TimelineItem>
          </Box>
        </Box>
        <Box zIndex={5}>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2020
          </Heading>
          <Box>
            <TimelineItem icon={FiEdit2}>Wrote 5 blog posts</TimelineItem>
            <TimelineItem icon={FiPackage}>
              Published or contributed to{' '}
              <ExternalLink
                color={linkColor}
                url="https://github.com/Deepakpadukone20?tab=repositories"
                text={'32 open-source repositories'}
                target="_blank"
              />
            </TimelineItem>
            
            <TimelineItem icon={FiHome} skipTrail>
              Built my portfolio website with React and ChakraUI,{' '}
              <ExternalLink
                color={linkColor}
                url="https://github.com/Deepakpadukone20/portfolio2"
                text={'source on Github'}
                target="_blank"
              />
              .
            </TimelineItem>
          </Box>
        </Box>
      </VStack>
    </PageSlideFade>
  )
}

export default Achievements
