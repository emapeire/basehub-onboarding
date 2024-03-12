import { basehub, PostsItemGenqlSelection } from 'basehub'
import { revalidate } from '@/constants'

export const POST_FRAGMENT = {
  _id: true,
  _slug: true,
  _title: true,
  author: {
    _title: true,
    avatar: {
      url: true
    }
  },
  body: {
    json: {
      content: true
    }
  },
  coverImage: {
    url: true,
    alt: true
  },
  date: true,
  excerpt: true
} satisfies PostsItemGenqlSelection

export async function getPreviewPostBySlug(slug: string | null) {
  const query = await basehub({ draft: true }).query({
    blog: {
      posts: {
        __args: {
          filter: {
            _sys_slug: {
              eq: slug
            }
          },
          first: 1
        },
        items: POST_FRAGMENT
      }
    }
  })

  return query.blog.posts.items[0]
}

export async function getAllPosts(isDraftMode: boolean) {
  const query = await basehub({
    draft: isDraftMode,
    next: { revalidate: revalidate }
  }).query({
    blog: {
      posts: {
        items: POST_FRAGMENT
      }
    }
  })

  return query.blog.posts.items
}

export async function getPostAndMorePosts(slug: string, preview: boolean) {
  const postQuery = await basehub({
    draft: preview,
    next: { revalidate: revalidate }
  }).query({
    blog: {
      posts: {
        __args: {
          filter: {
            _sys_slug: {
              eq: slug
            }
          },
          first: 1
        },
        items: POST_FRAGMENT
      }
    }
  })

  const morePostsQuery = await basehub({
    draft: preview,
    next: { revalidate: revalidate }
  }).query({
    blog: {
      posts: {
        __args: {
          filter: {
            _sys_slug: {
              notEq: slug
            }
          },
          first: 2,
          orderBy: 'date__DESC'
        },
        items: POST_FRAGMENT
      }
    }
  })

  return {
    post: postQuery.blog.posts.items[0],
    morePosts: morePostsQuery.blog.posts.items
  }
}
