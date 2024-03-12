import Image from 'next/image'

export const Avatar = ({ title, avatar }: { title: string; avatar: any }) => {
  return (
    <div className="flex items-center">
      <Image
        src={avatar.url}
        className="w-12 h-12 rounded-full mr-4"
        alt={title}
        width={48}
        height={48}
        priority
      />
      <div className="text-xl font-bold">{title}</div>
    </div>
  )
}
