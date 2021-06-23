import "@fontsource/jetbrains-mono/"

import * as React from "react"
import {Center, Box, Flex, Grid, GridItem, HStack, Text, VStack} from "@chakra-ui/react"
import {ChevronRightIcon} from "@chakra-ui/icons"

import {techs, info} from "../../data/data"

interface Props {
  w: string
  h: string
}

const About: React.FC<Props> = ({h, w}) => {
  const [state, setState] = React.useState<string>("about")
  const [update, setUpdate] = React.useState<boolean>(false)

  const updateState = (s: string) => {
    setUpdate(true)
    setState(s)
  }

  React.useEffect(() => {
    if (update === true) {
      setUpdate(false)

      return
    }
  }, [update])

  return (
    <VStack bg="green.700" borderRadius="xl" borderTopRadius="none" h={h} spacing="0px" w={w}>
      <Center w="100%">
        {state === "about" && <Text>Sobre mi -</Text>}
        {state === "tech" && <Text>Conocimientos -</Text>}
        <Text> Portfolio</Text>
      </Center>
      <Grid
        bg="#07273B"
        borderRadius="xl"
        borderTopRadius="none"
        gap={0}
        h="100%"
        templateColumns="repeat(4, 1fr)"
        w="100%"
      >
        <GridItem bg="#062132" borderBottomLeftRadius="xl" colSpan={1}>
          <VStack>
            <Box bg="#09334E" p={1} w="100%">
              <Text align="justify" color="white" fontSize="small" fontWeight="bold" ml="10px">
                Portfolio
              </Text>
            </Box>
            <HStack w="100%">
              {state === "about" && (
                <>
                  <ChevronRightIcon color="white" />
                  <Text align="justify" color="white" ml="10px">
                    Sobre mi
                  </Text>
                </>
              )}
              {state !== "about" && (
                <Text
                  align="justify"
                  as="button"
                  color="white"
                  ml="10px"
                  onClick={() => updateState("about")}
                >
                  Sobre mi
                </Text>
              )}
            </HStack>
            <HStack w="100%">
              {state === "tech" && (
                <>
                  <ChevronRightIcon color="white" />
                  <Text align="justify" color="white" ml="10px">
                    Conocimientos
                  </Text>
                </>
              )}
              {state !== "tech" && (
                <Text
                  align="justify"
                  as="button"
                  color="white"
                  ml="10px"
                  onClick={() => updateState("tech")}
                >
                  Conocimientos
                </Text>
              )}
            </HStack>
          </VStack>
        </GridItem>
        <GridItem colSpan={3}>
          <VStack fontFamily="JetBrains Mono" spacing={0}>
            {state === "about" && (
              <>
                <HStack spacing="4px" w="100%">
                  <Text color="#568498">{`<`}!</Text>
                  <Text color="#CA7692">DOCTYPE html</Text>
                  <Text color="#568498">{`>`}</Text>
                </HStack>
                <HStack spacing="4px" w="100%">
                  <Text color="#568498">{`<`}</Text>
                  <Text color="#DF4F38">html</Text>
                  <Text color="#D58929"> lang</Text>
                  <Text color="white">{`=`}</Text>
                  <Text color="#46E991">{`"ES"`}</Text>
                  <Text color="#568498">{`>`}</Text>
                </HStack>
                <HStack ml="10%" spacing="4px" w="90%">
                  <Text color="#568498">{`<`}</Text>
                  <Text color="#DF4F38">head</Text>
                  <Text color="#568498">{`>`}</Text>
                </HStack>
                <HStack ml="20%" spacing="4px" w="80%">
                  <Text color="#568498">{`<`}</Text>
                  <Text color="#DF4F38">title</Text>
                  <Text color="#568498">{`>`}</Text>
                  <Text color="white">Portfolio</Text>
                  <Text color="#568498">{`</ `}</Text>
                  <Text color="#DF4F38">title</Text>
                  <Text color="#568498">{`>`}</Text>
                </HStack>
                <HStack ml="10%" spacing="4px" w="90%">
                  <Text color="#568498">{`</ `}</Text>
                  <Text color="#DF4F38">head</Text>
                  <Text color="#568498">{`>`}</Text>
                </HStack>
                <HStack ml="10%" spacing="4px" w="90%">
                  <Text color="#568498">{`<`}</Text>
                  <Text color="#DF4F38">body</Text>
                  <Text color="#568498">{`>`}</Text>
                </HStack>
                <HStack ml="20%" spacing="4px" w="80%">
                  <Text color="#568498">{`<`}</Text>
                  <Text color="#DF4F38">h1</Text>
                  <Text color="#568498">{`>`}</Text>
                  <Text color="white">Lucia Sepulveda</Text>
                  <Text color="#568498">{`</ `}</Text>
                  <Text color="#DF4F38">h1</Text>
                  <Text color="#568498">{`>`}</Text>
                </HStack>
                {info.map((elem) => (
                  <HStack key={elem} ml="20%" spacing="4px" w="80%">
                    <Text color="#568498">{`<`}</Text>
                    <Text color="#DF4F38">p</Text>
                    <Text color="#568498">{`>`}</Text>
                    <Text color="white">{elem}</Text>
                    <Text color="#568498">{`</ `}</Text>
                    <Text color="#DF4F38">p</Text>
                    <Text color="#568498">{`>`}</Text>
                  </HStack>
                ))}
                <HStack ml="10%" spacing="4px" w="90%">
                  <Text color="#568498">{`</ `}</Text>
                  <Text color="#DF4F38">body</Text>
                  <Text color="#568498">{`>`}</Text>
                </HStack>
                <HStack spacing="4px" w="100%">
                  <Text color="#568498">{`</ `}</Text>
                  <Text color="#DF4F38">html</Text>
                  <Text color="#568498">{`>`}</Text>
                </HStack>
              </>
            )}
            {state === "tech" && (
              <>
                <HStack spacing="4px" w="100%">
                  <Text color="#568498">{`<`}</Text>
                  <Text color="#DF4F38">ul</Text>
                  <Text color="#568498">{`>`}</Text>
                </HStack>
                {techs.map((elem) => (
                  <HStack key={elem} ml="10%" spacing="4px" w="90%">
                    <Text color="#568498">{`<`}</Text>
                    <Text color="#DF4F38">li</Text>
                    <Text color="#568498">{`>`}</Text>
                    <Text color="white"> {elem} </Text>
                    <Text color="#568498">{`</ `}</Text>
                    <Text color="#DF4F38">li</Text>
                    <Text color="#568498">{`>`}</Text>
                  </HStack>
                ))}
                <HStack spacing="4px" w="100%">
                  <Text color="#568498">{`</ `}</Text>
                  <Text color="#DF4F38">ul</Text>
                  <Text color="#568498">{`>`}</Text>
                </HStack>
              </>
            )}
          </VStack>
        </GridItem>
      </Grid>
    </VStack>
  )
}

export default About
