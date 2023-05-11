import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
        {/* <link rel="shortcut icon" href={favicon} /> */}
        <link rel="shortcut icon" href="/images/logos.jpg" />
        <title>Chá de panela | Vini e Duda</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
