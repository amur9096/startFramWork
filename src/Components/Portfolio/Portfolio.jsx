import React from 'react'
import home from '../../assets/port1.png'
import pizza from '../../assets/port2.png'
import tint from '../../assets/port3.png'

export default function Portfolio() {
  return <>
    <section className="home-container h-screen flex items-center justify-center flex-col gap-6 ">

      <h2 className="text-center text-4xl font-extrabold tracking-wide text-slate-800 md:text-4xl">
        PORTFOLIO COMPONENT
      </h2>

      <div className="flex items-center justify-center ">
        <div className="h-[4px] w-24 bg-slate-800"></div>
        <div className="mx-3 text-slate-800 text-xl">
          <i className="fas fa-star"></i>
        </div>
        <div className="h-[4px] w-24 bg-slate-800"></div>
      </div>

      <div className=" grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 ">

        <div className="rounded-2xl bg-[#BA4C63] p-8 hover:scale-105 transition-transform duration-300 ">
          <img src={home} alt="home" className="mx-auto size-60 w-full object-cover" />
        </div>

        <div className="rounded-2xl bg-[#1FA4B6] p-8 hover:scale-105 transition-transform duration-300 ">
          <img src={pizza} alt="pizza" className="mx-auto size-60 w-full object-cover" />
        </div>

        <div className="rounded-2xl bg-[#130F0F] p-8 hover:scale-105 transition-transform duration-300 ">
          <img src={tint} alt="tint" className="mx-auto h-52 w-52 object-cover" />
        </div>

        <div className="rounded-2xl bg-[#BA4C63] p-8 hover:scale-105 transition-transform duration-300 ">
          <img src={home} alt="home" className="mx-auto size-60 w-full object-cover" />
        </div>

        <div className="rounded-2xl bg-[#1FA4B6] p-8 hover:scale-105 transition-transform duration-300 ">
          <img src={pizza} alt="pizza" className="mx-auto size-60 w-full object-cover" />
        </div>

        <div className="rounded-2xl bg-[#130F0F] p-8 hover:scale-105 transition-transform duration-300 ">
          <img src={tint} alt="tint" className="mx-auto size-60 w-full object-cover" />
        </div>
      </div>

    </section>

  </>
}
