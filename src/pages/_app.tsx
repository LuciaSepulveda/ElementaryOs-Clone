import "@/styles/globals.css"
import type { AppProps } from "next/app"
import {
  ChakraProvider,
  extendTheme,
  ThemeConfig,
  ColorModeScript,
} from "@chakra-ui/react"
import { Provider as UserProvider } from "../context/context"

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const theme = extendTheme({ config })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <UserProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Component {...pageProps} />
      </UserProvider>
    </ChakraProvider>
  )
}
