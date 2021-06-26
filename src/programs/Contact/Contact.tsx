import * as React from "react"
import {Box, HStack, Image, VStack, Text, useColorModeValue, Link} from "@chakra-ui/react"

import {social} from "../../data/data"
import draw from "../../assets/undraw_Social.png"

interface Props {
  w: string
  h: string
}

const Contact: React.FC<Props> = ({w, h}) => {
  const bg = useColorModeValue("#F7F9F9", "#14202A")
  const bgProgram = useColorModeValue("#FFFFFF", "#14202A")
  const colorText = useColorModeValue("#0F1419", "#E6F2F3")
  const border = useColorModeValue("#EFF3F4", "#37444C")

  return (
    <VStack
      bg={bg}
      borderBottomRadius="xl"
      h={h}
      paddingLeft={2}
      paddingRight={2}
      transitionDuration="0.4s"
      transitionTimingFunction="ease-in-out"
      w={w}
    >
      <VStack
        bg={bgProgram}
        border={`1px solid ${border}`}
        borderBottom="none"
        borderTop="none"
        h="100%"
        maxWidth="600px"
        spacing={0}
        transitionDuration="0.4s"
        transitionTimingFunction="ease-in-out"
        w={["90%", "70%"]}
      >
        <Box align="center" bg="white" mb={4} w="100%">
          <Image h="150px" src={draw} />
        </Box>
        {social.map((elem) => (
          <HStack
            key={elem.name}
            border={`1px solid ${border}`}
            color={colorText}
            p={4}
            spacing={5}
            w="80%"
          >
            <Image h="50px" src={elem.logo} />
            <VStack alignItems="start" w="100%">
              <Text fontWeight="bold">{elem.name}</Text>
              <Text as="a" href={elem.link}>
                {elem.link}
              </Text>
            </VStack>
          </HStack>
        ))}
        <Text color="#76C4C0">Hola</Text>
        <Text color="#A29AED">Hola</Text>
      </VStack>
    </VStack>
  )
}

export default Contact
