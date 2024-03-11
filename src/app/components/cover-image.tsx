import Image from 'next/image'
import Link from 'next/link'

export function CoverImage({
  title,
  url,
  slug
}: {
  title: string
  url: string
  slug?: string
}) {
  const image = (
    <Image
      src={url}
      alt={`Cover Image for ${title}`}
      className='shadow-small rounded-md'
      width={1240}
      height={540}
    />
  )
  return (
    <div className='sm:mx-0'>
      {slug ? <Link href={`/posts/${slug}`}>{image}</Link> : image}
    </div>
  )
}
