import React from 'react'
import boy from '../../assets/avataaars.svg'

export default function Home() {
  return (
    <section className="home-container h-screen flex items-center justify-center flex-col gap-6 bg-[#1ABC9C]">

      <img src={boy} alt="boy" className="w-1/8" />

      <h1 className='text-3xl text-white uppercase font-bold '>Start Framework</h1>

      <div className="flex items-center justify-center ">
        <div className="h-[4px] w-24 bg-white"></div>
        <div className="mx-3 text-white text-xl">
          <i className="fas fa-star"></i>
        </div>
        <div className="h-[4px] w-24 bg-white"></div>
      </div>

      <h3 className='text-white text-lg '>Graphic Artist - Web Designer - Illustrator</h3>

    </section>
  )
}
