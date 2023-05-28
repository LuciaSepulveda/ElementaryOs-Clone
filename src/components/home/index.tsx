import {
  chakra,
  Box,
  Center,
  Flex,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { useChangeLanguage, useLanguage } from "@/context/hooks"
import { AnimatePresence, motion } from "framer-motion"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

const MotionText = motion(Text)
const MotionBox = motion(Box)

const Home = () => {
  const [hoverPage, setHoverPage] = useState<"" | "formal" | "elementary">("")
  const language = useLanguage()
  const bg = useColorModeValue("rgb(101, 212, 97)", "rgb(120, 233, 143)")
  const bg2 = useColorModeValue("rgb(97, 211, 196)", "rgb(174, 139, 246)")
  const { colorMode, toggleColorMode } = useColorMode()
  const changeLanguage = useChangeLanguage()

  return (
    <main style={{ height: "100vh", width: "100%", overflow: "hidden" }}>
      <HStack
        m="auto"
        maxWidth="container.xl"
        justifyContent="flex-end"
        w="full"
        h={8}
        px={6}
        my={2}
      >
        <chakra.button
          onClick={() => changeLanguage(language === "ES" ? "EN" : "ES")}
        >
          <Text fontWeight="bold">{language === "ES" ? "EN" : "ES"}</Text>
        </chakra.button>
        <Center as="button" onClick={toggleColorMode}>
          {colorMode === "light" && <MoonIcon />}
          {colorMode !== "light" && <SunIcon />}
        </Center>
      </HStack>
      <VStack
        justifyContent={["flex-start", "center"]}
        maxWidth="container.xl"
        px={[4, 0]}
        h="full"
        m="auto"
        position="relative"
      >
        <Heading textAlign="center" as="h1" pb={0} fontSize="5xl">
          {language === "ES" ? "Elige un portfolio" : "Choose a portfolio"}
        </Heading>
        <MotionText
          fontSize="sm"
          initial={{ width: 0 }}
          animate={{ width: "fit-content" }}
          transition={{ duration: 0.6 }}
          margin="auto"
          whiteSpace="nowrap"
          overflow="hidden"
        >
          {language === "ES"
            ? `(Los dos tiene la misma información)`
            : `(Both have the same information)`}
        </MotionText>
        <Flex
          flexDirection={["column", "row"]}
          width="full"
          maxW="800px"
          h={[96, 80]}
          style={{ marginTop: "40px" }}
          borderRadius="md"
          position="relative"
        >
          <Box
            zIndex={99}
            position="absolute"
            top="-110px"
            w="100px"
            height="100px"
            display={["none", "block"]}
          >
            <AnimatePresence>
              {hoverPage === "formal" && (
                <>
                  <Box h={8} w="100%" position="relative" top={0} left={-20}>
                    <MotionBox
                      zIndex={0}
                      position="absolute"
                      h="104%"
                      bg={bg}
                      bottom={0}
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                        delay: 0.3,
                      }}
                      exit={{ width: 0 }}
                      whileInView={{ width: "260px" }}
                      initial={{ width: 0 }}
                      viewport={{ once: true }}
                      borderRadius="sm"
                    />
                    <MotionText
                      initial={{ width: 0 }}
                      animate={{ width: "260px" }}
                      exit={{ width: 0 }}
                      whiteSpace="nowrap"
                      overflow="hidden"
                      transition={{ duration: 0.6, delay: 0.2 }}
                      color="black"
                      position="absolute"
                      textAlign="center"
                      fontSize="xl"
                      zIndex={1}
                      fontWeight="bold"
                    >
                      {language === "ES"
                        ? "Más formal para recruiters"
                        : "More formal for recruiters"}
                    </MotionText>
                  </Box>
                  <svg
                    width="100px"
                    height="100px"
                    style={{ transform: "rotateX(180deg) rotateZ(10deg)" }}
                  >
                    <motion.path
                      initial={{ strokeDashoffset: 400 }}
                      animate={{ strokeDashoffset: 0 }}
                      exit={{ strokeDashoffset: 400 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
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
                        delay: 0.4,
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
                        delay: 0.4,
                      }}
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M39.8,78.5c-7.2,1.7-14.3,3.3-21.5,4.9"
                    />
                  </svg>
                </>
              )}
            </AnimatePresence>
          </Box>
          <Box
            zIndex={99}
            position="absolute"
            top="-40px"
            right={"-90px"}
            w="100px"
            height="100px"
            display={["none", "block"]}
          >
            <AnimatePresence>
              {hoverPage === "elementary" && (
                <>
                  <Box h={8} w="100%" position="relative" top={6}>
                    <MotionBox
                      left={-12}
                      zIndex={0}
                      position="absolute"
                      h="104%"
                      bg={bg2}
                      bottom={0}
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                        delay: 0.3,
                      }}
                      exit={{ width: 0 }}
                      whileInView={{ width: "180px" }}
                      initial={{ width: 0 }}
                      viewport={{ once: true }}
                      borderRadius="sm"
                    />
                    <MotionText
                      initial={{ width: 0 }}
                      animate={{ width: "180px" }}
                      exit={{ width: 0 }}
                      whiteSpace="nowrap"
                      overflow="hidden"
                      transition={{ duration: 0.6, delay: 0.2 }}
                      top={0}
                      left={-12}
                      position="absolute"
                      textAlign="center"
                      fontSize="xl"
                      fontWeight="bold"
                      color="black"
                    >
                      {language === "ES" ? "Con más onda (?)" : "More fun (?)"}
                    </MotionText>
                  </Box>
                  <svg
                    width="100px"
                    height="100px"
                    style={{ transform: "rotateZ(238deg)" }}
                  >
                    <motion.path
                      initial={{ strokeDashoffset: 400 }}
                      animate={{ strokeDashoffset: 0 }}
                      exit={{ strokeDashoffset: 400 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      stroke={bg2}
                      fill="none"
                      strokeDasharray="400"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.3,2.5c-5.8,5-8.7,12.7-9,20.3s2,15.1,5.3,22c6.7,14,18,25.8,31.7,33.1"
                    />
                    <motion.path
                      stroke={bg2}
                      fill="none"
                      strokeDasharray="400"
                      initial={{ strokeDashoffset: 400 }}
                      animate={{ strokeDashoffset: 0 }}
                      exit={{ strokeDashoffset: 400 }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        delay: 0.4,
                      }}
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M40.6,78.1C39,71.3,37.2,64.6,35.2,58"
                    />
                    <motion.path
                      stroke={bg2}
                      fill="none"
                      strokeDasharray="400"
                      initial={{ strokeDashoffset: 400 }}
                      animate={{ strokeDashoffset: 0 }}
                      exit={{ strokeDashoffset: 400 }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        delay: 0.4,
                      }}
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M39.8,78.5c-7.2,1.7-14.3,3.3-21.5,4.9"
                    />
                  </svg>
                </>
              )}
            </AnimatePresence>
          </Box>
          <Box
            width={
              hoverPage === "formal"
                ? ["100%", "70%"]
                : hoverPage === "elementary"
                ? ["100%", "30%"]
                : ["100%", "50%"]
            }
            transition="all 0.3s ease"
            position="relative"
            height="full"
            onMouseEnter={() => setHoverPage("formal")}
            onMouseLeave={() => setHoverPage("")}
          >
            <Link href="/formal" aria-label="Portfolio formal">
              <Center
                bottom={0}
                zIndex={1}
                width="full"
                h="30%"
                bg="rgba(0,0,0, 0.9)"
                position="absolute"
                display={["block", "none"]}
              >
                <Text color="white" textAlign="center" fontWeight="bold">
                  {language === "ES"
                    ? "Más formal para recruiters"
                    : "More formal to recruiters"}
                </Text>
              </Center>
              <Center
                display={["none", "block"]}
                transition="all 0.3s ease"
                position="absolute"
                width="full"
                h="full"
                bg={
                  hoverPage === "elementary"
                    ? "rgba(0,0,0, 0.9)"
                    : "transparent"
                }
                top="0"
                zIndex={1}
              />
              <Image
                objectFit="cover"
                fill={true}
                src={colorMode === "light" ? "/formalLight.png" : "/formal.png"}
                alt="alt"
              />
            </Link>
          </Box>
          <Box
            width={
              hoverPage === "elementary"
                ? ["100%", "70%"]
                : hoverPage === "formal"
                ? ["100%", "30%"]
                : ["100%", "50%"]
            }
            transition="all 0.3s ease"
            position="relative"
            height="full"
            onMouseEnter={() => setHoverPage("elementary")}
            onMouseLeave={() => setHoverPage("")}
          >
            <Link href="/elementary" aria-label="Portfolio formal">
              <Center
                bottom={0}
                zIndex={1}
                width="full"
                h="30%"
                bg="rgba(0,0,0, 0.9)"
                position="absolute"
                display={["block", "none"]}
              >
                <Text color="white" textAlign="center" fontWeight="bold">
                  {language === "ES" ? "Con más onda (?)" : "More fun (?)"}
                </Text>
              </Center>
              <Center
                transition="all 0.3s ease"
                position="absolute"
                width="full"
                h="full"
                bg={hoverPage === "formal" ? "rgba(0,0,0, 0.9)" : "transparent"}
                top="0"
                zIndex={1}
                display={["none", "block"]}
              />
              <Image
                objectFit="cover"
                fill={true}
                src={colorMode === "light" ? "/elementaryLight.png" : "/elementary.png"}
                alt="alt"
              />
            </Link>
          </Box>
        </Flex>
      </VStack>
    </main>
  )
}

export default Home
