/* eslint-disable import/prefer-default-export */
import {
  GraphQLObjectType as ObjectType,
  GraphQLList as ListType,
  GraphQLString as StringType,
  GraphQLInt as IntegerType,
} from 'graphql'
import JSONType from './_types/JSONType'

export function createPagination({
  name,
  itemType,
  fields: { totalCount, pageInfo, edges } = {},
  parseArgs,
  additionalArgs,
}) {
  const fields = {}

  if (totalCount) {
    fields.totalCount = {
      type: IntegerType,
      resolve: totalCount,
    }
  }

  fields.edges = {
    type: new ListType(
      new ObjectType({
        name: `${name}PaginationEdge`,
        fields: {
          node: {
            type: itemType,
          },
          cursor: {
            type: StringType,
          },
        },
      }),
    ),
    resolve: edges,
  }

  if (pageInfo) {
    const PageInfoType = new ObjectType({
      name: 'PageInfo',
      fields: {
        hasNextPage: pageInfo,
      },
    })

    fields.pageInfo = {
      type: PageInfoType,
      resolve: pageInfo,
    }
  }

  return {
    type: new ObjectType({
      name: `${name}Pagination`,
      fields,
    }),
    args: {
      where: { type: JSONType },
      offset: { type: IntegerType },
      first: { type: IntegerType },
      last: { type: IntegerType },
      after: { type: StringType },
      before: { type: StringType },
      ...additionalArgs,
    },
    resolve: (parent, args) => (parseArgs ? parseArgs(args) : args),
  }
}
