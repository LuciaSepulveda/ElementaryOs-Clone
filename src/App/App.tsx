import {Box} from "@chakra-ui/react"
import * as React from "react"
import {motion} from "framer-motion"

import {usePrograms} from "../context/hooks"
import fondo from "../assets/fondo.jpg"
import BottomBar from "../components/BottomBar/BottomBar"
import TopBar from "../components/TopBar/TopBar"
import Window from "../components/Window/Window"

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
      w="100%"
    >
      <TopBar />
      <motion.div ref={constraintRef} style={{width: "100%", height: "90%", overflow: "hidden"}}>
        {programs.map((elem) => {
          if (elem.open === true) return <Window key={elem.name} program={elem} />
        })}
      </motion.div>
      <BottomBar programs={programs} />
    </Box>
  )
}

export default App
