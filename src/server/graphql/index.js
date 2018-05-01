import { GraphQLSchema as Schema, GraphQLObjectType as ObjectType } from 'graphql'

// Queries
import listPosts from './post/listPosts'

const queries = {
  listPosts,
}
const mutations = {}

const schema = new Schema({
  // mutation: new ObjectType({
  //   name: 'Mutation',
  //   fields: mutations,
  // }),
  query: new ObjectType({
    name: 'Query',
    fields: queries,
  }),
})

export default schema
