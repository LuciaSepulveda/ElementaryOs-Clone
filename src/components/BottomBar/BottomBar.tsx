import {Box, Flex, Image, VStack} from "@chakra-ui/react"
import * as React from "react"

import {Program} from "../../types/types"
import {useOpenProgram} from "../../context/hooks"

interface Props {
  programs: Program[]
}

const BottomBar: React.FC<Props> = ({programs}) => {
  const openProgram = useOpenProgram()

  return (
    <Flex
      backdropFilter="blur(1px)"
      bg="rgba(255,255,255,0.2)"
      borderRadius="xl"
      boxShadow="md"
      h="75px"
      m="auto"
      mt="-12px"
      p={1}
      position="sticky"
      w="fit-content"
    >
      {programs.map((elem) => (
        <VStack
          key={elem.name}
          alignSelf="center"
          as="button"
          h="65px"
          m="5px"
          w="60px"
          onClick={() => openProgram(elem)}
        >
          <Image alignSelf="center" h="50px" src={elem.img} w="50px" />
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
      ))}
    </Flex>
  )
}

export default BottomBar
