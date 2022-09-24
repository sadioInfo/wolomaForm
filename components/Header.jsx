import React from 'react'

function Header() {
  return (
    <nav className=" mx-auto px-6 pt-4">
        <div className="flex justify-center md:justify-start  text-xl md:text-2xl lg:text-3xl font-bold">
          <span>Me</span>
          <span className="text-blue-500">Loger</span>
        </div>
    </nav>
  )
}

export default Header