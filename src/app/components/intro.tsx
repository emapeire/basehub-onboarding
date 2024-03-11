export function Intro() {
  return (
    <section className='flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12'>
      <h1>Blog.</h1>
      <h2 className='text-center md:text-left text-lg mt-5 md:pl-8'>
        A statically generated blog example using{' '}
        <a
          href='https://nextjs.org/'
          className='underline hover:text-blue-600 duration-200 transition-colors'
        >
          Next.js
        </a>{' '}
        and{' '}
        <a
          href='https://basehub.com/'
          className='underline hover:text-blue-600 duration-200 transition-colors'
        >
          BaseHub
        </a>
        .
      </h2>
    </section>
  )
}
