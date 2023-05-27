import { useChangeLanguage, useLanguage } from "@/context/hooks"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import {
  Box,
  chakra,
  Center,
  Container,
  HStack,
  Text,
  useColorModeValue,
  useColorMode,
  VStack,
} from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Header = () => {
  const bg = useColorModeValue("rgb(206, 206, 206)", "rgb(27, 33, 46)")
  const language = useLanguage()
  const changeLanguage = useChangeLanguage()
  const { colorMode, toggleColorMode } = useColorMode()
  const [showMenu, setShowMenu] = useState(false)

  return (
    <Box
      as="header"
      zIndex={10}
      left="0"
      top="0"
      position="fixed"
      w="full"
      px={[0, 0, 6, 6, 6]}
    >
      <Container
        bg={bg}
        maxW="container.xl"
        px={3}
        py={3}
        borderRadius={[0, 0, "full", "full", "full"]}
        boxShadow="md"
        w="full"
        mt={[0, 0, 2, 2, 2]}
      >
        <HStack justify="space-between">
          <Center
            position="relative"
            w={12}
            h={12}
            borderRadius="50%"
            overflow="hidden"
          >
            <Link href="/formal">
              <Image fill={true} src="/logo.jpg" alt="logo" />
            </Link>
          </Center>
          <HStack gap={4} display={["none", "none", "flex", "flex", "flex"]}>
            <Link href="#about">
              <Text fontWeight="bold">
                {language === "ES" ? "Sobre mi" : "About me"}
              </Text>
            </Link>
            <Link href="#skills">
              <Text fontWeight="bold">
                {language === "ES" ? "Habilidades" : "Skills"}
              </Text>
            </Link>
            <Link href="#projects">
              <Text fontWeight="bold">
                {language === "ES" ? "Proyectos" : "Projects"}
              </Text>
            </Link>
            <Link href="#contact">
              <Text fontWeight="bold">
                {language === "ES" ? "Contacto" : "Contact"}
              </Text>
            </Link>
            <Link href="/">
              <Text fontWeight="bold">
                {language === "ES" ? "Inicio" : "Home"}
              </Text>
            </Link>
          </HStack>
          <HStack pr={3}>
            <chakra.button
              onClick={() => changeLanguage(language === "ES" ? "EN" : "ES")}
            >
              <Text fontWeight="bold">{language === "ES" ? "EN" : "ES"}</Text>
            </chakra.button>
            <Center as="button" onClick={toggleColorMode}>
              {colorMode === "light" && <MoonIcon />}
              {colorMode !== "light" && <SunIcon />}
            </Center>
            <chakra.button
              display={["block", "block", "none", "none", "none"]}
              bg="transparent"
              onClick={() => setShowMenu(!showMenu)}
              p={1}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d={
                    showMenu
                      ? "M26.2981 24.2981L12 10L10.2568 11.7432L24.5549 26.0413L26.2981 24.2981Z"
                      : "M28.1149 12.3262H7.89429V14.7915H28.1149V12.3262Z"
                  }
                  fill={useColorModeValue("black", "white")}
                />
                <path
                  d={
                    showMenu
                      ? "M24.2981 10L10 24.2981L11.7432 26.0413L26.0413 11.7432L24.2981 10Z"
                      : "M28.1149 17.0167H7.89429V19.4819H28.1149V17.0167Z"
                  }
                  fill={useColorModeValue("black", "white")}
                />
                <path
                  d={
                    showMenu
                      ? ""
                      : "M28.1149 21.6979H7.89429V24.1631H28.1149V21.6979Z"
                  }
                  fill={useColorModeValue("black", "white")}
                />
              </svg>
            </chakra.button>
          </HStack>
          {showMenu && (
            <VStack
              position="absolute"
              w="full"
              h={48}
              bg={bg}
              bottom="-192px"
              left={-2}
              gap={2}
              boxShadow="xl"
            >
              <Link href="#about" onClick={() => setShowMenu(false)}>
                <Text fontWeight="bold">
                  {language === "ES" ? "Sobre mi" : "About me"}
                </Text>
              </Link>
              <Link href="#skills" onClick={() => setShowMenu(false)}>
                <Text fontWeight="bold">
                  {language === "ES" ? "Habilidades" : "Skills"}
                </Text>
              </Link>
              <Link href="#projects" onClick={() => setShowMenu(false)}>
                <Text fontWeight="bold">
                  {language === "ES" ? "Proyectos" : "Projects"}
                </Text>
              </Link>
              <Link href="#contact" onClick={() => setShowMenu(false)}>
                <Text fontWeight="bold">
                  {language === "ES" ? "Contacto" : "Contact"}
                </Text>
              </Link>
              <Link href="/" onClick={() => setShowMenu(false)}>
                <Text fontWeight="bold">
                  {language === "ES" ? "Inicio" : "Home"}
                </Text>
              </Link>
            </VStack>
          )}
        </HStack>
      </Container>
    </Box>
  )
}

export default Header
