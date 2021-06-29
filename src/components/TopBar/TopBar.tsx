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
} from "@chakra-ui/react"
import * as React from "react"
import {useMediaQuery} from "react-responsive"

import {usePrograms, useOpenProgram, useCloseAllPrograms} from "../../context/hooks"

const TopBar: React.FC = () => {
  const [search, setSearch] = React.useState<string>("")
  const [date, setDate] = React.useState<Date>(new Date())
  const programs = usePrograms()
  const openProgram = useOpenProgram()
  let day = ""
  let month = ""
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

  switch (date.getDay().toString()) {
    case "1":
      day = "lun"
      break
    case "2":
      day = "mar"
      break
    case "3":
      day = "mie"
      break
    case "4":
      day = "jue"
      break
    case "5":
      day = "vie"
      break
    case "6":
      day = "sab"
      break
    case "7":
      day = "dom"
      break
  }

  switch (date.getMonth().toString()) {
    case "0":
      month = "ene"
      break
    case "1":
      month = "feb"
      break
    case "2":
      month = "mar"
      break
    case "3":
      month = "may"
      break
    case "4":
      month = "abr"
      break
    case "5":
      month = "jun"
      break
    case "6":
      month = "jul"
      break
    case "7":
      month = "ago"
      break
    case "8":
      month = "sep"
      break
    case "9":
      month = "oct"
      break
    case "10":
      month = "nov"
      break
    case "11":
      month = "dic"
      break
  }

  React.useEffect(() => {
    setInterval(updateDate, 1000)
  })

  const updateDate = () => {
    setDate(new Date())
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
      <Flex ml={["20px", "-70px"]} w={["120px", "150px"]}>
        <Text alignSelf="center" fontSize="small" fontWeight="bold">
          {day} {date.getDate().toString()} de {month}
        </Text>
        <Spacer />
        <Text alignSelf="center" fontSize="small" fontWeight="bold">
          {date.toLocaleTimeString().substring(5, -1)}
        </Text>
      </Flex>
      <Spacer />
      <HStack mr="10px" spacing="10px">
        {isPortrait && (
          <Box
            as="button"
            onClick={() => {
              openProgram(wallpaper()), closeAll(wallpaper())
            }}
          >
            <EditIcon />
          </Box>
        )}
        {!isPortrait && (
          <Box as="button" onClick={() => openProgram(wallpaper())}>
            <EditIcon />
          </Box>
        )}
        <Box alignSelf="center" as="button" onClick={toggleColorMode}>
          {colorMode === "light" && <MoonIcon />}
          {colorMode !== "light" && <SunIcon />}
        </Box>
      </HStack>
    </Flex>
  )
}

export default TopBar
