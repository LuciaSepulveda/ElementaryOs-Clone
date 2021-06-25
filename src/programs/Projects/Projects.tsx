import * as React from "react"
import {Grid, Center, GridItem, Image, Box, Skeleton, Text, VStack, Link} from "@chakra-ui/react"
import {useMediaQuery} from "react-responsive"

import github from "../../assets/GitHub_Logo.png"
import {projects} from "../../data/data"

interface Props {
  w: string
  h: string
}

const Projects: React.FC<Props> = ({h, w}) => {
  const imageRef = React.useRef<HTMLImageElement>(null)
  const [loaded, setLoaded] = React.useState<boolean>(false)
  const isPortrait = useMediaQuery({query: "(orientation: portrait)"})

  React.useEffect(() => {
    if (!loaded && imageRef.current?.complete && imageRef.current?.naturalWidth > 0) {
      setLoaded(true)
    }
  }, [loaded])

  return (
    <Center alignItems="center" h="96%" w="100%">
      {!isPortrait && (
        <Grid gap={4} h={h} p={2} templateColumns="repeat(3, 1fr)" w={w}>
          {projects.map((elem) => (
            <GridItem
              key={elem.name}
              border="2px solid #333333"
              borderBottomRadius="xl"
              colSpan={1}
            >
              <VStack color="white" h="100%">
                <Text fontWeight="bold">{elem.name}</Text>
                <Link h="100%" href={elem.demo} target="_blank">
                  <Skeleton h="125px" isLoaded={loaded} w="100%">
                    <Image
                      ref={imageRef}
                      alt={elem.name}
                      src={elem.img}
                      onLoad={() => {
                        setLoaded(true)
                      }}
                    />
                  </Skeleton>
                </Link>
                <Link bg="white" borderRadius="md" href={elem.github} target="_blank">
                  <Image h="20px" src={github} />
                </Link>
                <Box
                  bg="#333333"
                  borderBottomRadius="md"
                  boxShadow="md"
                  h="50px"
                  overflow="hidden"
                  p={1}
                  w="100%"
                >
                  <Text>{elem.description}</Text>
                </Box>
              </VStack>
            </GridItem>
          ))}
        </Grid>
      )}
      {isPortrait && (
        <Grid h={h} p={1} templateColumns="repeat(2, 1fr)" w={w}>
          {projects.map((elem) => (
            <GridItem
              key={elem.name}
              border="2px solid #333333"
              borderBottomRadius="xl"
              colSpan={1}
              h="fit-content"
            >
              <VStack color="white">
                <Text fontWeight="bold">{elem.name}</Text>
                <Link h="100%" href={elem.demo} target="_blank">
                  <Skeleton h="50px" isLoaded={loaded} w="100%">
                    <Image
                      ref={imageRef}
                      alt={elem.name}
                      src={elem.img}
                      onLoad={() => {
                        setLoaded(true)
                      }}
                    />
                  </Skeleton>
                </Link>
                <Box
                  bg="#333333"
                  borderBottomRadius="md"
                  boxShadow="md"
                  h="50px"
                  overflow="hidden"
                  p={1}
                  w="100%"
                >
                  <Text>{elem.description}</Text>
                </Box>
              </VStack>
            </GridItem>
          ))}
        </Grid>
      )}
    </Center>
  )
}

export default Projects
