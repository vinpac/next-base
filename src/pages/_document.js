import React from 'react'
import getConfig from 'next/config'
import Document, { Head, Main, NextScript } from 'next/document'
import { getRenderedCSS, STYLE_ID } from 'next-styled-css'

const {
  serverRuntimeConfig: { staticDistDirname },
} = getConfig()
export default class extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <style id={STYLE_ID}>{getRenderedCSS()}</style>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=1" />
          <link rel="stylesheet" href={`/_dist/${staticDistDirname}/_index.css`} />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700"
            rel="stylesheet"
          />
          <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
