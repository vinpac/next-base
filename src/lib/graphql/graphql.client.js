import { fetchJSON } from 'Lib/fetch'

const cache = {}
export default (query, variables, params = {}) => {
  if (params.cacheKey && cache[params.cacheKey]) {
    const cached = cache[params.cacheKey].find(({ variables: vars }) => vars === variables)

    if (cached) {
      return cached.promise
    }
  }

  const promise = fetchJSON('/graphql', {
    method: 'post',
    body: {
      query,
      variables,
    },
    user: params.user,
    authToken: params.authToken,
  }).then(({ data, errors }) => {
    if (errors) {
      throw errors
    }

    return data
  })

  if (params.cacheKey) {
    if (!cache[params.cacheKey]) {
      cache[params.cacheKey] = []
    }

    cache[params.cacheKey].push({ variables, promise })
  }

  return promise
}
