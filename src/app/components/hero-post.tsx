import Link from 'next/link'
import { CoverImage } from './cover-image'
import { DateString } from './date'
import { Avatar } from './avatar'

export function HeroPost({
  title,
  coverImage,
  date,
  author,
  slug,
  excerpt
}: {
  title: string
  coverImage: any
  date: string
  author: any
  slug: string
  excerpt: string
}) {
  return (
    <section>
      <div className='mb-8 md:mb-16'>
        <CoverImage title={title} url={coverImage.url} slug={slug} />
      </div>
      <div className='md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28'>
        <div>
          <h3 className='mb-4 text-4xl lg:text-6xl leading-tight'>
            <Link href={`/posts/${slug}`} className='hover:underline'>
              {title}
            </Link>
          </h3>
          <div className='mb-4 md:mb-0 text-lg'>
            <DateString date={date} />
          </div>
        </div>
        <div>
          <p className='text-lg leading-relaxed mb-4'>{excerpt}</p>
          {author && <Avatar name={author._title} picture={author.avatar} />}
        </div>
      </div>
    </section>
  )
}
