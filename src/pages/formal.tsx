import Hero from "@/components/hero"
import Header from "@/components/header"
import { Container, chakra, useColorModeValue } from "@chakra-ui/react"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"

const Formal = () => {
  const bg = useColorModeValue("rgb(244, 244, 244)", "rgb(35, 42, 56)")

  return (
    <chakra.div
      px={8}
      bg={bg}
      h="full"
      w="full"
      position="relative"
    >
      <Header />
      <chakra.main w="full">
        <Container maxWidth="container.xl" px={0} h="full">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Container>
      </chakra.main>
    </chakra.div>
  )
}

export default Formal
