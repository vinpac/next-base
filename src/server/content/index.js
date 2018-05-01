import slug from 'slug'
import fm from 'front-matter'
import glob from 'glob'
import path from 'path'
import fs from 'fs'
import { dev } from 'Server/constants'

let posts
const postsDir = 'src/server/content'
export async function loadPosts(force = false) {
  if (posts && !force) {
    return undefined
  }

  const result = []
  const slugsCount = {}
  return new Promise((resolve, reject) =>
    glob(`${postsDir}/**/*.md`, {}, (error, files) => {
      if (error) {
        reject(error)
        return
      }

      let pending = files.length
      let rejected

      if (!pending) {
        resolve()
        return
      }

      files.forEach(filepath => {
        fs.readFile(filepath, 'utf8', (readError, content) => {
          if (rejected) {
            return
          }

          if (readError) {
            rejected = true
            reject(readError)
            return
          }

          const data = fm(content)
          const post = { ...data.attributes, filepath, body: data.body }

          if (!post.title) {
            throw new Error(`Missing title on ${filepath}`)
          }

          if (!post.category) {
            throw new Error(`Missing category on ${filepath}`)
          }

          post.slug = slug(post.title, { lower: true })
          if (slugsCount[post.slug]) {
            slugsCount[post.slug] += 1
            post.slug = `${post.slug}-${slugsCount[post.slug]}`
          } else {
            slugsCount[post.slug] = 1
          }
          result.push(post)

          pending -= 1
          if (!pending) {
            posts = result
            resolve()
          }
        })
      })
    }),
  )
}

export function findPosts() {
  if (!posts) {
    throw new Error('Load posts first')
  }

  return posts
}

if (dev) {
  require('chokidar')
    .watch(`${path.resolve('src', 'server', 'content')}/**/*.md`)
    .on('change', () => loadPosts(true))
    .on('remove', (event, filepath) => posts.filter(post => post.filepath !== filepath))
}
