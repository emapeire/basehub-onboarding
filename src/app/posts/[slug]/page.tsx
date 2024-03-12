import Link from 'next/link'
import { Pump } from 'basehub/react-pump'
import { RichText } from 'basehub/react-rich-text'
import { draftMode } from 'next/headers'
import { Avatar } from '@/components/avatar'
import { DateFormatter } from '@/components/date'
import { CoverImage } from '@/components/cover-image'
import { MorePosts } from '@/components/more-posts'
import { getAllPosts, getPostAndMorePosts } from '@/lib/api'

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

  return (
    <main className="container mx-auto px-5 mt-16 mb-16 md:mb-12">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8">
        <Link href={'/'} className="hover:underline">
          Blog
        </Link>
        .
      </h2>

      <article className="mb-28">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-5">
          {post._title}
        </h1>

        <div className="mb-4">
          {post.author && (
            <Avatar title={post.author._title} avatar={post.author.avatar} />
          )}
          <div className="mt-4">
            <DateFormatter date={post.date} />
          </div>
        </div>

        <CoverImage
          title={post._title}
          url={post.coverImage.url}
          slug={post._slug}
        />

        <div className="max-w-2xl mx-auto text-lg leading-relaxed text-pretty mt-16 md:mt-12">
          <RichText>{post.body.json.content}</RichText>
        </div>
      </article>
      {morePosts.length > 0 && <MorePosts posts={morePosts} />}
    </main>
  )
}
