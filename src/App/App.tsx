import {Box} from "@chakra-ui/react"
import * as React from "react"
import {motion} from "framer-motion"
import {useMediaQuery} from "react-responsive"

import {useAnyProgramMaximized, useNoProgramsOpen, usePrograms} from "../context/hooks"
import fondo from "../assets/fondo.jpg"
import BottomBar from "../components/BottomBar/BottomBar"
import TopBar from "../components/TopBar/TopBar"
import Window from "../components/Window/Window"
import About from "../programs/About"
import Projects from "../programs/Projects"
import Contact from "../programs/Contact"

const App: React.FC = () => {
  const constraintRef = React.useRef(null)
  const programs = usePrograms()
  const noProgramsOpen = useNoProgramsOpen()
  const anyProgramMaximized = useAnyProgramMaximized()
  const isPortrait = useMediaQuery({query: "(orientation: portrait)"})

  return (
    <Box
      backgroundImage={fondo}
      backgroundPosition="center"
      backgroundSize="cover"
      h="100vh"
      overflow="hidden"
      position="absolute"
      transition="0.1s"
      w="100%"
    >
      <TopBar />
      {isPortrait && (
        <>
          {programs.map((elem) => {
            if (elem.open === true)
              return (
                <Window key={elem.name} program={elem}>
                  {elem.name === "User" && <About h="96%" w="100%" />}
                  {elem.name === "Projects" && <Projects h="96%" w="90%" />}
                  {elem.name === "Contact" && <Contact h="96%" w="100%" />}
                </Window>
              )
          })}
          {noProgramsOpen && <Box h={["84%", "90%"]} w="100%" />}
        </>
      )}
      {!isPortrait && (
        <>
          {!noProgramsOpen && !anyProgramMaximized && (
            <motion.div ref={constraintRef} style={{width: "100%", height: "90%"}} />
          )}
          {programs.map((elem) => {
            if (elem.open === true && elem.maximized === false)
              return (
                <motion.div
                  drag
                  dragConstraints={constraintRef}
                  style={{position: "absolute", top: "100px", left: "25%"}}
                >
                  <Window key={elem.name} program={elem}>
                    {elem.name === "User" && <About h="500px" w="800px" />}
                    {elem.name === "Projects" && <Projects h="fit-content" w="900px" />}
                    {elem.name === "Contact" && <Contact h="600px" w="800px" />}
                  </Window>
                </motion.div>
              )
            if (elem.open === true && elem.maximized === true)
              return (
                <Window key={elem.name} program={elem}>
                  {elem.name === "User" && <About h="96%" w="100%" />}
                  {elem.name === "Projects" && <Projects h="80%" w="80%" />}
                </Window>
              )
          })}
          {noProgramsOpen && <Box h="90%" w="100%" />}
        </>
      )}
      <BottomBar programs={programs} />
    </Box>
  )
}

export default App
