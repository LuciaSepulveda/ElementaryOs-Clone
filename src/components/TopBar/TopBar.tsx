import { Search2Icon, MoonIcon, SunIcon, EditIcon } from "@chakra-ui/icons"
import {
  Grid,
  Flex,
  Menu,
  MenuButton,
  Text,
  Button,
  MenuList,
  GridItem,
  VStack,
  Input,
  InputGroup,
  HStack,
  useColorMode,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverCloseButton,
  PopoverHeader,
  Center,
} from "@chakra-ui/react"
import * as React from "react"
import { useMediaQuery } from "react-responsive"
import { BsInfoCircle } from "react-icons/bs"
import { Icon } from "@chakra-ui/icons"
import Image from "next/image"

import Clock from "../Clock/Clock"
import {
  usePrograms,
  useOpenProgram,
  useCloseAllPrograms,
  useLanguage,
  useChangeLanguage,
} from "../../context/hooks"
import { Program } from "../../types/types"

const TopBar: React.FC = () => {
  const [search, setSearch] = React.useState<string>("")
  const programs = usePrograms()
  const openProgram = useOpenProgram()
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" })
  const { colorMode, toggleColorMode } = useColorMode()
  const closeAll = useCloseAllPrograms()
  const language = useLanguage()
  const changeLanguage = useChangeLanguage()

  const wallpaper = () => {
    let elem = programs[0]

    for (let i = 0; i !== programs.length; i++) {
      if (programs[i].name === "Wallpapers") elem = programs[i]
    }

    return elem
  }

  const cantPrograms = () => {
    if (programs.length > 4) {
      return Math.round(programs.length / 2)
    } else return programs.length
  }

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setSearch(event.target.value)
  }

  const functionOpenProgram = (p: Program) => {
    if (isPortrait) {
      openProgram(p)
      closeAll(p)
    } else {
      openProgram(p)
    }
  }

  return (
    <Flex
      justifyContent="space-between"
      bg="black"
      color="white"
      h="26px"
      position="relative"
      w="100%"
    >
      {!isPortrait && (
        <Flex flexGrow="1" position="sticky" zIndex="15">
          <Menu>
            <MenuButton
              as={Button}
              leftIcon={
                <Search2Icon
                  alignSelf="center"
                  h={3}
                  ml={["0px", "5px"]}
                  w={3}
                />
              }
              style={{
                backgroundColor: "transparent",
                height: "20px",
                alignSelf: "center",
              }}
            >
              <Text
                alignSelf="center"
                fontSize="small"
                fontWeight="bold"
                ml="5px"
              >
                {language === "ES" ? "Aplicaciones" : "Applications"}
              </Text>
            </MenuButton>
            <MenuList
              bg="#313131"
              border="0px"
              boxShadow="xl"
              color="black"
              style={{ marginLeft: "10px" }}
            >
              <VStack>
                <InputGroup>
                  <HStack h="20px" w="100%">
                    <Search2Icon ml="10px" />
                    <Input
                      alignSelf="center"
                      color="white"
                      h="90%"
                      mt="2%"
                      position="sticky"
                      value={search}
                      w="88%"
                      onChange={handleChange}
                    />
                  </HStack>
                </InputGroup>
                <Grid
                  gap={6}
                  p={6}
                  templateColumns={`repeat(${cantPrograms()}, 1fr)`}
                >
                  {search === "" &&
                    programs.map((elem) => {
                      return (
                        <GridItem key={elem.name} m="10px">
                          <VStack as="button" onClick={() => openProgram(elem)}>
                            <Image
                              alt={elem.name}
                              height={50}
                              src={elem.img}
                              width={50}
                            />
                            <Text color="white" fontSize="small">
                              {elem.name}
                            </Text>
                          </VStack>
                        </GridItem>
                      )
                    })}
                  {search !== "" &&
                    programs
                      .filter((elem) =>
                        elem.name.toLowerCase().includes(search.toLowerCase())
                      )
                      .map((elem) => {
                        return (
                          <GridItem key={elem.name} m="10px">
                            <VStack
                              as="button"
                              onClick={() => openProgram(elem)}
                            >
                              <Image
                                alt={elem.name}
                                height={50}
                                src={elem.img}
                                width={50}
                              />
                              <Text color="white" fontSize="small">
                                {elem.name}
                              </Text>
                            </VStack>
                          </GridItem>
                        )
                      })}
                </Grid>
              </VStack>
            </MenuList>
          </Menu>
        </Flex>
      )}
      <Clock isPortrait={isPortrait} />
      <HStack
        justifyContent="flex-end"
        flexGrow="1"
        mr="10px"
        position="sticky"
        spacing="10px"
        zIndex="5"
      >
        <button onClick={() => changeLanguage(language === "ES" ? "EN" : "ES")}>
          <Text align="center" fontSize="sm" fontWeight="semibold">
            {language}
          </Text>
        </button>
        <Popover>
          <PopoverTrigger>
            <Center role="button">
              <Icon as={BsInfoCircle} />
            </Center>
          </PopoverTrigger>
          <PopoverContent bg="black" position="static">
            <PopoverBody>
              <PopoverCloseButton />
              <PopoverHeader h="20px" />
              <Text color="#EFEFEF" textAlign="justify" w="100%">
                Icons made by{" "}
                <Text
                  as="a"
                  fontStyle="italic"
                  fontWeight="bold"
                  href="https://www.flaticon.com/authors/mynamepong"
                  target="_blank"
                >
                  mynamepong
                </Text>{" "}
                and{" "}
                <Text
                  as="a"
                  fontStyle="italic"
                  fontWeight="bold"
                  href="https://www.flaticon.com/authors/roundicons"
                  target="_blank"
                >
                  roundicons
                </Text>{" "}
                from{" "}
                <Text
                  as="a"
                  fontStyle="italic"
                  href="https://www.flaticon.com/"
                  target="_blank"
                >
                  www.flaticon.com
                </Text>
              </Text>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <Center as="button" onClick={() => functionOpenProgram(wallpaper())}>
          <EditIcon />
        </Center>
        <Center as="button" onClick={toggleColorMode}>
          {colorMode === "light" && <MoonIcon />}
          {colorMode !== "light" && <SunIcon />}
        </Center>
      </HStack>
    </Flex>
  )
}

export default TopBar
