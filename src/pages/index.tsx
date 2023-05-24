import Head from "next/head"
import { Box, Center, Spinner } from "@chakra-ui/react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { useMediaQuery } from "react-responsive"
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
import { Status } from "../types/types"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const constraintRef = useRef(null)
  const programs = usePrograms()
  const noProgramsOpen = useNoProgramsOpen()
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" })
  const wallpaper = useWallpaper()
  const imageRef = useRef<HTMLImageElement>(null)
  const [loaded, setLoaded] = useState<boolean>(false)
  const changeStatus = useChangeStatus()
  const status = useStatus()

  useEffect(() => {
    if (
      !loaded &&
      imageRef.current?.complete &&
      imageRef.current?.naturalWidth > 0
    ) {
      changeStatus(Status.ready)
      setLoaded(true)
    }
  }, [loaded])

  return (
    <>
      <Head>
        <title>Lucia Sepulveda</title>
        <meta name="description" content="Lucia Sepulveda portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/developer.png" />
      </Head>
      <main style={{ height: "100vh", width: "100%" }}>
        <Box h="100vh" overflow="hidden" position="absolute" w="100%">
          {wallpaper && (
            <Image
              ref={imageRef}
              alt="Wallpaper"
              objectFit="cover"
              src={wallpaper}
              fill={true}
              onLoad={() => {
                setLoaded(true)
                changeStatus(Status.ready)
              }}
            />
          )}
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
                  <Box
                    h={["84%", "88%"]}
                    position="absolute"
                    w="100%"
                    zIndex="-1"
                  />
                  {programs.map((elem) => {
                    return (
                      <AnimatePresence key={elem.name}>
                        {elem.open === true && (
                          <Window key={elem.name} program={elem}>
                            {elem.name === "User" && <About h="94%" w="100%" />}
                            {elem.name === "Projects" && (
                              <Projects h="94%" maximized={true} w="90%" />
                            )}
                            {elem.name === "Contact" && (
                              <Contact h="94%" w="100%" />
                            )}
                            {elem.name === "Wallpapers" && (
                              <Wallpapers h="96%" w="100%" />
                            )}
                          </Window>
                        )}
                      </AnimatePresence>
                    )
                  })}
                </>
              )}
              {!isPortrait && (
                <>
                  <motion.div
                    ref={constraintRef}
                    style={{
                      width: "96%",
                      height: "89%",
                      position: "absolute",
                      top: "40px",
                      marginLeft: "2%",
                    }}
                  />
                  {programs.map((elem) => {
                    return (
                      <AnimatePresence key={elem.name}>
                        {elem.open === true && (
                          <motion.div
                            drag={elem.maximized ? false : true}
                            dragConstraints={constraintRef}
                            animate={{
                              x: elem.maximized ? 0 : "",
                              y: elem.maximized ? 0 : "",
                            }}
                            style={{
                              position: elem.maximized
                                ? "relative"
                                : "absolute",
                              height: elem.maximized
                                ? "100%"
                                : elem.name === "User" ||
                                  elem.name === "Contact"
                                ? "500px"
                                : elem.name === "Projects"
                                ? "fit-content"
                                : "600px",
                              width: elem.maximized
                                ? "100%"
                                : elem.name !== "Projects"
                                ? "800px"
                                : "900px",
                              top: 0,
                              bottom: 0,
                              left: 0,
                              right: 0,
                              margin: elem.maximized ? "0" : "auto",
                              transform: elem.maximized
                                ? "translateX(0px) translateY(0px) !important"
                                : "",
                            }}
                          >
                            <Window program={elem}>
                              {elem.name === "User" && (
                                <About
                                  h={elem.maximized ? "96%" : "500px"}
                                  w={elem.maximized ? "100%" : "800px"}
                                />
                              )}
                              {elem.name === "Projects" && (
                                <Projects
                                  h={
                                    elem.maximized
                                      ? "96%"
                                      : window.innerHeight > 725
                                      ? "600px"
                                      : "500px"
                                  }
                                  maximized={elem.maximized}
                                  w={
                                    elem.maximized
                                      ? "70%"
                                      : window.innerHeight > 725
                                      ? "800px"
                                      : "900px"
                                  }
                                />
                              )}
                              {elem.name === "Contact" && (
                                <Contact
                                  h={elem.maximized ? "96%" : "500px"}
                                  w={elem.maximized ? "100%" : "800px"}
                                />
                              )}
                              {elem.name === "Wallpapers" && (
                                <Wallpapers
                                  h={
                                    elem.maximized
                                      ? "90%"
                                      : window.innerHeight > 725
                                      ? "fit-content"
                                      : "400px"
                                  }
                                  w={elem.maximized ? "80%" : "800px"}
                                />
                              )}
                            </Window>
                          </motion.div>
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
      </main>
    </>
  )
}
