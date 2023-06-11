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

const NEXT_PUBLIC_GOOGLE_ANALYTICS = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Lucia Sepulveda</title>
        <meta name="description" content="Lucia Sepulveda portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
        <meta property="og:url" content="https://luciasepulveda.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lucia Sepulveda" />
        <meta property="og:description" content="Lucia Sepulveda portfolio" />
        <meta
          property="og:image"
          content="https://luciasepulveda.vercel.app/imageLink.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="opensyllabus.org" />
        <meta
          property="twitter:url"
          content="https://analytics-beta.opensyllabus.org/"
        />
        <meta name="twitter:title" content="Lucia Sepulveda" />
        <meta
          name="twitter:description"
          content="Lucias Sepulveda portfolio"
        />
        <meta
          name="twitter:image"
          content="https://luciasepulveda.vercel.app/imageLink.png"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JSBBTRBDY1"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
                });
            `,
          }}
        />
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
