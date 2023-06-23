import Hero from "@/components/hero"
import Header from "@/components/header"
import {
  Box,
  Container,
  VStack,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import { motion } from "framer-motion"
import { useState } from "react"
import Footer from "@/components/footer"
import Work from "@/components/work"

const MotionBox = motion(Box)

const Formal = () => {
  const bg = useColorModeValue("rgb(244, 244, 244)", "rgb(35, 42, 56)")
  const [view, setView] = useState(false)

  return (
    <chakra.div px={8} bg={bg} h="full" w="full" position="relative" overflow="hidden">
      <Header />
      <chakra.main w="full">
        <VStack
          position="absolute"
          maxWidth="1400px"
          h="100%"
          left="0"
          right="0"
          margin="auto"
          w="full"
          zIndex={0}
        >
          <Box h="100vh" position="relative" w="full">
            {/* <MotionBox
              position="absolute"
              bg={useColorModeValue("rgb(97, 211, 196)", "rgb(174, 139, 246)")}
              width={[0, 40]}
              height={["50%", "80%"]}
              left="2rem"
              top={10}
              initial={{ rotate: -90 }}
              animate={{ rotate: -45 }}
              transition={{ duration: 0.8 }}
              boxShadow="md"
              borderRadius="md"
            />
            <MotionBox
              position="absolute"
              bg={useColorModeValue("rgb(84, 167, 248)", "rgb(127, 193, 250)")}
              width={[20, 36]}
              height="100%"
              left="0rem"
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
              bg={useColorModeValue("rgb(97, 211, 196)", "rgb(174, 139, 246)")}
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
              bg={useColorModeValue("rgb(84, 167, 248)", "rgb(127, 193, 250)")}
              width={[0, 40]}
              height={["40%", "60%"]}
              right={["-4rem", "0rem"]}
              bottom={["0", "0"]}
              top="auto"
              zIndex={0}
              initial={{ rotate: 10 }}
              animate={{ rotate: -35 }}
              transition={{ duration: 1 }}
              boxShadow="md"
              borderRadius="md"
            /> */}
          </Box>
          <MotionBox
            w="full"
            h="100vh"
            position="relative"
            onViewportEnter={() => setView(true)}
          >
            {/* <MotionBox
              zIndex={0}
              position="absolute"
              top={10}
              right="0"
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: 0.6,
              }}
              border={`14px solid ${useColorModeValue("rgb(101, 212, 97)", "rgb(120, 233, 143)")}`}
              initial={{ width: "100px", height: "100px", opacity: 0 }}
              animate={{
                width: view && "350px",
                x: view && 50,
                height: view && "350px",
                opacity: view && 1,
              }}
              viewport={{ once: true }}
              borderRadius="full"
              boxShadow="lg"
              display={["none !important", "block"]}
            />
            <MotionBox
              zIndex={0}
              position="absolute"
              bg={useColorModeValue("rgb(238, 121, 70)", "rgb(234, 98, 118)")}
              top={"20rem"}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: 0,
              }}
              animate={{
                width: view && "280px",
                x: view && 0,
                height: view && "280px",
                opacity: view && 1,
              }}
              initial={{ width: "100px", x: -200, height: "100px", opacity: 0 }}
              viewport={{ once: true }}
              borderRadius="full"
              boxShadow="lg"
              display={["none !important", "block"]}
            />
            <MotionBox
              zIndex={0}
              position="absolute"
              border={`8px solid ${useColorModeValue("rgb(243, 174, 66)", "rgb(223, 200, 122)")}`}
              bottom={"10rem"}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                delay: 0,
              }}
              whileInView={{
                width: "180px",
                height: "180px",
                opacity: view && 1,
              }}
              initial={{ width: "0px", x: 0, height: "0px", opacity: 0 }}
              viewport={{ once: true }}
              borderRadius="full"
              boxShadow="lg"
              display={["none", "block"]}
            />
            <MotionBox
              zIndex={0}
              position="absolute"
              bg={useColorModeValue("rgb(84, 167, 248)", "rgb(127, 193, 250)")}
              bottom={"2rem"}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
                delay: 0.2,
              }}
              right={20}
              whileInView={{
                width: "100px",
                height: "100px",
                opacity: view && 1,
              }}
              initial={{ width: "0px", height: "0px", opacity: 0 }}
              viewport={{ once: true }}
              borderRadius="full"
              boxShadow="lg"
              display={["none", "block"]}
            /> */}
          </MotionBox>
          <Box width="full" h="550vh"></Box>
          <MotionBox width="full" h="600px">
            <MotionBox
              position="absolute"
              bg="transparent"
              width={"300px"}
              height={"300px"}
              right={["-4rem", "0rem"]}
              bottom={["0", "0"]}
              top="auto"
              zIndex={0}
              border="10px solid rgb(127, 193, 250)"
              initial={{ rotate: 10 }}
              whileInView={{ rotate: -35 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              boxShadow="md"
              borderRadius="md"
            />
            <MotionBox
              position="absolute"
              bg="transparent"
              width={"200px"}
              height={"200px"}
              left={0}
              border="10px solid rgb(174, 139, 246)"
              initial={{ rotate: 10 }}
              whileInView={{ rotate: 70 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              boxShadow="md"
              borderRadius="md"
              display={["none", "block"]}
            />
          </MotionBox>
        </VStack>
        <Container maxWidth="container.xl" px={0} h="full">
          <Hero />
          <About />
          <Work />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </Container>
      </chakra.main>
    </chakra.div>
  )
}

export default Formal
