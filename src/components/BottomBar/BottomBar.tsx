import {Box, Flex, Image, VStack, Link, useColorModeValue} from "@chakra-ui/react"
import * as React from "react"
import {useMediaQuery} from "react-responsive"
import {motion} from "framer-motion"

import {Program} from "../../types/types"
import {useCloseAllPrograms, useOpenProgram} from "../../context/hooks"

interface Props {
  programs: Program[]
}

const BottomBar: React.FC<Props> = ({programs}) => {
  const openProgram = useOpenProgram()
  const isPortrait = useMediaQuery({query: "(orientation: portrait)"})
  const closeAllPrograms = useCloseAllPrograms()
  const bgBar = useColorModeValue("rgba(255,255,255,0.2)", "rgba(0,0,0,0.3)")

  return (
    <Flex
      backdropFilter="blur(1px)"
      bg={bgBar}
      borderRadius="2xl"
      boxShadow="md"
      h="75px"
      m="auto"
      p={2}
      position="sticky"
      transitionTimingFunction="ease-in-out"
      w="fit-content"
    >
      {programs.map((elem) => {
        if (elem.name !== "Mail")
          return (
            <>
              {!isPortrait && (
                <VStack
                  key={elem.name}
                  alignSelf="center"
                  as="button"
                  h="65px"
                  m="5px"
                  w="60px"
                  onClick={() => openProgram(elem)}
                >
                  <motion.div
                    whileHover={{scale: 1.2, transition: {duration: 0.1}}}
                    whileTap={{y: -200, transition: {duration: 0.5}}}
                  >
                    <Image alignSelf="center" h="50px" src={elem.img} w="50px" />
                  </motion.div>
                  {(elem.open === true || elem.minimized === true) && (
                    <Box
                      bg="#01afff"
                      borderRadius="50%"
                      boxShadow="0 0 17px 3px #01afff,0 0 4px 2px #01afff"
                      h="3px"
                      w="3px"
                    />
                  )}
                </VStack>
              )}
              {isPortrait && (
                <VStack
                  key={elem.name}
                  alignSelf="center"
                  as="button"
                  h="65px"
                  m="5px"
                  w="60px"
                  onClick={() => {
                    openProgram(elem), closeAllPrograms(elem)
                  }}
                >
                  <motion.div
                    whileHover={{scale: 1.2}}
                    whileTap={{y: -200, transition: {duration: 0.5}}}
                  >
                    <Image alignSelf="center" h="50px" src={elem.img} w="50px" />
                  </motion.div>
                  {(elem.open === true || elem.minimized === true) && (
                    <Box
                      bg="#01afff"
                      borderRadius="50%"
                      boxShadow="0 0 17px 3px #01afff,0 0 4px 2px #01afff"
                      h="3px"
                      w="3px"
                    />
                  )}
                </VStack>
              )}
            </>
          )
        else
          return (
            <Link key={elem.name} h="100%" href="mailto:luciabsep18@gmail.com">
              <VStack alignSelf="center" h="60px" m="5px" mt="0px" w="60px">
                <motion.div
                  whileHover={{scale: 1.2}}
                  whileTap={{y: -200, transition: {duration: 0.5}}}
                >
                  <Image alignSelf="center" h="50px" src={elem.img} w="50px" />
                </motion.div>
              </VStack>
            </Link>
          )
      })}
    </Flex>
  )
}

export default BottomBar
