import {Box, Center, Flex, Text} from "@chakra-ui/react"
import {useMediaQuery} from "react-responsive"
import * as React from "react"
import {motion} from "framer-motion"

import {
  useCloseProgram,
  useMaximizedProgram,
  useMinimizedProgram,
  useSectionAbout,
} from "../../context/hooks"
import {Program} from "../../types/types"

interface Props {
  program: Program
}

const Window: React.FC<Props> = ({program, children}) => {
  const close = useCloseProgram()
  const maximized = useMaximizedProgram()
  const minimized = useMinimizedProgram()
  const section = useSectionAbout()
  const isPortrait = useMediaQuery({query: "(orientation: portrait)"})

  return (
    <>
      {program.maximized === false && !isPortrait && (
        <motion.div
          animate={{y: 0, scale: 1}}
          exit={{scale: 0.5, y: -500}}
          initial={{y: 500, scale: 0.2}}
        >
          <Box
            bg="#242424"
            border="1px solid"
            borderColor="black"
            borderRadius="xl"
            boxShadow="lg"
            m="10%"
            position="relative"
            width="fit-content"
            zIndex="1"
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
                onClick={() => {
                  close(program)
                }}
              />
              <Box
                alignSelf="center"
                as="button"
                bg="#F6AD3B"
                borderRadius="50%"
                h="15px"
                ml="8px"
                w="15px"
                onClick={() => {
                  minimized(program), close(program)
                }}
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
              <Center w="85%">
                {program.name === "User" && (
                  <Text color="white" fontWeight="bold">
                    {section} -
                  </Text>
                )}
                <Text color="white" fontWeight="bold" ml="5px">
                  {program.name}
                </Text>
              </Center>
            </Flex>
            {children}
          </Box>
        </motion.div>
      )}
      {program.maximized === true && !isPortrait && (
        <motion.div
          animate={{scale: 1}}
          initial={{scale: 0.5}}
          style={{height: "90%", width: "100%"}}
        >
          <Box
            bg="#242424"
            border="1px solid"
            borderColor="black"
            borderRadius="xl"
            borderTopRadius="none"
            boxShadow="lg"
            h="100%"
            position="relative"
            w="100%"
            zIndex="10"
          >
            <Flex bg="#313131" h="30px" w="100%">
              <Box
                alignSelf="center"
                as="button"
                bg="#EF5050"
                borderRadius="50%"
                h="15px"
                ml="10px"
                w="15px"
                onClick={() => {
                  close(program)
                }}
              />
              <Box
                alignSelf="center"
                as="button"
                bg="#F6AD3B"
                borderRadius="50%"
                h="15px"
                ml="8px"
                w="15px"
                onClick={() => {
                  minimized(program), close(program)
                }}
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
              <Center w="95%">
                {program.name === "User" && (
                  <Text color="white" fontWeight="bold">
                    {section} -
                  </Text>
                )}
                <Text color="white" fontWeight="bold" ml="5px">
                  {program.name}
                </Text>
              </Center>
            </Flex>
            {children}
          </Box>
        </motion.div>
      )}
      {isPortrait && (
        <motion.div
          animate={{y: 0, scale: 1}}
          exit={{scale: 0.5, y: -500}}
          initial={{y: 500, scale: 0.2}}
          style={{height: "85%", width: "100%"}}
        >
          <Box
            bg="#242424"
            border="1px solid"
            borderColor="black"
            borderRadius="xl"
            borderTopRadius="none"
            boxShadow="lg"
            h="100%"
            position="relative"
            w="100%"
          >
            <Flex bg="#313131" h="30px" w="100%">
              <Box
                alignSelf="center"
                as="button"
                bg="#EF5050"
                borderRadius="50%"
                h="15px"
                ml="10px"
                w="15px"
                onClick={() => {
                  close(program)
                }}
              />
              <Box
                alignSelf="center"
                as="button"
                bg="#F6AD3B"
                borderRadius="50%"
                h="15px"
                ml="8px"
                w="15px"
                onClick={() => {
                  minimized(program), close(program)
                }}
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
              <Center w="85%">
                {program.name === "User" && (
                  <Text color="white" fontWeight="bold">
                    {section} -
                  </Text>
                )}
                <Text color="white" fontWeight="bold" ml="5px">
                  {program.name}
                </Text>
              </Center>
            </Flex>
            {children}
          </Box>
        </motion.div>
      )}
    </>
  )
}

export default Window
