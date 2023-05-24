import {
  Grid,
  GridItem,
  Center,
  useColorModeValue,
  Skeleton,
  Text,
  VStack,
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
          <Grid
            gap={4}
            h={[null, null, null, "500px", h, h]}
            p={0}
            templateColumns="repeat(3, 1fr)"
            w={[null, null, null, "100%", "90%", w]}
          >
            {wallpapers.map((elem) => (
              <motion.div key={elem} whileHover={{ scale: 1.05, y: -5 }}>
                <GridItem
                  as="button"
                  colSpan={1}
                  h="100%"
                  onClick={() => changeWallpaper(elem)}
                  position="relative"
                >
                  <Skeleton
                    h="160px"
                    isLoaded={loaded}
                    minWidth="200px"
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
                </GridItem>
              </motion.div>
            ))}
          </Grid>
        )}
        {isPortrait && (
          <Grid
            gap={2}
            h="100%"
            overflow="scroll"
            p={2}
            templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
          >
            {wallpapers.map((elem) => (
              <GridItem
                key={elem}
                as="button"
                bg="transparent"
                colSpan={1}
                h="100%"
                p={1}
                onClick={() => changeWallpaper(elem)}
                position="relative"
              >
                <Skeleton
                  h="160px"
                  isLoaded={loaded}
                  w="96%"
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
              </GridItem>
            ))}
          </Grid>
        )}
      </VStack>
    </Center>
  )
}

export default Wallpapers
