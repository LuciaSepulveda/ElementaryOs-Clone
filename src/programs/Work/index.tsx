import {
  HStack,
  VStack,
  Text,
  useColorModeValue,
  Flex,
  Box,
} from "@chakra-ui/react"

import { work, workEn } from "../../data/data"
import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/context/hooks"

interface Props {
  w: string
  h: string
}

const Work = ({ w, h }: Props) => {
  const bg = useColorModeValue("#F7F9F9", "#14202A")
  const bgProgram = useColorModeValue("#FFFFFF", "#14202A")
  const colorText = useColorModeValue("#0F1419", "#E6F2F3")
  const border = useColorModeValue("#EFF3F4", "#37444C")
  const imageRef = useRef<HTMLImageElement>(null)
  const [loaded, setLoaded] = useState<boolean>(false)
  const [works, setWorks] = useState(work)
  const language = useLanguage()
  const position = useColorModeValue("rgb(238, 121, 70)", "rgb(234, 98, 118)")

  useEffect(() => {
    if (
      !loaded &&
      imageRef.current?.complete &&
      imageRef.current?.naturalWidth > 0
    ) {
      setLoaded(true)
    }
  }, [loaded])

  useEffect(() => {
    if (language === "ES") {
      setWorks(work)
    } else setWorks(workEn)
  }, [language])

  return (
    <VStack
      bg={bg}
      borderBottomRadius="xl"
      h={h}
      paddingLeft={2}
      paddingRight={2}
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
        transitionTimingFunction="ease-in-out"
        w={["100%", "80%"]}
        justify="center"
        overflowY="scroll"
        pt={["400px", "450px"]}
      >
        {works.map((elem) => (
          <HStack
            key={elem.position}
            border={`1px solid ${border}`}
            color={colorText}
            p={4}
            spacing={[2, 5]}
            w="100%"
            alignItems="flex-start"
          >
            <VStack alignItems="start" w="100%">
              <Text fontWeight="bold" color={position}>
                {elem.position}
              </Text>
              <Text display={["block", "none"]}>{elem.date}</Text>
              <Text fontWeight="semibold">{elem.company}</Text>
              <VStack>
                {elem.description.map((item) => (
                  <Flex key={item} gap={2} w="100%">
                    <Box
                      borderRadius="full"
                      maxWidth="10px"
                      w="full"
                      h="10px"
                      bg={position}
                      marginTop={2}
                    />
                    <Text>{item}</Text>
                  </Flex>
                ))}
              </VStack>
            </VStack>
            <Text textAlign="right" display={["none", "block"]}>
              {elem.date}
            </Text>
          </HStack>
        ))}
      </VStack>
    </VStack>
  )
}

export default Work
