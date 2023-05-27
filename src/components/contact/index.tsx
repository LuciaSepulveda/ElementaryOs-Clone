import { useLanguage } from "@/context/hooks"
import {
  Box,
  Center,
  Heading,
  VStack,
  Text,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import { social } from "../../data/data"
import Link from "next/link"

const MotionBox = motion(Box)

const Contact = () => {
  const language = useLanguage()
  const bg = useColorModeValue("rgb(238, 121, 70)", "rgb(234, 98, 118)")
  return (
    <Center h="800px" id="contact" zIndex={1} position="relative">
      <VStack maxW="4xl">
        <Box position="relative" pt={8}>
          <Heading as="h2" zIndex={2} mb={6}>
            {language === "ES" ? "CONTACTO" : "CONTACT"}
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
        <VStack justifyContent="center" gap={4} alignItems="center" pt={4}>
          {social.map((soc, index) => (
            <Flex key={soc.name} flexDirection={["column", "column", "row", "row", "row"]} gap={2} w="full">
              <Box position="relative">
                <Text
                  fontSize={["xl", "3xl"]}
                  fontWeight="bold"
                  zIndex={2}
                  position="relative"
                >
                  {soc.name}:
                </Text>
                <MotionBox
                  zIndex={0}
                  position="absolute"
                  h="100%"
                  bg={bg}
                  bottom={0}
                  left="-2%"
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                    delay: 0.3 + 0.1 * index,
                  }}
                  whileInView={{ width: "104%" }}
                  initial={{ width: 0 }}
                  viewport={{ once: true }}
                  borderRadius="sm"
                />
              </Box>
              <Link href={soc.link}>
                <Text fontSize={["xl", "3xl"]}>
                  {soc.name === "Email" ? soc.link.slice(-21) : soc.link}
                </Text>
              </Link>
            </Flex>
          ))}
        </VStack>
      </VStack>
    </Center>
  )
}

export default Contact
