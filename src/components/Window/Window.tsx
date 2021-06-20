import {Box, Flex, Button} from "@chakra-ui/react"
import {motion} from "framer-motion"
import * as React from "react"

import {useCloseProgram, useMaximizedProgram} from "../../context/hooks"
import {Program} from "../../types/types"

interface Props {
  program: Program
}

const Window: React.FC<Props> = ({program}) => {
  const constraintRef = React.useRef(null)
  const close = useCloseProgram()
  const maximized = useMaximizedProgram()

  return (
    <>
      {program.maximized === false && (
        <motion.div
          ref={constraintRef}
          drag
          dragConstraints={{top: -150, left: -150, right: 350, bottom: -50}}
          style={{width: "100%", height: "100%", position: "absolute"}}
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
              <Box
                alignSelf="center"
                as="button"
                bg="#EF5050"
                borderRadius="50%"
                h="15px"
                ml="10px"
                w="15px"
                onClick={() => close(program)}
              />
              <Box
                alignSelf="center"
                as="button"
                bg="#F6AD3B"
                borderRadius="50%"
                h="15px"
                ml="8px"
                w="15px"
              />
              <Box
                alignSelf="center"
                as="button"
                bg="#4DC849"
                borderRadius="50%"
                h="15px"
                ml="8px"
                w="15px"
                onClick={() => maximized(program)}
              />
            </Flex>
            {program.name}
          </Box>
        </motion.div>
      )}
      {program.maximized === true && (
        <Box
          bg="#242424"
          border="1px solid"
          borderColor="black"
          borderRadius="xl"
          borderTopRadius="none"
          boxShadow="lg"
          h="98%"
          position="sticky"
          w="100%"
        >
          <Flex bg="#313131" borderTopRadius="xl" h="30px" w="100%">
            <Box
              alignSelf="center"
              as="button"
              bg="#EF5050"
              borderRadius="50%"
              h="15px"
              ml="10px"
              w="15px"
              onClick={() => close(program)}
            />
            <Box
              alignSelf="center"
              as="button"
              bg="#F6AD3B"
              borderRadius="50%"
              h="15px"
              ml="8px"
              w="15px"
            />
            <Box
              alignSelf="center"
              as="button"
              bg="#4DC849"
              borderRadius="50%"
              h="15px"
              ml="8px"
              w="15px"
              onClick={() => maximized(program)}
            />
          </Flex>
          {program.name}
        </Box>
      )}
    </>
  )
}

export default Window
