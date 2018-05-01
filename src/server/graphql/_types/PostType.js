import { GraphQLObjectType as ObjectType, GraphQLString as StringType } from 'graphql'

const PostType = new ObjectType({
  name: 'Post',
  fields: {
    slug: { type: StringType },
    title: { type: StringType },
    body: { type: StringType },
    category: { type: StringType },
    createdAt: { type: StringType },
  },
})

export default PostType
