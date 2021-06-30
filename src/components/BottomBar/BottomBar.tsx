import {Box, Flex, Image, VStack, useColorModeValue} from "@chakra-ui/react"
import * as React from "react"
import {useMediaQuery} from "react-responsive"
import {motion, useMotionValue, useSpring, useTransform, MotionValue} from "framer-motion"

import {Program} from "../../types/types"
import {useCloseAllPrograms, useOpenProgram} from "../../context/hooks"
import Icon from "../Icon/Icon"

interface Props {
  programs: Program[]
}

const BottomBar: React.FC<Props> = ({programs}) => {
  const openProgram = useOpenProgram()
  const isPortrait = useMediaQuery({query: "(orientation: portrait)"})
  const closeAllPrograms = useCloseAllPrograms()
  const bgBar = useColorModeValue("rgba(255,255,255,0.2)", "rgba(0,0,0,0.3)")
  const mouseX = useMotionValue<any>(null)

  return (
    <Flex justifyContent="center" m="auto" position="sticky" w="100%" zIndex="sticky">
      <Flex
        alignItems="flex-end"
        backdropFilter="blur(1px)"
        bg={bgBar}
        borderRadius="2xl"
        borderTopLeftRadius="10px"
        borderTopRightRadius="10px"
        boxShadow="md"
        height="75px"
        p={2}
        onMouseLeave={() => mouseX.set(null)}
        onMouseMove={(event: React.MouseEvent) => mouseX.set(event.nativeEvent.x)}
      >
        {programs.map((elem) => {
          if (elem.name !== "Wallpapers")
            return (
              <>
                {!isPortrait && (
                  <VStack key={elem.name} as="button" onClick={() => openProgram(elem)}>
                    <Icon mouseX={mouseX} src={elem.img} />
                    {(elem.open === true || elem.minimized === true) && (
                      <Box
                        bg="#01afff"
                        borderRadius="50%"
                        boxShadow="0 0 17px 3px #01afff,0 0 4px 2px #01afff"
                        h="3px"
                        w="3px"
                      />
                    )}
                    {elem.open !== true && elem.minimized !== true && <Box h="3px" w="3px" />}
                  </VStack>
                )}
                {isPortrait && (
                  <VStack
                    key={elem.name}
                    as="button"
                    onClick={() => {
                      openProgram(elem), closeAllPrograms(elem)
                    }}
                  >
                    <motion.div whileHover={{scale: 1.2}} whileTap={{y: -50}}>
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
                    {elem.open !== true && elem.minimized !== true && <Box h="3px" w="3px" />}
                  </VStack>
                )}
              </>
            )
          else
            return (
              <>
                {!isPortrait && (elem.open === true || elem.minimized === true) && (
                  <VStack key={elem.name} as="button" onClick={() => openProgram(elem)}>
                    <Icon mouseX={mouseX} src={elem.img} />
                    {(elem.open === true || elem.minimized === true) && (
                      <Box
                        bg="#01afff"
                        borderRadius="50%"
                        boxShadow="0 0 17px 3px #01afff,0 0 4px 2px #01afff"
                        h="3px"
                        w="3px"
                      />
                    )}
                    {elem.open !== true && elem.minimized !== true && <Box h="3px" w="3px" />}
                  </VStack>
                )}
                {isPortrait && (elem.open === true || elem.minimized === true) && (
                  <VStack
                    key={elem.name}
                    as="button"
                    onClick={() => {
                      openProgram(elem), closeAllPrograms(elem)
                    }}
                  >
                    <motion.div whileHover={{scale: 1.2}} whileTap={{y: -50}}>
                      <Image alignSelf="center" h="50px" src={elem.img} w="50px" />
                    </motion.div>
                    <Box
                      bg="#01afff"
                      borderRadius="50%"
                      boxShadow="0 0 17px 3px #01afff,0 0 4px 2px #01afff"
                      h="3px"
                      w="3px"
                    />
                  </VStack>
                )}
              </>
            )
        })}
      </Flex>
    </Flex>
  )
}

export default BottomBar
