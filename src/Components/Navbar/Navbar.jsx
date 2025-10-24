import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import About from '../About/About';




export default function Navbar() {
  const [expand, setExpand] = useState(false);
  return <>

    <nav className='shadow py-10 bg-[#2C3E50] text-white '>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>

          <h2 className='uppercase font-bold text-3xl tracking-widest '>
            <Link to={"/"}>  Start Framework</Link>
          </h2>

          <div>
            <ul className='hidden lg:flex gap-6 uppercase text-2xl font-semibold'>
              <li><NavLink to={"/"}></NavLink></li>
              <li><NavLink to={"/About"}>About</NavLink></li>
              <li><NavLink to={"/Portfolio"}>Portfolio</NavLink></li>
              <li><NavLink to={"/contact"}>Contact</NavLink></li>
            </ul>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
              className="size-6 lg:hidden" onClick={() => setExpand(!expand)}>

              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>


          </div>

          {expand && <ul className='space-y-4 uppercase text-2xl font-semibold'>
            <li><NavLink to={"/"}></NavLink></li>
            <li><NavLink to={"/About"}>About</NavLink></li>
            <li><NavLink to={"/Portfolio"}>Portfolio</NavLink></li>
            <li><NavLink to={"/contact"}>Contact</NavLink></li>
          </ul>}

        </div>
      </div>

    </nav>

  </>
}
