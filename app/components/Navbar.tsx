import React from 'react'

export default function Navbar() {
  return (
    <div className='w-[95%] z-50 sm:w-fit flex justify-between items-center gap-2 sticky left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2 bg-black px-2 text-white p-2  rounded-2xl'>
        <div className="logo">logo</div>
        <div className="logo">
            <ul className='flex gap-2 justify-between w-full items-center'>
                <li>|</li>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
            </ul>
        </div>
        <div className="button text-black bg-white p-1 px-4 rounded-full">contact</div>
    </div>
  )
}
