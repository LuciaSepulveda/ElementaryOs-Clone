import { useLanguage } from "@/context/hooks"
import {
  Box,
  Center,
  Flex,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react"
import { motion } from "framer-motion"

const MotionBox = motion(Box)

const About = () => {
  const language = useLanguage()
  return (
    <Center h="100vh" position="relative" id="about">
      <VStack zIndex={2}>
        <Box position="relative">
          <Heading as="h2" zIndex={2} mb={6}>
            {language === "ES" ? "SOBRE MI" : "ABOUT ME"}
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
        <Flex flexWrap="wrap" maxW="3xl">
          <Text
            fontSize={["xl", "2xl"]}
            textAlign="justify"
            m={0}
            display="inline"
          >
            {language === "ES" ? `Cuento con` : `I have`}
          </Text>
          <Box position="relative" m={0} display="inline" mx={2}>
            <Text
              fontSize={["xl", "2xl"]}
              textAlign="justify"
              position="relative"
              zIndex={1}
            >
              {language !== "ES"
                ? "one year and a half of experience"
                : "un año y medio de experiencia"}
            </Text>
            <MotionBox
              zIndex={0}
              position="absolute"
              h="100%"
              bg={useColorModeValue("rgb(238, 121, 70)", "rgb(234, 98, 118)")}
              bottom={0}
              left="-2%"
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.6,
              }}
              whileInView={{ width: "104%" }}
              initial={{ width: 0 }}
              viewport={{ once: true }}
              borderRadius="sm"
              opacity={0.9}
            />
          </Box>
          <Text fontSize={["xl", "2xl"]} textAlign="justify" display="inline">
            {language === "ES"
              ? `como desarrolladora Frontend.`
              : `on frontend development.`}
          </Text>
          <Text fontSize={["xl", "2xl"]} textAlign="justify" display="inline">
            {language === "ES"
              ? `Trabajé para una agencia creativa donde tuve la oportunidad de formar
          parte de distintos proyectos.`
              : `I worked for a creative agency where I had the opportunity to be part of different projects.`}
          </Text>
          <Text
            mt={2}
            fontSize={["xl", "2xl"]}
            textAlign="justify"
            display="inline"
          >
            {language === "ES"
              ? `Puedo trasladar las maquetas de diseño a código limpio, eficiente y mantenible, además de resolver problemas
              y buscar soluciones creativas a los desafíos técnicos que se presenten.`
              : `I consider myself proficient in translating design mockups into clean, efficient and maintainable code and adept at problem-solving and finding creative solutions to technical challenges.`}
          </Text>
          <Text
            mt={2}
            fontSize={["xl", "2xl"]}
            textAlign="justify"
            display="inline"
          >
            {language === "ES"
              ? " Tengo muchas ganas de aportar mis conocimientos y crecer profesionalmente en un nuevo puesto desafiante."
              : `I have eager to contribute my skills and grow professionally in a
            new challenging role.`}
          </Text>
        </Flex>
      </VStack>
    </Center>
  )
}

export default About
