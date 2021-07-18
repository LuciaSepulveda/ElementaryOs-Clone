import {Box, Center, Image, Spinner} from "@chakra-ui/react"
import * as React from "react"
import {AnimatePresence, motion} from "framer-motion"
import {useMediaQuery} from "react-responsive"

import {
  useNoProgramsOpen,
  usePrograms,
  useWallpaper,
  useChangeStatus,
  useStatus,
} from "../context/hooks"
import BottomBar from "../components/BottomBar/BottomBar"
import TopBar from "../components/TopBar/TopBar"
import Window from "../components/Window/Window"
import About from "../programs/About"
import Projects from "../programs/Projects"
import Contact from "../programs/Contact"
import Wallpapers from "../programs/Wallpapers/Wallpapers"
import {Status} from "../types/types"

const App: React.FC = () => {
  const constraintRef = React.useRef(null)
  const programs = usePrograms()
  const noProgramsOpen = useNoProgramsOpen()
  const isPortrait = useMediaQuery({query: "(orientation: portrait)"})
  const wallpaper = useWallpaper()
  const imageRef = React.useRef<HTMLImageElement>(null)
  const [loaded, setLoaded] = React.useState<boolean>(false)
  const changeStatus = useChangeStatus()
  const status = useStatus()

  React.useEffect(() => {
    if (!loaded && imageRef.current?.complete && imageRef.current?.naturalWidth > 0) {
      changeStatus(Status.ready)
      setLoaded(true)
    }
  }, [loaded])

  return (
    <Box h="100vh" overflow="hidden" position="absolute" w="100%">
      <Image
        ref={imageRef}
        fit="cover"
        h="100%"
        position="absolute"
        src={wallpaper}
        w="100%"
        onLoad={() => {
          setLoaded(true)
          changeStatus(Status.ready)
        }}
      />
      {status === Status.loading && (
        <Center
          alignContent="center"
          bgGradient={[
            "linear(to-tr, teal.300,yellow.400)",
            "linear(to-t, blue.200, teal.500)",
            "linear(to-b, orange.100, purple.300)",
          ]}
          h="100vh"
          w="100%"
        >
          <Spinner size="xl" />
        </Center>
      )}
      {status === Status.ready && (
        <>
          <TopBar />
          {isPortrait && (
            <>
              {noProgramsOpen && <Box h={["84%", "88%"]} position="absolute" w="100%" />}
              {programs.map((elem) => {
                return (
                  elem.open === true && (
                    <Window key={elem.name} program={elem}>
                      {elem.name === "User" && <About h="94%" w="100%" />}
                      {elem.name === "Projects" && <Projects h="94%" maximized={true} w="90%" />}
                      {elem.name === "Contact" && <Contact h="94%" w="100%" />}
                      {elem.name === "Wallpapers" && <Wallpapers h="96%" w="100%" />}
                    </Window>
                  )
                )
              })}
            </>
          )}
          {!isPortrait && (
            <>
              <motion.div
                ref={constraintRef}
                style={{
                  width: "100%",
                  height: "89%",
                  position: "absolute",
                }}
              />
              {programs.map((elem) => {
                return (
                  <AnimatePresence key={elem.name}>
                    {elem.open === true && elem.maximized === false && (
                      <motion.div
                        drag
                        dragConstraints={constraintRef}
                        style={{
                          position: "absolute",
                          top: "100px",
                          left: "25%",
                        }}
                      >
                        <Window program={elem}>
                          {elem.name === "User" && <About h="500px" w="800px" />}
                          {elem.name === "Projects" && (
                            <Projects h="fit-content" maximized={false} w="900px" />
                          )}
                          {elem.name === "Contact" && <Contact h="600px" w="800px" />}
                          {elem.name === "Wallpapers" && <Wallpapers h="fit-content" w="800px" />}
                        </Window>
                      </motion.div>
                    )}
                    {elem.open === true && elem.maximized === true && (
                      <Window program={elem}>
                        {elem.name === "User" && <About h="96%" w="100%" />}
                        {elem.name === "Projects" && <Projects h="96%" maximized={true} w="70%" />}
                        {elem.name === "Contact" && <Contact h="96%" w="100%" />}
                        {elem.name === "Wallpapers" && <Wallpapers h="90%" w="80%" />}
                      </Window>
                    )}
                  </AnimatePresence>
                )
              })}
            </>
          )}
          <BottomBar programs={programs} />
        </>
      )}
    </Box>
  )
}

export default App
