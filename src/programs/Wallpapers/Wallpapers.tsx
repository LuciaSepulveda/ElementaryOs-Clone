import {
  Grid,
  GridItem,
  Center,
  useColorModeValue,
  Skeleton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react"
import * as React from "react"
import {useMediaQuery} from "react-responsive"
import {motion} from "framer-motion"

import {useChangeWallpaper} from "../../context/hooks"
import {wallpapers} from "../../data/data"

interface Props {
  h: string
  w: string
}

const Wallpapers: React.FC<Props> = ({h, w}) => {
  const imageRef = React.useRef<HTMLImageElement>(null)
  const [loaded, setLoaded] = React.useState<boolean>(false)
  const bg = useColorModeValue("#FBFBFB", "#242424")
  const colorText = useColorModeValue("#242424", "#FBFBFB")
  const isPortrait = useMediaQuery({query: "(orientation: portrait)"})
  const changeWallpaper = useChangeWallpaper()

  return (
    <Center bg={bg} borderBottomRadius="xl" color={colorText} h="96%" p={[4, 10]} w="100%">
      <VStack h={h} w={w}>
        <Text fontSize="xl" fontWeight="bold">
          Select wallpaper
        </Text>
        {!isPortrait && (
          <Grid gap={4} h={h} p={4} templateColumns="repeat(3, 1fr)" w={w}>
            {wallpapers.map((elem) => (
              <motion.div key={elem} whileHover={{scale: 1.05, y: -5}}>
                <GridItem as="button" colSpan={1} h="100%" onClick={() => changeWallpaper(elem)}>
                  <Skeleton h="160px" isLoaded={loaded} minWidth="200px" w="100%">
                    <Image
                      ref={imageRef}
                      boxShadow="dark-lg"
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
              >
                <Skeleton h="160px" isLoaded={loaded} w="96%">
                  <Image
                    ref={imageRef}
                    boxShadow="xl"
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
