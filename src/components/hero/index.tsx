import { useLanguage } from "@/context/hooks"
import { Box, Heading, VStack, useColorModeValue } from "@chakra-ui/react"
import { motion } from "framer-motion"

const MotionBox = motion(Box)

const Hero = () => {
  const language = useLanguage()
  return (
    <VStack py={[48, 16]} px={0} h="100vh" position="relative">
      <MotionBox
        position="absolute"
        bg="rgb(174, 139, 246)"
        width={[0, 40]}
        height={["50%", "100%"]}
        left="0rem"
        initial={{ rotate: -90 }}
        animate={{ rotate: -45 }}
        transition={{ duration: 0.8 }}
        boxShadow="md"
        borderRadius="md"
      />
      <MotionBox
        position="absolute"
        bg="rgb(127, 193, 250)"
        width={[20, 36]}
        height="100%"
        left="-6rem"
        top="0rem"
        zIndex={0}
        initial={{ rotate: 60 }}
        animate={{ rotate: 10 }}
        transition={{ duration: 1.1 }}
        boxShadow="2xl"
        borderRadius="md"
      />
      <MotionBox
        position="absolute"
        bg="rgb(174, 139, 246)"
        width={[20, 36]}
        height={["60%", "80%"]}
        right="0rem"
        top={["20%", "0"]}
        zIndex={0}
        initial={{ rotate: 10 }}
        animate={{ rotate: 30 }}
        transition={{ duration: 1.2 }}
        boxShadow="md"
        borderRadius="md"
      />
      <MotionBox
        position="absolute"
        bg="rgb(127, 193, 250)"
        width={[0, 40]}
        height={["40%", "60%"]}
        right={["-4rem", "-8rem"]}
        bottom={["0", "0"]}
        top="auto"
        zIndex={0}
        initial={{ rotate: 10 }}
        animate={{ rotate: -35 }}
        transition={{ duration: 1 }}
        boxShadow="md"
        borderRadius="md"
      />
      <VStack alignItems="center" w="full" justifyContent="center" h="full">
        <Box position="relative" p={0} ml="auto" mr="auto" mb={6}>
          <Heading
            zIndex={1}
            position="relative"
            as="h1"
            size="3xl"
            textAlign="center"
            color="black"
          >
            {language === "ES" ? "Hola, soy Lucía" : "Hey, I'm Lucía"}
          </Heading>
          <MotionBox
            zIndex={0}
            position="absolute"
            h="120%"
            bg={useColorModeValue("rgb(101, 212, 97)", "rgb(120, 233, 143)")}
            left="-2%"
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
        <Box position="relative" p={0} margin="auto">
          <Heading
            zIndex={1}
            position="relative"
            as="h1"
            size="3xl"
            textAlign="center"
            color="black"
          >
            {language === "ES"
              ? "Desarrolladora Frontend"
              : "Frontend Developer"}
          </Heading>

          <MotionBox
            zIndex={0}
            position="absolute"
            h="120%"
            bg={useColorModeValue("rgb(101, 212, 97)", "rgb(120, 233, 143)")}
            left="-2%"
            top="-10%"
            initial={{ width: 0 }}
            animate={{ width: "104%" }}
            transition={{
              duration: 0.6,
              delay: 0.6,
              ease: "easeInOut",
            }}
            borderRadius="sm"
          />
        </Box>
      </VStack>
      {/* <Center maxW={"40rem"} minH={96} w="full">
          <Box w={"20rem"} h="300px" bg="yellow.100" position="absolute" />
          <MotionBox
            initial={{
              x: 0,
              y: 0,
              z: 100,
              boxShadow: "6px 6px 6px rgba(0, 0, 0, 0.1)",
            }}
            animate={{
              x: [0, 20, 10],
              z: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              times: [0, 0.5, 1],
            }}
            w={"20rem"}
            h="300px"
            //bg="orange.200"
            position="absolute"
          >
            <Image objectFit="contain" fill={true} alt="Dibujo" src="/Lu.jpg" />
          </MotionBox>
        </Center> */}
    </VStack>
  )
}

export default Hero
