import { useLanguage } from "@/context/hooks"
import {
  Box,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react"
import { motion } from "framer-motion"

const MotionBox = motion(Box)
const MotionText = motion(Text)

const Hero = () => {
  const language = useLanguage()
  const bg = useColorModeValue("rgb(101, 212, 97)", "rgb(120, 233, 143)")

  return (
    <VStack
      py={[48, null, 16]}
      px={10}
      minH="100vh"
      position="relative"
      justify="center"
      align="center"
    >
      <VStack gap={[0, null, 10]}>
        <HStack alignItems="center" w="full" justifyContent="flex-start">
          <Text
            zIndex={1}
            position="relative"
            as="h1"
            fontSize={["2rem", null, "5.2rem"]}
            textAlign="center"
            fontWeight="semibold"
            letterSpacing="wide"
          >
            {language === "ES" ? "Hola," : "Hey,"}
          </Text>
          <Text
            zIndex={1}
            position="relative"
            as="h1"
            fontSize={["2rem", null, "5.2rem"]}
            textAlign="center"
            fontWeight="semibold"
            letterSpacing="wide"
          >
            {language === "ES" ? "soy" : "I'm"}
          </Text>
          <Box position="relative" p={0} ml="auto" mr="auto" mb={6}>
            <Heading
              zIndex={1}
              position="relative"
              as="h1"
              fontSize={["2rem", null, "5.2rem"]}
              textAlign="center"
              fontWeight="semibold"
              color="black"
              letterSpacing="wide"
            >
              Lucía
            </Heading>
            <MotionBox
              zIndex={0}
              position="absolute"
              h="120%"
              bg={useColorModeValue("rgb(101, 212, 97)", "rgb(120, 233, 143)")}
              right="-2%"
              top="-10%"
              initial={{ width: 0 }}
              animate={{ width: "104%" }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
              borderRadius="sm"
            />
          </Box>
        </HStack>
        <Stack
          justify="flex-start"
          align={["flex-end", "flex-start"]}
          gap={[0, null, 6]}
          flexDir={["column", null, "row"]}
        >
          <Box
            transform={[
              "scale(0.5) rotateX(180deg) rotateZ(180deg)",
              "scale(1)",
            ]}
            height={["50px", "100px"]}
          >
            <svg width="50px" height="100px">
              <motion.path
                initial={{ strokeDashoffset: 400 }}
                animate={{ strokeDashoffset: 0 }}
                exit={{ strokeDashoffset: 400 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
                stroke={bg}
                fill="none"
                strokeDasharray="400"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.3,2.5c-5.8,5-8.7,12.7-9,20.3s2,15.1,5.3,22c6.7,14,18,25.8,31.7,33.1"
              />
              <motion.path
                stroke={bg}
                fill="none"
                strokeDasharray="400"
                initial={{ strokeDashoffset: 400 }}
                animate={{ strokeDashoffset: 0 }}
                exit={{ strokeDashoffset: 400 }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  delay: 0.7,
                }}
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M40.6,78.1C39,71.3,37.2,64.6,35.2,58"
              />
              <motion.path
                stroke={bg}
                fill="none"
                strokeDasharray="400"
                initial={{ strokeDashoffset: 400 }}
                animate={{ strokeDashoffset: 0 }}
                exit={{ strokeDashoffset: 400 }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  delay: 0.7,
                }}
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M39.8,78.5c-7.2,1.7-14.3,3.3-21.5,4.9"
              />
            </svg>
          </Box>
          <MotionText
            fontSize={["xl", null, "2xl"]}
            textAlign={["center", null, "left"]}
            position="relative"
            zIndex={1}
            maxWidth="container.md"
            pt={[0, null, 14]}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.2,
              ease: "easeIn",
              delay: 0.5,
            }}
          >
            {language !== "ES"
              ? "I have more than a two years and a half of experience as a frontend developer, I have eager to contribute my skills and grow professionally in a new challenging role"
              : "Cuento con más de dos años y medio de experiencia como desarrolladora frontend, tengo muchas ganas de aportar mis conocimientos y crecer profesionalmente en un nuevo puesto desafiante."}
          </MotionText>
        </Stack>
      </VStack>
    </VStack>
  )
}

export default Hero
