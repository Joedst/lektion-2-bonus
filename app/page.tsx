import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex">
      <header>
        <nav>
          <div>
            <p>Navigation</p> 
            </div>
        </nav>
      </header>

      <body className='h-screen bg-slate-600'>
        <div className="flex justify-center">
          <p>Item #1</p>
          <p>Item #2</p>
          <p>Item #3</p>
        </div>
      </body>

      <footer className="bg-orange-900">
        <div>
          <p>Footer</p>
        </div>
      </footer>
    </div>
      
  )
}
/* h-screen täcker hela skärmen */