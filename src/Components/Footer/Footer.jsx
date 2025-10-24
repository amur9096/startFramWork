import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="w-full bg-[#2C3E50] text-white">

      <div className="mx-auto max-w-6xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-3">

          <div className="text-center md:text-left">
            <h3 className="mb-3 text-lg font-semibold tracking-widest text-white">
              LOCATION
            </h3>
            <p className="text-slate-300 leading-relaxed">
              2215 John Daniel Drive
              <br />
              Clark, MO 65243
            </p>
          </div>

          <div className="text-center">
            <h3 className="mb-4 text-lg font-semibold tracking-widest text-white/90">
              AROUND THE WEB
            </h3>

            <ul className="flex items-center justify-center gap-4">
              <li>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition  hover:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <i className="fab fa-facebook-f text-lg"></i>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition  hover:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <i className="fab fa-twitter text-lg"></i>
                </a>
              </li>

              <li>
                <Link
                  href="#"
                  aria-label="LinkedIn"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition  hover:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <i className="fab fa-linkedin-in text-lg"></i>
                </Link>
              </li>

              <li>
                <a
                  href="#"
                  aria-label="Website"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition  hover:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <i className="fas fa-globe text-lg"></i>
                </a>
              </li>

            </ul>

          </div>

          <div className="text-center md:text-right">
            <h3 className="mb-3 text-lg font-semibold tracking-widest text-white/90">
              ABOUT FREELANCER
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Freelance is a free to use, licensed Bootstrap theme created by Route
            </p>
          </div>

        </div>

      </div>

      <div className="bg-slate-800 py-5 text-center text-sm text-white">
        Copyright © Your Website 2025
      </div>

    </footer>
  );
}
