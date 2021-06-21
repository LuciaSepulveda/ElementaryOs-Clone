import * as React from "react"
import {Grid, GridItem, Image, Box, Skeleton, Text, VStack} from "@chakra-ui/react"

import {projects} from "../../data/data"

const Projects: React.FC = () => {
  const imageRef = React.useRef<HTMLImageElement>(null)
  const [loaded, setLoaded] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (!loaded && imageRef.current?.complete) {
      setLoaded(true)
    }
  }, [loaded])

  return (
    <Grid bg="#242424" gap={4} h="500px" p={2} templateColumns="repeat(3, 1fr)" w="800px">
      {projects.map((elem) => (
        <GridItem key={elem.name} colSpan={1} h="100%">
          <VStack color="white">
            <Text>{elem.name}</Text>
            <Skeleton w="100%" h="130px" isLoaded={loaded}>
              <Image
                alt={elem.name}
                ref={imageRef}
                src={elem.img}
                onLoad={() => {
                  setLoaded(true)
                }}
              />
            </Skeleton>
            <Text>{elem.description}</Text>
          </VStack>
        </GridItem>
      ))}
    </Grid>
  )
}

export default Projects
