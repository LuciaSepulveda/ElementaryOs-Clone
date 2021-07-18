import * as React from "react"
import {Spacer, Flex, Text} from "@chakra-ui/react"

const Clock: React.FC = () => {
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
    <Flex ml={["20px", "-70px"]} w={["120px", "150px"]}>
      <Text alignSelf="center" fontSize="small" fontWeight="bold">
        {day} {date.getDate().toString()} de {month}
      </Text>
      <Spacer />
      <Text alignSelf="center" fontSize="small" fontWeight="bold">
        {date.getHours() === 0 && `${date.toLocaleTimeString().substring(4, -1)}`}
        {date.getHours() !== 0 && `${date.toLocaleTimeString().substring(5, -1)}`}
      </Text>
    </Flex>
  )
}

export default Clock
