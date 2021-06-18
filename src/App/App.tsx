import {Box} from "@chakra-ui/react"
import * as React from "react"
import {motion} from "framer-motion"

import fondo from "../assets/fondo.jpg"
import TopBar from "../components/TopBar/TopBar"
import Window from "../components/Window/Window"

const App: React.FC = () => {
  const constraintRef = React.useRef(null)

  return (
    <Box
      backgroundImage={fondo}
      backgroundPosition="center"
      backgroundSize="cover"
      h="100vh"
      w="100%"
    >
      <TopBar />
      <motion.div ref={constraintRef} style={{width: "100%", height: "95%", overflow: "hidden"}}>
        <Window />
      </motion.div>
    </Box>
  )
}

export default App
