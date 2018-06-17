import getConfig from 'next/config'

export const {
  publicRuntimeConfig: { apiURL: API_URL },
} = getConfig()

export const dev = process.env.NODE_ENV !== 'production'
export const meta = pageMeta => ({
  description: 'Basic app description',
  ...pageMeta,
  title: pageMeta.title ? `${pageMeta.title} - App name` : 'App name',
})
