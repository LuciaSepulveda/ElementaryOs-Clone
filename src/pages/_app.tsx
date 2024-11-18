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
import { SpeedInsights } from "@vercel/speed-insights/next"

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
        <meta property="twitter:domain" content="luciasepulveda.vercel.app" />
        <meta
          property="twitter:url"
          content="https://luciasepulveda.vercel.app/"
        />
        <meta name="twitter:title" content="Lucia Sepulveda" />
        <meta name="twitter:description" content="Lucias Sepulveda portfolio" />
        <meta
          name="twitter:image"
          content="https://luciasepulveda.vercel.app/imageLink.png"
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
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
        <script
          id="hotjar-script"
          dangerouslySetInnerHTML={{
            __html: `(function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:3570899,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
          }}
        />
      </Head>
      <ChakraProvider>
        <UserProvider>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Component {...pageProps} />
          <SpeedInsights />
          <Analytics />
        </UserProvider>
      </ChakraProvider>
    </>
  )
}
