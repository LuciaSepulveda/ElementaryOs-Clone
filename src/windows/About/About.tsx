import "@fontsource/jetbrains-mono/"

import * as React from "react"
import {Box, Flex, Grid, GridItem, HStack, Text, VStack} from "@chakra-ui/react"
import {ChevronRightIcon} from "@chakra-ui/icons"

const About: React.FC = () => {
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
    <Grid bg="#07273B" h="500px" templateColumns="repeat(4, 1fr)" w="800px">
      <GridItem bg="#062132" colSpan={1} h="100%">
        <VStack>
          <Box bg="#09334E" p={1} w="100%">
            <Text align="justify" color="white" fontSize="small" fontWeight="bold" ml="10px">
              ABOUT
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
                  Tecnologias
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
                Tecnologias
              </Text>
            )}
          </HStack>
        </VStack>
      </GridItem>
      <GridItem colSpan={3}>
        <VStack fontFamily="JetBrains Mono" fontWeight="light" spacing={0}>
          {state === "about" && (
            <>
              <HStack spacing="4px" w="100%">
                <Text color="#568498">{`<`} !</Text>
                <Text color="#CA7692">DOCTYPE html</Text>
                <Text color="#568498">{`>`}</Text>
              </HStack>
              <HStack spacing="4px" w="100%">
                <Text color="#568498">{`<`}</Text>
                <Text color="#DF4F38">html</Text>
                <Text color="#D58929"> lang</Text>
                <Text color="white">{`=`}</Text>
                <Text color="#46E991">{`"es"`}</Text>
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
                <Text color="#568498">{`<`}</Text>
                <Text color="#DF4F38">title</Text>
                <Text color="#568498"> /{`>`}</Text>
              </HStack>
              <HStack ml="10%" spacing="4px" w="90%">
                <Text color="#568498">{`< /`}</Text>
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
                <Text color="#568498">{`<`}</Text>
                <Text color="#DF4F38">h1</Text>
                <Text color="#568498"> /{`>`}</Text>
              </HStack>
              <HStack ml="20%" spacing="4px" w="80%">
                <Text color="#568498">{`<`}</Text>
                <Text color="#DF4F38">p</Text>
                <Text color="#568498">{`>`}</Text>
                <Text color="white">Estudiante de Ingenieria en Computacion</Text>
                <Text color="#568498">{`<`}</Text>
                <Text color="#DF4F38">p</Text>
                <Text color="#568498"> /{`>`}</Text>
              </HStack>
              <HStack ml="20%" spacing="4px" w="80%">
                <Text color="#568498">{`<`}</Text>
                <Text color="#DF4F38">p</Text>
                <Text color="#568498">{`>`}</Text>
                <Text color="white">Vivo en Bahia Blanca</Text>
                <Text color="#568498">{`<`}</Text>
                <Text color="#DF4F38">p</Text>
                <Text color="#568498"> /{`>`}</Text>
              </HStack>
              <HStack ml="10%" spacing="4px" w="90%">
                <Text color="#568498">{`< /`}</Text>
                <Text color="#DF4F38">body</Text>
                <Text color="#568498">{`>`}</Text>
              </HStack>
              <HStack spacing="4px" w="100%">
                <Text color="#568498">{`< /`}</Text>
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
              <HStack ml="10%" spacing="4px" w="90%">
                <Text color="#568498">{`<`}</Text>
                <Text color="#DF4F38">li</Text>
                <Text color="#568498">{`>`}</Text>
                <Text color="white"> HTML </Text>
                <Text color="#568498">{`<`}</Text>
                <Text color="#DF4F38">li</Text>
                <Text color="#568498"> /{`>`}</Text>
              </HStack>
              <HStack ml="10%" spacing="4px" w="90%">
                <Text color="#568498">{`<`}</Text>
                <Text color="#DF4F38">li</Text>
                <Text color="#568498">{`>`}</Text>
                <Text color="white"> CSS </Text>
                <Text color="#568498">{`<`}</Text>
                <Text color="#DF4F38">li</Text>
                <Text color="#568498"> /{`>`}</Text>
              </HStack>
              <HStack ml="10%" spacing="4px" w="90%">
                <Text color="#568498">{`<`}</Text>
                <Text color="#DF4F38">li</Text>
                <Text color="#568498">{`>`}</Text>
                <Text color="white"> Javascript </Text>
                <Text color="#568498">{`<`}</Text>
                <Text color="#DF4F38">li</Text>
                <Text color="#568498"> /{`>`}</Text>
              </HStack>
              <HStack ml="10%" spacing="4px" w="90%">
                <Text color="#568498">{`<`}</Text>
                <Text color="#DF4F38">li</Text>
                <Text color="#568498">{`>`}</Text>
                <Text color="white"> React </Text>
                <Text color="#568498">{`<`}</Text>
                <Text color="#DF4F38">li</Text>
                <Text color="#568498"> /{`>`}</Text>
              </HStack>
              <HStack ml="10%" spacing="4px" w="90%">
                <Text color="#568498">{`<`}</Text>
                <Text color="#DF4F38">li</Text>
                <Text color="#568498">{`>`}</Text>
                <Text color="white"> Typescript </Text>
                <Text color="#568498">{`<`}</Text>
                <Text color="#DF4F38">li</Text>
                <Text color="#568498"> /{`>`}</Text>
              </HStack>
              <HStack ml="10%" spacing="4px" w="90%">
                <Text color="#568498">{`<`}</Text>
                <Text color="#DF4F38">li</Text>
                <Text color="#568498">{`>`}</Text>
                <Text color="white"> Java </Text>
                <Text color="#568498">{`<`}</Text>
                <Text color="#DF4F38">li</Text>
                <Text color="#568498"> /{`>`}</Text>
              </HStack>
              <HStack spacing="4px" w="100%">
                <Text color="#568498">{`< /`}</Text>
                <Text color="#DF4F38">ul</Text>
                <Text color="#568498">{`>`}</Text>
              </HStack>
            </>
          )}
        </VStack>
      </GridItem>
    </Grid>
  )
}

export default About
