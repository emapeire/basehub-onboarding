export function DateString({ date }: { date: string }) {
  const newDate = new Date(date)
  const isoString = newDate.toISOString()
  const isoDate = isoString.substring(0, 10)
  const displayDate = new Date(isoDate)
  return (
    <time dateTime={isoDate}>
      {displayDate.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'UTC'
      })}
    </time>
  )
}
