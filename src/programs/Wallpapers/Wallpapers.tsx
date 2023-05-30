import {
  Center,
  useColorModeValue,
  Skeleton,
  Text,
  VStack,
  Flex,
  Box,
} from "@chakra-ui/react"
import { useMediaQuery } from "react-responsive"
import { motion } from "framer-motion"
import Image from "next/image"

import { useChangeWallpaper, useLanguage } from "../../context/hooks"
import { wallpapers } from "../../data/data"
import { useEffect, useRef, useState } from "react"

interface Props {
  h: string
  w: string
}

const Wallpapers = ({ h, w }: Props) => {
  const imageRef = useRef<HTMLImageElement>(null)
  const [loaded, setLoaded] = useState<boolean>(false)
  const bg = useColorModeValue("#FBFBFB", "#242424")
  const colorText = useColorModeValue("#242424", "#FBFBFB")
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" })
  const changeWallpaper = useChangeWallpaper()
  const language = useLanguage()

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
      bg={bg}
      borderBottomRadius="xl"
      color={colorText}
      h="96%"
      p={[4, 10]}
      w="100%"
    >
      <VStack h={h} w={[w, w, "90%", "90%", "90%", w]}>
        <Text fontSize="xl" fontWeight="bold">
          {language === "EN"
            ? "Select wallpaper"
            : "Seleccione un fondo de pantalla"}
        </Text>
        {!isPortrait && (
          <Flex
            gap={4}
            h={[null, null, null, "500px", h, h]}
            p={0}
            w={[null, null, null, "100%", "90%", w]}
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
          >
            {wallpapers.map((elem) => (
              <motion.div
                key={elem}
                whileHover={{ scale: 1.05, y: -5 }}
                style={{
                  height: "100%",
                  maxHeight: "50%",
                  width: "100%",
                  maxWidth: "30%",
                  position: "relative",
                }}
              >
                <Box
                  as="button"
                  h="100%"
                  minH="160px"
                  w="100%"
                  onClick={() => changeWallpaper(elem)}
                  position="relative"
                >
                  <Skeleton
                    h="100%"
                    minHeight="160px"
                    isLoaded={loaded}
                    w="100%"
                    position="relative"
                    objectFit="cover"
                  >
                    <Image
                      ref={imageRef}
                      alt="Wallpaper"
                      fill={true}
                      objectFit="cover"
                      src={elem}
                      onLoad={() => {
                        setLoaded(true)
                      }}
                    />
                  </Skeleton>
                </Box>
              </motion.div>
            ))}
          </Flex>
        )}
        {isPortrait && (
          <Flex
            gap={2}
            w="full"
            overflow="scroll"
            p={2}
            pt={20}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            position="relative"
          >
            {wallpapers.map((elem) => (
              <Box
                key={elem}
                as="button"
                bg="transparent"
                minH={["160px", "260px"]}
                h="100%"
                w={["100%", "60%"]}
                p={1}
                onClick={() => changeWallpaper(elem)}
                position="relative"
              >
                <Skeleton
                  h="100%"
                  isLoaded={loaded}
                  w="100%"
                  position="relative"
                >
                  <Image
                    ref={imageRef}
                    alt="Wallpaper"
                    fill={true}
                    src={elem}
                    onLoad={() => {
                      setLoaded(true)
                    }}
                  />
                </Skeleton>
              </Box>
            ))}
          </Flex>
        )}
      </VStack>
    </Center>
  )
}

export default Wallpapers
