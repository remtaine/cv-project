import React from 'react'

function Header() {
  return (
    <header className='flex justify-center flex-col'>
        <h1 className="text-3xl font-bold text-center">CV Creator</h1>
        <span className="mt-1 mx-auto left-0 right-0 text-center text-xs font-light">Made by <a href="https://github.com/remtaine" className="underline hover:font-bold duration-500">Ben</a></span>
    </header>
  )
}

export default Header