import {Box} from "@chakra-ui/react"
import * as React from "react"
import {motion} from "framer-motion"

import {usePrograms} from "../context/hooks"
import fondo from "../assets/fondo.jpg"
import BottomBar from "../components/BottomBar/BottomBar"
import TopBar from "../components/TopBar/TopBar"
import Window from "../components/Window/Window"
import About from "../windows/About"

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
      position="fixed"
      transition="0.1s"
      w="100%"
    >
      <TopBar />
      <motion.div ref={constraintRef} style={{width: "100%", height: "90%", overflow: "hidden"}}>
        {programs.map((elem) => {
          if (elem.open === true && elem.maximized === false)
            return (
              <Window key={elem.name} program={elem}>
                {elem.name === "User" && <About />}
              </Window>
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
      </motion.div>
      <BottomBar programs={programs} />
    </Box>
  )
}

export default App
