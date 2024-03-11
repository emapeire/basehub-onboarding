import Link from 'next/link'

export function MorePosts({ posts }: { posts: any[] }) {
  return (
    <section>
      <h2>More Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <Link href={`/posts/${post._slug}`}>
              <a>{post._title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
