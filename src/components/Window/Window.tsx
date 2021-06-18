import {Box, Flex, Button} from "@chakra-ui/react"
import {motion} from "framer-motion"
import * as React from "react"

const Window: React.FC = () => {
  const constraintRef = React.useRef(null)

  return (
    <motion.div
      ref={constraintRef}
      drag
      dragConstraints={{top: -180, left: -180, right: 350, bottom: 150}}
      style={{width: "100%", height: "100%"}}
    >
      <Box
        bg="#242424"
        border="1px solid"
        borderColor="black"
        borderRadius="xl"
        boxShadow="lg"
        h="60%"
        m="10%"
        w="70%"
      >
        <Flex bg="#313131" borderTopRadius="xl" h="30px" w="100%">
          <Box alignSelf="center" bg="#EF5050" borderRadius="50%" h="15px" ml="10px" w="15px" />
          <Box alignSelf="center" bg="#F6AD3B" borderRadius="50%" h="15px" ml="8px" w="15px" />
          <Box alignSelf="center" bg="#4DC849" borderRadius="50%" h="15px" ml="8px" w="15px" />
        </Flex>
        hola
      </Box>
    </motion.div>
  )
}

export default Window
