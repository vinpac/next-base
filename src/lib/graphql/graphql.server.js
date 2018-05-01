import { graphql } from 'graphql'
import path from 'path'

/* eslint-disable no-undef, camelcase */
const schema = __non_webpack_require__
  ? __non_webpack_require__(path.resolve('dist/graphql')).default
  : require(path.resolve('dist/graphql')).default
/* eslint-enable no-undef, camelcase  */

export default (query, params) =>
  graphql(schema, query, null, null, params).then(({ data, errors }) => {
    if (errors) {
      throw errors
    }

    return data
  })
