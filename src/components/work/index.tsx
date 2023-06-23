import { useLanguage } from "@/context/hooks"
import { work, workEn } from "@/data/data"
import {
  Box,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  useColorMode,
  Flex,
} from "@chakra-ui/react"
import { Fragment, useEffect, useState } from "react"
import { motion } from "framer-motion"

const MotionBox = motion(Box)

const Work = () => {
  const language = useLanguage()
  const [works, setWorks] = useState(work)
  const { colorMode } = useColorMode()

  const getRandomInt = () => {
    return Math.floor(Math.random() * 4)
  }

  useEffect(() => {
    if (language === "ES") {
      setWorks(work)
    } else setWorks(workEn)
  }, [language])

  const colors = [
    useColorModeValue("rgb(84, 167, 248)", "rgb(127, 193, 250)"),
    useColorModeValue("rgb(101, 212, 97)", "rgb(120, 233, 143)"),
    useColorModeValue("rgb(238, 121, 70)", "rgb(234, 98, 118)"),
    useColorModeValue("rgb(243, 174, 66)", "rgb(223, 200, 122)"),
    useColorModeValue("rgb(97, 211, 196)", "rgb(174, 139, 246)"),
  ]

  return (
    <VStack minH="100vh" py={10} id="work" zIndex={1} position="relative">
      <Box position="relative" mb={4}>
        <Heading textAlign="center" as="h2" zIndex={2} mb={6}>
          {language === "ES" ? "EXPERIENCIA LABORAL" : "WORK EXPERIENCE"}
        </Heading>
        <MotionBox
          zIndex={0}
          position="absolute"
          h="4%"
          bg={useColorModeValue("rgb(101, 212, 97)", "rgb(120, 233, 143)")}
          bottom={6}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.3,
          }}
          whileInView={{ width: "100%" }}
          initial={{ width: 0 }}
          viewport={{ once: true }}
          borderRadius="sm"
        />
      </Box>
      <Flex flexDir="column" w="full" maxW="800px" gap={14} py={14}>
        {works.map((work, index) => (
          <Fragment key={work.position}>
            <Flex
              flexDirection={["column", "row"]}
              w="full"
              justify="space-between"
              p={4}
              gap={4}
            >
              <Flex flexDirection="column" maxW="500px">
                <Box position="relative" mb={2} w="fit-content">
                  <Text
                    position="relative"
                    zIndex={1}
                    fontSize="2xl"
                    fontWeight="bold"
                    color="black"
                  >
                    {work.position}
                  </Text>
                  <MotionBox
                    zIndex={0}
                    position="absolute"
                    h="100%"
                    left="-2%"
                    bg={colors[getRandomInt()]}
                    bottom={0}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                      delay: 0.3,
                    }}
                    whileInView={{ width: "104%" }}
                    initial={{ width: 0 }}
                    viewport={{ once: true }}
                    borderRadius="sm"
                  />
                </Box>
                <Text fontWeight="semibold" mb={2} fontSize="xl">
                  {work.company}
                </Text>
                <Text mb={2} fontSize="lg" display={["block", "none"]}>
                  {work.date}
                </Text>
                <VStack alignItems="center">
                  {work.description.map((item) => (
                    <Flex key={item} gap={2}>
                      <Box
                        borderRadius="full"
                        maxWidth="10px"
                        w="full"
                        h="10px"
                        bg={colors[getRandomInt()]}
                        marginTop={2}
                      />
                      <Text fontSize="lg">{item}</Text>
                    </Flex>
                  ))}
                </VStack>
              </Flex>
              <Text fontSize="lg" display={["none", "block"]}>
                {work.date}
              </Text>
            </Flex>
            {index !== works.length - 1 && (
              <MotionBox
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                whileInView={{ width: "100%" }}
                initial={{ width: 0 }}
                viewport={{ once: true }}
                borderRadius="sm"
                position="relative"
                alignSelf="center"
                w="full"
                h="1px"
                bg={colors[getRandomInt()]}
              />
            )}
          </Fragment>
        ))}
      </Flex>
    </VStack>
  )
}

export default Work
