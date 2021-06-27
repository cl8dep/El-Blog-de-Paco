import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import Post from '../types/Post'
import { POSTS_FOLDER } from './constants'

const postsDirectory = join(process.cwd(), POSTS_FOLDER)

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

function resolveSlugFullPath(realSlug: string): string {
  return join(postsDirectory, `${realSlug}.md`);
}

function readSlugFile(path: string): string {
  return fs.readFileSync(path, 'utf8')
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = resolveSlugFullPath(realSlug);
  const fileContent = readSlugFile(fullPath);
  const { data, content } = matter(fileContent)

  const post: Post = {
    slug: realSlug,
    content: content,
    author: data['author'],
    coverImage: data['coverImage'],
    date: data['date'],
    title: data['title'],
    openGraph: data['openGraph'],
    resume: data['resume']
  }

  return post
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}