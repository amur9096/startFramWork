import React, { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    userName: "",
    userAge: "",
    userEmail: "",
    userPassword: "",
  });

  return (
    <>
      <section className="h-screen flex items-center justify-center flex-col">

        <div className="mt-[-200px]">
          <h2 className="text-center text-4xl uppercase font-bold tracking-wide text-slate-800">
            Contact section
          </h2>

          <div className="flex items-center justify-center ">
            <div className="h-[4px] w-24 bg-slate-800"></div>
            <div className="mx-3 text-slate-800 text-xl">
              <i className="fas fa-star"></i>
            </div>
            <div className="h-[4px] w-24 bg-slate-800"></div>
          </div>
        </div>

        <form className="w-[92%] max-w-4xl pt-16 md:pt-0">
          <input
            type="text"
            name="userName"
            placeholder="userName"
            value={formData.userName}
            onChange={(e) =>
              setFormData({ ...formData, userName: e.target.value })
            }
            className="block w-full border-b  border-slate-200 focus:border-emerald-500 focus:outline-none py-4 text-slate-700 placeholder-slate-400 transition"
          />

          <input
            type="number"
            name="userAge"
            placeholder="userAge"
            value={formData.userAge}
            onChange={(e) =>
              setFormData({ ...formData, userAge: e.target.value })
            }
            className="mt-10 block w-full border-b border-slate-200 focus:border-emerald-500 focus:outline-none py-4 text-slate-700 placeholder-slate-400 transition"
          />

          <input
            type="email"
            name="userEmail"
            placeholder="userEmail"
            value={formData.userEmail}
            onChange={(e) =>
              setFormData({ ...formData, userEmail: e.target.value })
            }
            className="mt-10 block w-full border-b border-slate-200 focus:border-emerald-500 focus:outline-none py-4 text-slate-700 placeholder-slate-400 transition"
          />

          <input
            type="password"
            name="userPassword"
            placeholder="userPassword"
            value={formData.userPassword}
            onChange={(e) =>
              setFormData({ ...formData, userPassword: e.target.value })
            }
            className="mt-10 block w-full border-b border-slate-200 focus:border-emerald-500 focus:outline-none py-4 text-slate-700 placeholder-slate-400 transition"
          />

          <button
            type="button"
            className="mt-8 inline-flex items-center rounded-md bg-emerald-500 px-4 py-2 text-white text-sm font-semibold shadow-sm hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            send Message
          </button>

        </form>
      </section>
    </>
  );
}
