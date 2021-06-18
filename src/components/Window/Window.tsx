import {Box} from "@chakra-ui/react"
import {motion} from "framer-motion"
import * as React from "react"

const Window: React.FC = () => {
  return (
    <>
      <motion.div
        drag
        dragConstraints={{top: -70, left: -50, right: 50, bottom: 50}}
        style={{width: "100%", height: "100%"}}
      >
        <Box
          bg="#333333"
          border="1px solid"
          borderColor="black"
          borderRadius="xl"
          boxShadow="lg"
          h="60%"
          m="10%"
          w="70%"
        >
          hola
        </Box>
      </motion.div>
    </>
  )
}

export default Window
