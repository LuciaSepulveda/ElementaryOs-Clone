import * as React from "react"
import { Text, Center, Flex } from "@chakra-ui/react"
import { useLanguage } from "../../context/hooks"

interface Props {
  isPortrait: boolean
}

const Clock: React.FC<Props> = ({ isPortrait }) => {
  const [date, setDate] = React.useState<Date>(new Date())
  const language = useLanguage()
  let day = ""
  let month = ""

  switch (date.getDay().toString()) {
    case "1":
      day = language === "ES" ? "lun" : "mon"
      break
    case "2":
      day = language === "ES" ? "mar" : "tue"
      break
    case "3":
      day = language === "ES" ? "mie" : "wed"
      break
    case "4":
      day = language === "ES" ? "jue" : "thu"
      break
    case "5":
      day = language === "ES" ? "vie" : "fri"
      break
    case "6":
      day = language === "ES" ? "sab" : "sat"
      break
    case "7":
      day = language === "ES" ? "dom" : "sun"
      break
  }

  switch (date.getMonth().toString()) {
    case "0":
      month = language === "ES" ? "ene" : "jan"
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
      month = language === "ES" ? "abr" : "apr"
      break
    case "5":
      month = "jun"
      break
    case "6":
      month = "jul"
      break
    case "7":
      month = language === "ES" ? "ago" : "aug"
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
      month = language === "ES" ? "dic" : "dec"
      break
  }

  React.useEffect(() => {
    setInterval(updateDate, 1000)
  })

  const updateDate = () => {
    setDate(new Date())
  }

  return (
    <Flex
      justifyContent={"center"}
      flexGrow={"1"}
      w={isPortrait ? "100%" : ""}
      ml={isPortrait ? "100px" : ""}
    >
      <Text alignSelf="center" fontSize="small" fontWeight="bold" mr="10px">
        {day} {date.getDate().toString()} {language === "ES" ? "de" : "of"}{" "}
        {month}
      </Text>
      <Text alignSelf="center" fontSize="small" fontWeight="bold">
        {date.getHours() === 0 &&
          `${date.toLocaleTimeString().substring(4, -1)}`}
        {date.getHours() !== 0 &&
          `${date.toLocaleTimeString().substring(5, -1)}`}
      </Text>
    </Flex>
  )
}

export default Clock
