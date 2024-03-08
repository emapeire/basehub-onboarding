import { basehub } from 'basehub'

const Page = async () => {
  const data = await basehub({ next: { revalidate: 30 } }).query({
    __typename: true
  })

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

export default Page
