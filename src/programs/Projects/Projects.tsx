import * as React from "react"
import {
  Center,
  Image,
  Box,
  Skeleton,
  Text,
  VStack,
  Link,
  useColorModeValue,
  SimpleGrid,
  Badge,
} from "@chakra-ui/react"
import {useMediaQuery} from "react-responsive"

import github from "../../assets/GitHub_Logo.png"
import {projects} from "../../data/data"

interface Props {
  w: string
  h: string
  maximized: boolean
}

const Projects: React.FC<Props> = ({h, w, maximized}) => {
  const imageRef = React.useRef<HTMLImageElement>(null)
  const [loaded, setLoaded] = React.useState<boolean>(false)
  const isPortrait = useMediaQuery({query: "(orientation: portrait)"})
  const bg = useColorModeValue("#FBFBFB", "#242424")
  const bgItem = useColorModeValue("#A0A7AC", "#333333")
  const border = useColorModeValue("2px solid #A0A7AC", "2px solid #333333")
  const colorText = useColorModeValue("#242424", "#FBFBFB")
  let heightImageProject = "140px"

  if (maximized) {
    heightImageProject = "220px"
  }

  React.useEffect(() => {
    if (!loaded && imageRef.current?.complete && imageRef.current?.naturalWidth > 0) {
      setLoaded(true)
    }
  }, [loaded])

  return (
    <Center
      alignItems="center"
      bg={bg}
      borderBottomRadius="xl"
      h={h}
      transitionTimingFunction="ease-in-out"
      w="100%"
    >
      {!isPortrait && !maximized && (
        <SimpleGrid columns={3} gap={4} h="100%" p={2} w={w}>
          {projects.map((elem) => (
            <VStack
              key={elem.name}
              border={border}
              borderBottomRadius="xl"
              color={colorText}
              spacing="10px"
            >
              <Text fontWeight="bold" h="16px">
                {elem.name}
              </Text>
              <Link h={heightImageProject} href={elem.demo} target="_blank">
                <Skeleton h="150px" isLoaded={loaded} w="100%">
                  <Image
                    ref={imageRef}
                    alt={elem.name}
                    src={elem.img}
                    w="100%"
                    onLoad={() => {
                      setLoaded(true)
                    }}
                  />
                </Skeleton>
              </Link>
              <Link bg="white" borderRadius="md" h="22px" href={elem.github} target="_blank">
                <Image h="20px" src={github} />
              </Link>
              <Box bg={bgItem} h="52px" m="auto" p={1} w="100%">
                <Text>{elem.description}</Text>
              </Box>
              <Center h="28px" w="100%">
                {elem.techs.map((tech) => (
                  <Badge key={tech} colorScheme="gray" ml={2}>
                    {tech}
                  </Badge>
                ))}
              </Center>
            </VStack>
          ))}
        </SimpleGrid>
      )}
      {!isPortrait && maximized && (
        <SimpleGrid
          columns={3}
          gap={2}
          h={[null, null, null, "80%", "100%"]}
          p={2}
          w={[null, null, null, "90%", "90%", `${w}`]}
        >
          {projects.map((elem) => (
            <VStack
              key={elem.name}
              border={border}
              borderBottomRadius="xl"
              color={colorText}
              h={[null, null, null, "280px", "100%"]}
              spacing="10px"
            >
              <Text fontWeight="bold" h="16px">
                {elem.name}
              </Text>
              <Link
                h={[null, null, null, "100px", heightImageProject]}
                href={elem.demo}
                target="_blank"
              >
                <Skeleton h="150px" isLoaded={loaded} w="100%">
                  <Image
                    ref={imageRef}
                    alt={elem.name}
                    src={elem.img}
                    w="100%"
                    onLoad={() => {
                      setLoaded(true)
                    }}
                  />
                </Skeleton>
              </Link>
              <Link bg="white" borderRadius="md" h="22px" href={elem.github} target="_blank">
                <Image h="20px" src={github} />
              </Link>
              <Box bg={bgItem} h="52px" m="auto" p={1} w="100%">
                <Text>{elem.description}</Text>
              </Box>
              <Center h="28px" w="100%">
                {elem.techs.map((tech) => (
                  <Badge key={tech} colorScheme="gray" ml={2}>
                    {tech}
                  </Badge>
                ))}
              </Center>
            </VStack>
          ))}
        </SimpleGrid>
      )}
      {isPortrait && (
        <SimpleGrid columns={[1, 2]} gap={2} h={h} overflow="scroll" p={1} w={w}>
          {projects.map((elem) => (
            <VStack
              key={elem.name}
              bg={bgItem}
              border={border}
              borderBottomRadius="xl"
              color={colorText}
              h="100%"
              transitionTimingFunction="ease-in-out"
            >
              <Text fontWeight="bold">{elem.name}</Text>
              <Link h={["100%", "80%"]} href={elem.demo} target="_blank">
                <Skeleton h="50px" isLoaded={loaded} w="100%">
                  <Image
                    ref={imageRef}
                    alt={elem.name}
                    h="130px"
                    src={elem.img}
                    onLoad={() => {
                      setLoaded(true)
                    }}
                  />
                </Skeleton>
              </Link>
              <Box bg={bgItem} borderBottomRadius="md" h="80px" overflow="hidden" p={1} w="100%">
                <Text fontSize={["small", "initial"]}>{elem.description}</Text>
              </Box>
              <Center h="28px" w="100%">
                {elem.techs.map((tech) => (
                  <Badge key={tech} colorScheme="gray" ml={2}>
                    {tech}
                  </Badge>
                ))}
              </Center>
            </VStack>
          ))}
        </SimpleGrid>
      )}
    </Center>
  )
}

export default Projects
