import { useLanguage } from "@/context/hooks"
import { Box, Center, Flex, Text, useColorModeValue } from "@chakra-ui/react"
import Link from "next/link"
import { motion } from "framer-motion"

const MotionBox = motion(Box)

const Footer = () => {
  const language = useLanguage()
  const date = new Date()

  return (
    <Center zIndex={1} position="relative" py={4}>
      <Flex flexDirection={["column", "row"]} align="center" gap={2}>
        <Text>
          © {date.getFullYear()} |{" "}
          {language === "ES" ? "Desarrollado por" : "Coded by"}
        </Text>
        <Box position="relative" width="fit-content">
          <MotionBox
            zIndex={0}
            position="absolute"
            h="104%"
            bg={useColorModeValue("rgb(101, 212, 97)", "rgb(120, 233, 143)")}
            bottom={0}
            left="-2%"
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
          <Link href="https://github.com/LuciaSepulveda">
            <Text color="black" zIndex={2} position="relative">
              Lucia Sepulveda
            </Text>
          </Link>
        </Box>
      </Flex>
    </Center>
  )
}

export default Footer
