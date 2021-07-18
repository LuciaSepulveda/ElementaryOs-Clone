import {Search2Icon, MoonIcon, SunIcon, EditIcon} from "@chakra-ui/icons"
import {
  Box,
  Grid,
  Flex,
  Menu,
  MenuButton,
  Text,
  Button,
  MenuList,
  GridItem,
  Spacer,
  Image,
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
} from "@chakra-ui/react"
import * as React from "react"
import {useMediaQuery} from "react-responsive"
import {BsInfoCircle} from "react-icons/bs"
import {Icon} from "@chakra-ui/icons"

import Clock from "../Clock/Clock"
import {usePrograms, useOpenProgram, useCloseAllPrograms} from "../../context/hooks"
import {Program} from "../../types/types"

const TopBar: React.FC = () => {
  const [search, setSearch] = React.useState<string>("")
  const programs = usePrograms()
  const openProgram = useOpenProgram()
  const isPortrait = useMediaQuery({query: "(orientation: portrait)"})
  const {colorMode, toggleColorMode} = useColorMode()
  const closeAll = useCloseAllPrograms()

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

  const handleChange = (event: {target: {value: React.SetStateAction<string>}}) => {
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
    <Flex bg="black" color="white" h="26px" position="sticky">
      {!isPortrait && (
        <Flex>
          <Menu>
            <MenuButton
              as={Button}
              leftIcon={<Search2Icon alignSelf="center" h={3} ml={["0px", "5px"]} w={3} />}
              style={{backgroundColor: "transparent", height: "20px", alignSelf: "center"}}
            >
              <Text alignSelf="center" fontSize="small" fontWeight="bold" ml="5px">
                Applications
              </Text>
            </MenuButton>
            <MenuList
              bg="#313131"
              border="0px"
              boxShadow="xl"
              color="black"
              style={{marginLeft: "10px"}}
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
                      value={search}
                      w="90%"
                      onChange={handleChange}
                    />
                  </HStack>
                </InputGroup>
                <Grid gap={6} p={6} templateColumns={`repeat(${cantPrograms()}, 1fr)`}>
                  {search === "" &&
                    programs.map((elem) => {
                      return (
                        <GridItem key={elem.name} m="10px">
                          <VStack as="button" onClick={() => openProgram(elem)}>
                            <Image h="50px" src={elem.img} w="50px" />
                            <Text color="white" fontSize="small">
                              {elem.name}
                            </Text>
                          </VStack>
                        </GridItem>
                      )
                    })}
                  {search !== "" &&
                    programs
                      .filter((elem) => elem.name.toLowerCase().includes(search.toLowerCase()))
                      .map((elem) => {
                        return (
                          <GridItem key={elem.name} m="10px">
                            <VStack as="button" onClick={() => openProgram(elem)}>
                              <Image h="50px" src={elem.img} w="50px" />
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
      {!isPortrait && <Box w="20px" />}
      <Spacer />
      <Clock />
      <Spacer />
      <HStack mr="10px" spacing="10px">
        <Popover>
          <PopoverTrigger>
            <Box role="button">
              <Icon as={BsInfoCircle} />
            </Box>
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
                <Text as="a" fontStyle="italic" href="https://www.flaticon.com/" target="_blank">
                  www.flaticon.com
                </Text>
              </Text>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <Box as="button" onClick={() => functionOpenProgram(wallpaper())}>
          <EditIcon />
        </Box>
        <Box alignSelf="center" as="button" onClick={toggleColorMode}>
          {colorMode === "light" && <MoonIcon />}
          {colorMode !== "light" && <SunIcon />}
        </Box>
      </HStack>
    </Flex>
  )
}

export default TopBar
