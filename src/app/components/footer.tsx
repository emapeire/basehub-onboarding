export function Footer() {
  return (
    <footer className='border-t border-gray-500'>
      <div className='container mx-auto px-4 py-28'>
        <div className='flex justify-between items-center'>
          <div className='flex flex-row'>
            <p className='text-2xl lg:text-4xl font-bold leading-tight'>
              Built with{' '}
              <a
                className=' text-2xl lg:text-4xl font-bold leading-tight hover:underline'
                href='https://nextjs.org'
                target='_blank'
                rel='noopener noreferrer'
              >
                Next.js
              </a>
            </p>
          </div>
          <div>
            <a
              href='https://nextjs.org/docs/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-2xl lg:text-4xl font-bold leading-tight border boder-white px-6 py-2 hover:bg-white hover:text-black transition-colors duration-300'
            >
              Read Docs
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
