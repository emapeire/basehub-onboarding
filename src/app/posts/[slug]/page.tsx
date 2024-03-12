import { draftMode } from 'next/headers'
import { Pump } from 'basehub/react-pump'
import { getAllPosts, getPostAndMorePosts } from '@/lib/api'
import { Post } from '@/components/post'

export async function generateStaticParams() {
  const allPosts = await getAllPosts(false)

  return allPosts.map((post) => ({
    slug: post._slug
  }))
}

export default async function PostPage({
  params
}: {
  params: { slug: string }
}) {
  const { isEnabled } = draftMode()
  const { post, morePosts } = await getPostAndMorePosts(params.slug, isEnabled)

  return <Post post={post} morePosts={morePosts} />
}
