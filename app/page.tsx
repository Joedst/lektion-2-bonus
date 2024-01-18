"use client" /* Måste skrivas för att det ska vara client, annars antas server side*/
import Image from 'next/image'
import { ChangeEvent, FormEvent, useState } from 'react'

interface Student {
  name: string
  age: number
  grades: string[]
}

export default function Home() {


  const [student, setStudent] = useState<Student>({
    name: "",
    age: 0,
    grades: [],
  })

  const [tempName, setTempName] = useState("")
  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault()
    setStudent({ ...student, name: tempName })


    /*(event) => {console.log(event)}} nere i form, utan prevent default laddar om hela pagen vid click */
  }

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTempName(event.target.value) /*...student tar med alla andra parametrar, med andra ord, namn ändras men tar mewd andra värdena */
  }

  return (
    <div className="h-screen flex flex-col m-4">
      <header>
        <nav className="bg-slate-700 p-4">
          <div>
            <p>Navigation</p>
          </div>
        </nav>
      </header>

      <div className='flex justify-center p-4'>
        <form onSubmit={handleOnSubmit}>
          <input onChange={handleOnChange} value={tempName} type="text" placeholder="Enter text here"></input>
          <button type="submit" className='p-2 bg-blue-500'>Submit</button>
        </form>
      </div>

      <main className='bg-slate-600 flex justify-evenly grow'>
        <div className="flex flex-col space-y-4 my-4 items-center bg-blue-400">
          <p>Item #1</p>
          <p>Item #2</p>
          <p>Item #3</p>
        </div>
        <div className="flex flex-col space-y-4 my-4 items-center bg-orange-400">
          <p>Item #1</p>
          <p>Item #2</p>
          <p>Item #3</p>
        </div>
      </main>

      <footer className="bg-orange-900 ">
        <div>
          <p>Footer</p>
        </div>
      </footer>
    </div>

  )
}
/* h-screen täcker hela skärmen */