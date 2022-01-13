import { AppProps } from 'next/app'
import '../styles/style.css'
import '../styles/normalize.css'

import "typeface-montserrat"
import "typeface-merriweather"
import "@fontsource/monofett"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}