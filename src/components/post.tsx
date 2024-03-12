import Link from 'next/link'
import { RichText } from 'basehub/react-rich-text'
import { Avatar } from './avatar'
import { DateFormatter } from './date'
import { CoverImage } from './cover-image'

export function Post({ post }: { post: any }) {
  return (
    <section className="mb-16 md:mb-12">
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

        <div className="max-w-4xl mx-auto text-lg leading-relaxed text-pretty mt-16 md:mt-12">
          <RichText
            components={{
              p(props) {
                return <p className="mb-4" {...props} />
              }
            }}
          >
            {post.body.json.content}
          </RichText>
        </div>
      </article>
    </section>
  )
}
