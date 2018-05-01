import PostType from 'Server/graphql/_types/PostType'
import { createPagination } from 'Server/graphql/utils'
import { loadPosts, findPosts } from 'Server/content'

const listUsers = createPagination({
  name: 'Users',
  itemType: PostType,
  fields: {
    totalCount: () => 1,
    edges: async () => {
      await loadPosts()
      return findPosts().map(node => ({ node }))
    },
  },
})

export default listUsers
