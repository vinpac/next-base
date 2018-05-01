import { GraphQLString as StringType, GraphQLScalarType as ScalarType } from 'graphql'
import { Kind } from 'graphql/language'

export default new ScalarType({
  name: 'JSON',
  type: StringType,
  serialize: JSON.parse,
  parseValue: JSON.parse,
  parseLiteral: ast => {
    if (ast.kind === Kind.STRING) {
      return JSON.parse(ast.value)
    }

    return null
  },
})
