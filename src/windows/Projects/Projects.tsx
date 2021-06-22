import * as React from "react"
import {Grid, GridItem, Image, Box, Skeleton, Text, VStack, Link} from "@chakra-ui/react"

import github from "../../assets/GitHub_Logo.png"
import {projects} from "../../data/data"

const Projects: React.FC = () => {
  const imageRef = React.useRef<HTMLImageElement>(null)
  const [loaded, setLoaded] = React.useState<boolean>(false)

  React.useEffect(() => {
    if (!loaded && imageRef.current?.complete && imageRef.current?.naturalWidth > 0) {
      setLoaded(true)
    }
  }, [loaded])

  return (
    <Grid bg="#242424" gap={4} p={2} templateColumns="repeat(3, 1fr)" w="800px">
      {projects.map((elem) => (
        <GridItem
          key={elem.name}
          border="2px solid #333333"
          borderBottomRadius="lg"
          colSpan={1}
          h="100%"
        >
          <VStack color="white">
            <Text fontWeight="bold">{elem.name}</Text>
            <Link href={elem.demo}>
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
            <Link bg="white" borderRadius="md" href={elem.github}>
              <Image alt="Logo github" h="20px" src={github} />
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
  )
}

export default Projects
