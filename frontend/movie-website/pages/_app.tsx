import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import {Roboto} from '@next/font/google'

const roboto = Roboto({weight: "500"});

export default function App({ Component, pageProps }: AppProps) {
  return(
    <ChakraProvider>
      <main className={roboto.className}>
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  ) 
}
