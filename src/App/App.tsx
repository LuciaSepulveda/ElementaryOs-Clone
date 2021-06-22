import {Box} from "@chakra-ui/react"
import * as React from "react"
import {motion} from "framer-motion"

import {usePrograms} from "../context/hooks"
import fondo from "../assets/fondo.jpg"
import BottomBar from "../components/BottomBar/BottomBar"
import TopBar from "../components/TopBar/TopBar"
import Window from "../components/Window/Window"
import About from "../windows/About"
import Projects from "../windows/Projects"

const App: React.FC = () => {
  const constraintRef = React.useRef(null)
  const programs = usePrograms()

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
      <motion.div ref={constraintRef} style={{width: "100%", height: "90%"}} />
      {programs.map((elem) => {
        if (elem.open === true && elem.maximized === false)
          return (
            <motion.div
              drag
              dragConstraints={constraintRef}
              style={{position: "absolute", top: "100px", left: "25%"}}
            >
              <Window key={elem.name} program={elem}>
                {elem.name === "User" && <About />}
                {elem.name === "Projects" && <Projects />}
              </Window>
            </motion.div>
          )
        if (elem.open === true && elem.maximized === true)
          return (
            <Window key={elem.name} program={elem}>
              <Box bg="blue.900" h="100%" w="100%">
                hola
              </Box>
            </Window>
          )
      })}
      <BottomBar programs={programs} />
    </Box>
  )
}

export default App
