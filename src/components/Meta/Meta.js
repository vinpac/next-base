import React from 'react'
import Head from 'next/head'
import { meta as parseMeta } from 'Core/constants'

const Meta = props => {
  const meta = parseMeta(props)

  return (
    <Head>
      {meta.title && <title>{meta.title}</title>}
      {meta.title && <meta name="title" content={meta.title} />}
      {meta.title && <meta property="og:title" content={meta.title} />}
      {meta.description && <meta name="description" content={meta.description} />}
      {meta.description && <meta property="og:description" content={meta.description} />}
      {meta.image && <meta name="description" content={meta.image} />}
      {meta.image && <meta property="og:description" content={meta.image} />}
    </Head>
  )
}

Meta.displayName = 'Meta'

export default Meta
