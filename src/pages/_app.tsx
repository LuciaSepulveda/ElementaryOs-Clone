import "@/styles/globals.css"
import type { AppProps } from "next/app"
import {
  ChakraProvider,
  extendTheme,
  ThemeConfig,
  ColorModeScript,
} from "@chakra-ui/react"
import { Provider as UserProvider } from "../context/context"
import { Analytics } from "@vercel/analytics/react"
import Head from "next/head"

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const theme = extendTheme({ config })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Lucia Sepulveda</title>
        <meta name="description" content="Lucia Sepulveda portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <ChakraProvider>
        <UserProvider>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Component {...pageProps} />
          <Analytics />
        </UserProvider>
      </ChakraProvider>
    </>
  )
}
