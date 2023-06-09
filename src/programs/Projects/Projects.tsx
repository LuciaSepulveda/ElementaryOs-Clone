import {
  Center,
  Box,
  Skeleton,
  Text,
  VStack,
  Link,
  useColorModeValue,
  SimpleGrid,
  Badge,
} from "@chakra-ui/react"
import { useMediaQuery } from "react-responsive"
import Image from "next/image"

import { projects, projectsEn } from "../../data/data"
import { useLanguage } from "../../context/hooks"
import { useEffect, useRef, useState } from "react"

interface Props {
  w: string
  h: string
  maximized: boolean
}

const Projects = ({ h, w, maximized }: Props) => {
  const imageRef = useRef<HTMLImageElement>(null)
  const [loaded, setLoaded] = useState<boolean>(false)
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" })
  const bg = useColorModeValue("#FBFBFB", "#242424")
  const bgItem = useColorModeValue("#A0A7AC", "#333333")
  const border = useColorModeValue("2px solid #A0A7AC", "2px solid #333333")
  const colorText = useColorModeValue("#242424", "#FBFBFB")
  const language = useLanguage()
  const [arrayProjects, setArrayProjects] = useState(projects)

  useEffect(() => {
    if (language === "ES") {
      setArrayProjects(projects)
    } else {
      setArrayProjects(projectsEn)
    }
  }, [language])

  useEffect(() => {
    if (
      !loaded &&
      imageRef.current?.complete &&
      imageRef.current?.naturalWidth > 0
    ) {
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
        <SimpleGrid overflowY="scroll" columns={3} gap={4} h="100%" p={2} w={w}>
          {arrayProjects.map((elem) => (
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
              <Link
                href={elem.demo}
                h={window.innerHeight > 725 ? "100%" : "70px"}
                target="_blank"
                position="relative"
                w="100%"
              >
                <Skeleton position="relative" h="100%" isLoaded={loaded}>
                  <Image
                    objectFit="contain"
                    fill={true}
                    src={elem.img}
                    ref={imageRef}
                    alt={elem.name}
                    onLoad={() => setLoaded(true)}
                  />
                </Skeleton>
              </Link>
              {elem.github && (
                <Link
                  bg="white"
                  borderRadius="md"
                  h="20px"
                  href={elem.github}
                  target="_blank"
                >
                  <Image
                    width={50}
                    height={20}
                    src="/GitHub_Logo.png"
                    alt="Github"
                  />
                </Link>
              )}
              <Box bg={bgItem} h="50px" m="auto" p={1}>
                <Text textAlign="center">{elem.description}</Text>
              </Box>
              <Center w="100%" overflow="hidden">
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
          overflowY="scroll"
        >
          {projects.map((elem) => (
            <VStack
              key={elem.name}
              border={border}
              borderBottomRadius="xl"
              color={colorText}
              h={[null, null, null, "280px", "100%"]}
            >
              <Text fontWeight="bold" h="16px">
                {elem.name}
              </Text>
              <Link
                h={[
                  null,
                  null,
                  null,
                  "100%",
                  window.innerHeight > 725 ? "100%" : "130px",
                ]}
                href={elem.demo}
                target="_blank"
                position="relative"
                w="100%"
              >
                <Skeleton
                  position="relative"
                  h="100%"
                  isLoaded={loaded}
                  w="100%"
                >
                  <Image
                    ref={imageRef}
                    alt={elem.name}
                    src={elem.img}
                    fill={true}
                    objectFit="contain"
                    onLoad={() => {
                      setLoaded(true)
                    }}
                  />
                </Skeleton>
              </Link>
              <Link
                bg="white"
                borderRadius="md"
                h="22px"
                href={elem.github}
                target="_blank"
              >
                <Image
                  height={20}
                  width={50}
                  src="/GitHub_Logo.png"
                  alt="Github"
                />
              </Link>
              <Box bg={bgItem} h="52px" m="auto" p={1} w="100%">
                <Text textAlign="center">{elem.description}</Text>
              </Box>
              <Center h="28px" w="100%" overflow="hidden">
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
        <SimpleGrid
          columns={[1, 2]}
          gap={2}
          h={h}
          overflow="scroll"
          p={1}
          w={w}
        >
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
              <Link
                w="100%"
                position="relative"
                h={["100%", "80%"]}
                href={elem.demo}
                target="_blank"
              >
                <Skeleton
                  position="relative"
                  h="50px"
                  isLoaded={loaded}
                  w="100%"
                >
                  <Image
                    ref={imageRef}
                    alt={elem.name}
                    height={50}
                    width={200}
                    src={elem.img}
                    onLoad={() => {
                      setLoaded(true)
                    }}
                    style={{ margin: "auto" }}
                  />
                </Skeleton>
              </Link>
              <Box
                bg={bgItem}
                borderBottomRadius="md"
                h="80px"
                overflow="hidden"
                p={1}
                w="100%"
              >
                <Text textAlign="center" fontSize={["small", "initial"]}>
                  {elem.description}
                </Text>
              </Box>
              <Center h="28px" w="100%" overflow="hidden" display="flex" flexWrap="wrap">
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
