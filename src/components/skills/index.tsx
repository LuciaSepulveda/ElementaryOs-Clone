import { useLanguage } from "@/context/hooks"
import { techs, techsEn } from "@/data/data"
import {
  Box,
  Heading,
  VStack,
  Text,
  Center,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const MotionBox = motion(Box)

const Skills = () => {
  const [arrayTech, setArrayTech] = useState(techs)
  const language = useLanguage()
  const getRandomInt = () => {
    return Math.floor(Math.random() * 4)
  }

  useEffect(() => {
    if (language === "ES") {
      setArrayTech(techs)
    } else setArrayTech(techsEn)
  }, [language])

  const colors = [
    useColorModeValue("rgb(84, 167, 248)", "rgb(127, 193, 250)"),
    useColorModeValue("rgb(101, 212, 97)", "rgb(120, 233, 143)"),
    useColorModeValue("rgb(238, 121, 70)", "rgb(234, 98, 118)"),
    useColorModeValue("rgb(243, 174, 66)", "rgb(223, 200, 122)"),
    useColorModeValue("rgb(97, 211, 196)", "rgb(174, 139, 246)"),
  ]

  return (
    <Center h="100vh" id="skills">
      <VStack maxW="4xl">
        <Box position="relative" pt={8}>
          <Heading as="h2" zIndex={2} mb={6}>
            {language === "ES" ? "HABILIDADES" : "SKILLS"}
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
        <Flex
          justifyContent="center"
          flexWrap="wrap"
          gap={4}
          alignItems="center"
          pt={4}
        >
          {arrayTech.map((tech, index) => (
            <MotionBox
              w={48}
              key={tech}
              initial={{
                border: `2px solid transparent`,
                opacity: 0,
              }}
              whileInView={{
                border: `2px solid ${colors[getRandomInt()]}`,
                opacity: 1,
              }}
              transition={{ duration: 0.4, delay: 0.1 }}
              borderRadius="sm"
              viewport={{ once: true }}
            >
              <Text fontSize="2xl" fontWeight="bold" textAlign="center">
                {tech}
              </Text>
            </MotionBox>
          ))}
        </Flex>
      </VStack>
    </Center>
  )
}

export default Skills
