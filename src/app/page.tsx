import { draftMode } from 'next/headers'
import { getAllPosts } from '@/lib/api'
import { Intro } from './components/intro'
import { HeroPost } from './components/hero-post'

export default async function Page() {
  const { isEnabled } = draftMode()
  const allPosts = await getAllPosts(isEnabled)
  const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)

  return (
    <main className='container mx-auto px-5'>
      <Intro />
      {heroPost && (
        <HeroPost
          title={heroPost._title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost._slug}
          excerpt={heroPost.excerpt}
        />
      )}
    </main>
  )
}
