import {Box, Flex, Image} from "@chakra-ui/react"
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
      bg="rgba(255,255,255,0.2)"
      borderRadius="xl"
      boxShadow="md"
      h="70px"
      m="auto"
      mt="-10px"
      p="2%"
      position="sticky"
      w="fit-content"
    >
      {programs.map((elem) => (
        <Box
          key={elem.name}
          alignSelf="center"
          as="button"
          h="50px"
          m="10px"
          w="50px"
          onClick={() => openProgram(elem)}
        >
          <Image alignSelf="center" src={elem.img} />
        </Box>
      ))}
    </Flex>
  )
}

export default BottomBar
