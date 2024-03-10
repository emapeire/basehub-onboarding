import { basehub } from 'basehub'

const Page = async () => {
  const data = await basehub({ next: { revalidate: 30 } }).query({
    gettingStarted: {
      _id: true,
      _slug: true,
      _title: true,
      aReferenceToAnotherBlock: {
        _id: true,
        _slug: true,
        _title: true,
        explanation: true
      },
      anImageBlock: {
        alt: true,
        aspectRatio: true,
        fileName: true,
        fileSize: true,
        height: true,
        lastModified: true,
        mimeType: true,
        rawUrl: true
      },
      baseComponent: {
        _id: true,
        _slug: true,
        _title: true,
        explanation: true
      },
      connect: {
        aspectRatio: true,
        fileName: true,
        fileSize: true,
        height: true,
        lastModified: true,
        mimeType: true,
        url: true,
        width: true
      },
      description: true
    }
  })

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

export default Page
