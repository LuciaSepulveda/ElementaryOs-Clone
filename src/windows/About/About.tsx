import * as React from "react"
import {Box, Grid, GridItem, Text, VStack} from "@chakra-ui/react"

const About: React.FC = () => {
  return (
    <Grid bg="#07273B" h="500px" templateColumns="repeat(4, 1fr)" w="800px">
      <GridItem bg="#062132" colSpan={1} h="100%">
        <VStack>
          <Box bg="#09334E" w="100%" p={1}>
            <Text align="justify" color="white" fontSize="small" fontWeight="bold" ml="10px">
              ABOUT
            </Text>
          </Box>
          <Box w="100%">
            <Text ml="10px" align="justify" color="white">
              Sobre mi
            </Text>
          </Box>
          <Box w="100%">
            <Text ml="10px" align="justify" color="white">
              Tecnologias
            </Text>
          </Box>
        </VStack>
      </GridItem>
      <GridItem colSpan={3}>
        <VStack spacing={0}>
          <Text align="justify" color="#D5971A">
            Hola! Mi nombre es Lucia.
          </Text>
          <Text align="justify" color="#D5971A">
            Aca vas a poder encontrar informacion sobre mi
          </Text>
        </VStack>
      </GridItem>
    </Grid>
  )
}

export default About
