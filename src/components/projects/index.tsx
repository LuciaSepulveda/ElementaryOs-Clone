import { useLanguage } from "@/context/hooks"
import { projects as projectsEs, projectsEn } from "@/data/data"
import {
  Box,
  chakra,
  Center,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const MotionBox = motion(Box)

const Projects = () => {
  const language = useLanguage()
  const [projects, setProjects] = useState(projectsEs)
  const { colorMode } = useColorMode()

  useEffect(() => {
    if (language === "ES") {
      setProjects(projectsEs)
    } else setProjects(projectsEn)
  }, [language])

  const getColor = (tech: string) => {
    switch (tech) {
      case "React":
        if (colorMode !== "light") return "rgb(84, 167, 248)"
        else return "rgb(127, 193, 250)"
      case "Docusaurus":
        if (colorMode !== "light") return "rgb(84, 167, 248)"
        else return "rgb(127, 193, 250)"
      case "Next":
        if (colorMode !== "light") return "rgb(120, 233, 143)"
        else return "rgb(101, 212, 97)"
      case "Typescript":
        if (colorMode !== "light") return "rgb(234, 98, 118)"
        else return "rgb(238, 121, 70)"
      case "Chakra-UI":
        if (colorMode !== "light") return "rgb(223, 200, 122)"
        else return "rgb(243, 174, 66)"
      case "Styled components":
        if (colorMode !== "light") return "rgb(223, 200, 122)"
        else return "rgb(243, 174, 66)"
      case "SASS":
        if (colorMode !== "light") return "rgb(223, 200, 122)"
        else return "rgb(243, 174, 66)"
      default:
        if (colorMode !== "light") return "rgb(174, 139, 246)"
        else return "rgb(97, 211, 196)"
    }
  }

  return (
    <VStack py={10} id="projects" zIndex={1} position="relative">
      <Box position="relative" mb={4}>
        <Heading as="h2" zIndex={2} mb={6}>
          {language === "ES" ? "PROYECTOS" : "PROJECTS"}
        </Heading>
        <MotionBox
          zIndex={0}
          position="absolute"
          h="4%"
          bg={useColorModeValue("rgb(101, 212, 97)", "rgb(120, 233, 143)")}
          bottom={6}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.3,
          }}
          whileInView={{ width: "100%" }}
          initial={{ width: 0 }}
          viewport={{ once: true }}
          borderRadius="sm"
        />
      </Box>
      <Box position="relative">
        <Text
          position="relative"
          zIndex={1}
          fontSize="2xl"
          fontWeight="semibold"
          color="black"
        >
          Participación en Genosha
        </Text>
        <MotionBox
          zIndex={0}
          position="absolute"
          h="102%"
          left="-2%"
          bg={useColorModeValue("rgb(97, 211, 196)", "rgb(174, 139, 246)")}
          bottom={0}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.3,
          }}
          whileInView={{ width: "104%" }}
          initial={{ width: 0 }}
          viewport={{ once: true }}
          borderRadius="sm"
        />
      </Box>
      <chakra.ul
        display="flex"
        flexWrap="wrap"
        gap={8}
        rowGap={10}
        justifyContent="center"
        w="full"
        py={10}
      >
        {projects
          .filter((project) => project.genosha)
          .map((project) => (
            <chakra.li
              key={project.name}
              maxWidth="300px"
              w="full"
              borderRadius="md"
              h={80}
              py={2}
              gap={2}
              justifyContent="space-between"
              alignItems="center"
              flexDirection="column"
              display="flex"
              listStyleType="none"
            >
              <Center p={1}>
                <Text fontSize="xl" fontWeight="bold">
                  {project.name}
                </Text>
              </Center>
              <Box w="full" position="relative" h={40}>
                <Link href={project.demo} aria-label={project.name}>
                  <Image
                    objectFit="cover"
                    fill={true}
                    src={project.img}
                    alt={project.name}
                  />
                </Link>
              </Box>
              <Text
                borderBottom="1px solid"
                h={16}
                px={2}
                w="100%"
                textAlign="center"
              >
                {project.description}
              </Text>
              <chakra.ul display="flex" gap={2}>
                {project.techs.map((tech, index) => (
                  <chakra.li
                    listStyleType="none"
                    key={tech}
                    position="relative"
                  >
                    <MotionBox
                      zIndex={0}
                      position="absolute"
                      h="104%"
                      bg={getColor(tech)}
                      bottom={0}
                      left="-2%"
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                        delay: 0.3 + 0.3 * index,
                      }}
                      whileInView={{ width: "104%" }}
                      initial={{ width: 0 }}
                      viewport={{ once: true }}
                      borderRadius="sm"
                    />
                    <Text
                      color="black"
                      fontWeight="bold"
                      zIndex={2}
                      position="relative"
                    >
                      {tech}
                    </Text>
                  </chakra.li>
                ))}
              </chakra.ul>
              <HStack>
                <Box
                  position="relative"
                  maxH={6}
                  w={16}
                  bg="black"
                  borderRadius="xl"
                >
                  <Link href={project.demo} aria-label="Demo">
                    <Text
                      color="white"
                      fontWeight="extrabold"
                      textAlign="center"
                    >
                      Demo
                    </Text>
                  </Link>
                </Box>
              </HStack>
            </chakra.li>
          ))}
      </chakra.ul>
      <MotionBox
        zIndex={0}
        h="1px"
        bg={useColorModeValue("rgb(101, 212, 97)", "rgb(120, 233, 143)")}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
          delay: 0.3,
        }}
        whileInView={{ width: "100%" }}
        initial={{ width: 0 }}
        viewport={{ once: true }}
        borderRadius="sm"
        position="relative"
        mb={10}
      />
      <Box position="relative" my={"10 !important"}>
        <Text
          position="relative"
          zIndex={1}
          fontSize="2xl"
          fontWeight="semibold"
          color="black"
        >
          Participación en Genosha
        </Text>
        <MotionBox
          zIndex={0}
          position="absolute"
          h="102%"
          left="-2%"
          bg={useColorModeValue("rgb(97, 211, 196)", "rgb(174, 139, 246)")}
          bottom={0}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.3,
          }}
          whileInView={{ width: "104%" }}
          initial={{ width: 0 }}
          viewport={{ once: true }}
          borderRadius="sm"
        />
      </Box>
      <chakra.ul
        display="flex"
        flexWrap="wrap"
        gap={8}
        rowGap={10}
        justifyContent="center"
        w="full"
      >
        {projects
          .filter((project) => !project.genosha)
          .map((project) => (
            <chakra.li
              key={project.name}
              maxWidth="300px"
              w="full"
              borderRadius="md"
              h={80}
              py={2}
              gap={2}
              justifyContent="space-between"
              alignItems="center"
              flexDirection="column"
              display="flex"
              listStyleType="none"
            >
              <Center p={1}>
                <Text fontSize="xl" fontWeight="bold">
                  {project.name}
                </Text>
              </Center>
              <Box w="full" position="relative" h={40}>
                <Link href={project.demo} aria-label={project.name}>
                  <Image
                    objectFit="cover"
                    fill={true}
                    src={project.img}
                    alt={project.name}
                  />
                </Link>
              </Box>
              <Text
                borderBottom="1px solid"
                h={16}
                px={2}
                w="100%"
                textAlign="center"
              >
                {project.description}
              </Text>
              <chakra.ul display="flex" gap={2}>
                {project.techs.map((tech, index) => (
                  <chakra.li
                    listStyleType="none"
                    key={tech}
                    position="relative"
                  >
                    <MotionBox
                      zIndex={0}
                      position="absolute"
                      h="104%"
                      bg={getColor(tech)}
                      bottom={0}
                      left="-2%"
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                        delay: 0.3 + 0.3 * index,
                      }}
                      whileInView={{ width: "104%" }}
                      initial={{ width: 0 }}
                      viewport={{ once: true }}
                      borderRadius="sm"
                    />
                    <Text
                      color="black"
                      fontWeight="bold"
                      zIndex={2}
                      position="relative"
                    >
                      {tech}
                    </Text>
                  </chakra.li>
                ))}
              </chakra.ul>
              <HStack>
                {project.github && (
                  <Box
                    position="relative"
                    h={6}
                    w={16}
                    bg="white"
                    borderRadius="xl"
                  >
                    <Link href={project.github} aria-label="Github">
                      <Text
                        color="black"
                        fontWeight="extrabold"
                        textAlign="center"
                      >
                        Github
                      </Text>
                    </Link>
                  </Box>
                )}
                <Box
                  position="relative"
                  maxH={6}
                  w={16}
                  bg="black"
                  borderRadius="xl"
                >
                  <Link href={project.demo} aria-label="Demo">
                    <Text
                      color="white"
                      fontWeight="extrabold"
                      textAlign="center"
                    >
                      Demo
                    </Text>
                  </Link>
                </Box>
              </HStack>
            </chakra.li>
          ))}
      </chakra.ul>
    </VStack>
  )
}

export default Projects
