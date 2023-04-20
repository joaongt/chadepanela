import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
        {/* <link rel="shortcut icon" href={favicon} /> */}
        <link rel="shortcut icon" href="/images/logos.jpg" />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
