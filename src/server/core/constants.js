/* eslint-disable import/prefer-default-export */
export const dev = process.env.NODE_ENV !== 'production'
export const meta = pageMeta => ({
  description: 'Basic app description',
  ...pageMeta,
  title: pageMeta.title ? `${pageMeta.title} - App name` : 'App name',
})
