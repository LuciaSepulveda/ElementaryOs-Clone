import * as React from "react"
import {Grid, GridItem, VStack, Text} from "@chakra-ui/react"

interface Props {
  w: string
  h: string
}

const Contact: React.FC<Props> = ({w, h}) => {
  return (
    <Grid
      bg="#23283A"
      borderBottomRadius="xl"
      color="#76C4C0"
      h={h}
      templateColumns="repeat(3, 1fr)"
      w={w}
    >
      <GridItem colSpan={1}>
        <VStack>
          <Text>no se que poner</Text>
          <Text color="#A29AED">Hola</Text>
        </VStack>
      </GridItem>
    </Grid>
  )
}

export default Contact
