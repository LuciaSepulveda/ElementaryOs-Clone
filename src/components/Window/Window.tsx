import {Box, Center, Flex, Text} from "@chakra-ui/react"
import {useMediaQuery} from "react-responsive"
import * as React from "react"

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
  const constraintRef = React.useRef(null)
  const close = useCloseProgram()
  const maximized = useMaximizedProgram()
  const minimized = useMinimizedProgram()
  const section = useSectionAbout()
  const isPortrait = useMediaQuery({query: "(orientation: portrait)"})

  return (
    <>
      {program.maximized === false && !isPortrait && (
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
            <Center w="90%">
              {program.name === "User" && <Text color="white">{section} -</Text>}
              <Text color="white" ml="5px">
                {program.name}
              </Text>
            </Center>
          </Flex>
          {children}
        </Box>
      )}
      {program.maximized === true && !isPortrait && (
        <Box
          bg="#242424"
          border="1px solid"
          borderColor="black"
          borderRadius="xl"
          borderTopRadius="none"
          boxShadow="lg"
          h="90%"
          position="relative"
          w="100%"
          zIndex="10"
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
          </Flex>
          {children}
        </Box>
      )}
      {isPortrait && (
        <Box
          bg="#242424"
          border="1px solid"
          borderColor="black"
          borderRadius="xl"
          borderTopRadius="none"
          boxShadow="lg"
          h={["84%", "90%"]}
          position="relative"
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
          </Flex>
          {children}
        </Box>
      )}
    </>
  )
}

export default Window
