import {Search2Icon, MoonIcon} from "@chakra-ui/icons"
import {
  Grid,
  Flex,
  Menu,
  MenuButton,
  Text,
  Button,
  MenuList,
  GridItem,
  Spacer,
} from "@chakra-ui/react"
import * as React from "react"

const TopBar: React.FC = () => {
  const [date, setDate] = React.useState<Date>(new Date())
  let day = ""
  let month = ""

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
    <Flex bg="black" color="white" h="26px">
      <Flex>
        <Menu>
          <MenuButton
            as={Button}
            leftIcon={<Search2Icon alignSelf="center" h={3} ml="5px" w={3} />}
            style={{backgroundColor: "transparent", height: "20px", alignSelf: "center"}}
          >
            <Text alignSelf="center" fontSize="small" fontWeight="bold" ml="5px">
              Aplicaciones
            </Text>
          </MenuButton>
          <MenuList
            bg="#313131"
            border="0px"
            boxShadow="xl"
            color="black"
            style={{width: "650px", marginLeft: "10px"}}
          >
            <Grid gap={2} templateColumns="repeat(5, 1fr)">
              <GridItem>hola</GridItem>
              <GridItem>Nose</GridItem>
            </Grid>
          </MenuList>
        </Menu>
      </Flex>
      <Spacer />
      <Flex ml="-70px" w="150px">
        <Text alignSelf="center" fontSize="small" fontWeight="bold">
          {day} {month} de {date.getDate().toString()}
        </Text>
        <Spacer />
        <Text alignSelf="center" fontSize="small" fontWeight="bold">
          {date.toLocaleTimeString()}
        </Text>
      </Flex>
      <Spacer />
      <Flex alignSelf="center" mr="10px">
        <MoonIcon />
      </Flex>
    </Flex>
  )
}

export default TopBar
