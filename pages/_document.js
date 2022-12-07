// pages/_document.js

import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../styles/theme.js'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head > 
        <link rel="shortcut icon" href="assets/images/favicon-transparent.png" />
        </Head>
        <body>
          {/* 👇 Here's the script */}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}