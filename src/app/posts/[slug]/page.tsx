import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { basehub } from 'basehub'
import { Pump } from 'basehub/react-pump'
import { getAllPosts, getPostAndMorePosts, postBySlugQuery } from '@/lib/api'
import { Post } from '@/components/post'
import { revalidate } from '@/constants'

// Old way of generate static paths
// export async function generateStaticParams() {
//   const allPosts = await getAllPosts(false)

//   return allPosts.map((post) => ({
//     slug: post._slug
//   }))
// }

export async function generateStaticParams() {
  const {
    blog: { posts }
  } = await basehub({ cache: 'no-store' }).query({
    blog: {
      posts: {
        items: {
          _slug: true
        }
      }
    }
  })

  return posts.items.map((post) => ({ slug: post._slug }))
}

export default async function PostPage({
  params
}: {
  params: { slug: string }
}) {
  // Old way using raw basehub() function
  // const { isEnabled } = draftMode()
  // const { post, morePosts } = await getPostAndMorePosts(params.slug, isEnabled)

  return (
    // New way using <Pump/> component
    <Pump
      next={{ revalidate: revalidate }}
      draft={draftMode().isEnabled}
      queries={[postBySlugQuery(params.slug)]}
    >
      {async ([{ blog }]) => {
        const [post] = blog.posts.items
        if (!post) notFound()

        return (
          <main className="container mx-auto px-5 mt-16 mb-16 md:mb-12">
            <Post post={post} />
            {/* {morePosts.length > 0 && <MorePosts posts={morePosts} />} */}
          </main>
        )
      }}
    </Pump>
  )
}
