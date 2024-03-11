export function DateString({ date }: { date: string }) {
  return <time dateTime={date}>{new Date(date).toDateString()}</time>
}
