import getConfig from 'next/config'
import Document, { Head, Main, NextScript } from 'next/document'
import { getRenderedCSS, STYLE_ID } from 'next-styled-css'

const {
  serverRuntimeConfig: { staticDistDirname },
} = getConfig()
export default class extends Document {
  render() {
    return (
      <html>
        <Head>
          <style id={STYLE_ID}>{getRenderedCSS()}</style>
          <link rel="stylesheet" href={`/d/${staticDistDirname}/index.css`} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
