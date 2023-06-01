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
} from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const isBrowser = typeof window !== `undefined`

type Props = {
  element: any
  useWindow: any
}

function getScrollPosition({ element, useWindow }: Props) {
  if (!isBrowser) return { x: 0, y: 0 }

  const target = element ? element.current : document.body
  const position = target.getBoundingClientRect()

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top }
}

function useScrollPosition(
  effect: any,
  deps: any,
  element: any,
  useWindow: any,
  wait: number
) {
  const position = useRef(getScrollPosition({ element, useWindow }))

  let throttleTimeout: any = null

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow })
    effect({ prevPos: position.current, currPos })
    position.current = currPos
    throttleTimeout = null
  }

  useEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait)
        }
      } else {
        callBack()
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, deps)
}

const Header = () => {
  const bg = useColorModeValue("rgb(206, 206, 206)", "rgb(27, 33, 46)")
  const language = useLanguage()
  const changeLanguage = useChangeLanguage()
  const { colorMode, toggleColorMode } = useColorMode()
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [scroll, setScroll] = useState<boolean>(false)
  const [section, setSection] = useState<
    "about" | "projects" | "skills" | "contact" | undefined
  >()

  const getRandomInt = () => {
    return Math.floor(Math.random() * 4)
  }

  const colors = [
    useColorModeValue("rgb(84, 167, 248)", "rgb(127, 193, 250)"),
    useColorModeValue("rgb(101, 212, 97)", "rgb(120, 233, 143)"),
    useColorModeValue("rgb(238, 121, 70)", "rgb(234, 98, 118)"),
    useColorModeValue("rgb(243, 174, 66)", "rgb(223, 200, 122)"),
    useColorModeValue("rgb(97, 211, 196)", "rgb(174, 139, 246)"),
  ]

  useScrollPosition(
    ({ currPos }: any) => {
      const maxScroll = currPos.y < 0
      if (maxScroll) {
        setScroll(true)
      }
      if (!maxScroll) {
        setScroll(false)
      }
      if (currPos.y > -741) setSection(undefined)
      else {
        if (currPos.y <= -741 && currPos.y > -1241) setSection("about")
        else {
          if (currPos.y <= -1241 && currPos.y > -2041) setSection("skills")
          else {
            if (currPos.y <= -2041 && currPos.y > -2546) setSection("projects")
            else if (currPos.y <= -2546) setSection("contact")
          }
        }
      }
    },
    [scroll],
    false,
    false,
    100
  )

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
        transition="all 0.2s ease"
        mt={[0, 0, scroll ? 0 : 2, scroll ? 0 : 2, scroll ? 0 : 2]}
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
          <chakra.ul gap={4} display={["none", "none", "flex", "flex", "flex"]}>
            <chakra.li listStyleType="none">
              <Link href="#about">
                <Text
                  transition="all 0.3s ease"
                  _hover={{ color: colors[getRandomInt()] }}
                  fontWeight="bold"
                  position="relative"
                  color={section === "about" ? colors[getRandomInt()] : ""}
                >
                  {language === "ES" ? "Sobre mi" : "About me"}
                </Text>
              </Link>
            </chakra.li>
            <chakra.li listStyleType="none">
              <Link href="#skills">
                <Text
                  fontWeight="bold"
                  transition="all 0.3s ease"
                  _hover={{ color: colors[getRandomInt()] }}
                  color={section === "skills" ? colors[getRandomInt()] : ""}
                >
                  {language === "ES" ? "Habilidades" : "Skills"}
                </Text>
              </Link>
            </chakra.li>
            <chakra.li listStyleType="none">
              <Link href="#projects">
                <Text
                  fontWeight="bold"
                  transition="all 0.3s ease"
                  _hover={{ color: colors[getRandomInt()] }}
                  color={section === "projects" ? colors[getRandomInt()] : ""}
                >
                  {language === "ES" ? "Proyectos" : "Projects"}
                </Text>
              </Link>
            </chakra.li>
            <chakra.li listStyleType="none">
              <Link href="#contact">
                <Text
                  fontWeight="bold"
                  transition="all 0.3s ease"
                  _hover={{ color: colors[getRandomInt()] }}
                  color={section === "contact" ? colors[getRandomInt()] : ""}
                >
                  {language === "ES" ? "Contacto" : "Contact"}
                </Text>
              </Link>
            </chakra.li>
            <chakra.li listStyleType="none">
              <Link href="/">
                <Text
                  fontWeight="bold"
                  transition="all 0.3s ease"
                  _hover={{ color: colors[getRandomInt()] }}
                >
                  {language === "ES" ? "Inicio" : "Home"}
                </Text>
              </Link>
            </chakra.li>
          </chakra.ul>
          <HStack pr={3}>
            <chakra.button
              aria-label={
                language === "ES" ? "Cambiar lenguaje" : "Change language"
              }
              onClick={() => changeLanguage(language === "ES" ? "EN" : "ES")}
            >
              <Text
                _hover={{ color: colors[getRandomInt()] }}
                fontWeight="bold"
              >
                {language}
              </Text>
            </chakra.button>
            <Center as="button" onClick={toggleColorMode} aria-hidden="true">
              {colorMode === "light" && (
                <MoonIcon _hover={{ color: colors[getRandomInt()] }} />
              )}
              {colorMode !== "light" && (
                <SunIcon _hover={{ color: colors[getRandomInt()] }} />
              )}
            </Center>
            <chakra.button
              display={["block", "block", "none", "none", "none"]}
              bg="transparent"
              onClick={() => setShowMenu(!showMenu)}
              p={1}
              aria-label={
                showMenu
                  ? language === "ES"
                    ? "Cerrar menu"
                    : "Close menu"
                  : language === "ES"
                  ? "Abrir menu"
                  : "Open menu"
              }
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
            <chakra.ul
              position="absolute"
              w="full"
              h={48}
              bg={bg}
              bottom="-192px"
              left={-2}
              gap={2}
              boxShadow="xl"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <chakra.li listStyleType="none">
                <Link href="#about" onClick={() => setShowMenu(false)}>
                  <Text fontWeight="bold">
                    {language === "ES" ? "Sobre mi" : "About me"}
                  </Text>
                </Link>
              </chakra.li>
              <chakra.li listStyleType="none">
                <Link href="#skills" onClick={() => setShowMenu(false)}>
                  <Text fontWeight="bold">
                    {language === "ES" ? "Habilidades" : "Skills"}
                  </Text>
                </Link>
              </chakra.li>
              <chakra.li listStyleType="none">
                <Link href="#projects" onClick={() => setShowMenu(false)}>
                  <Text fontWeight="bold">
                    {language === "ES" ? "Proyectos" : "Projects"}
                  </Text>
                </Link>
              </chakra.li>
              <chakra.li listStyleType="none">
                <Link href="#contact" onClick={() => setShowMenu(false)}>
                  <Text fontWeight="bold">
                    {language === "ES" ? "Contacto" : "Contact"}
                  </Text>
                </Link>
              </chakra.li>
              <chakra.li listStyleType="none">
                <Link href="/" onClick={() => setShowMenu(false)}>
                  <Text fontWeight="bold">
                    {language === "ES" ? "Inicio" : "Home"}
                  </Text>
                </Link>
              </chakra.li>
            </chakra.ul>
          )}
        </HStack>
      </Container>
    </Box>
  )
}

export default Header
