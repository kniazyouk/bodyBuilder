import { useState } from 'react'
import { MuscleIcon } from './Icons'
// import Logo from '../assets/Logo-Aaron.png'

const Navbar = () => {
    const links = ["HOME", "SERVICES", "TESTIMONIALS", "VIDEO GALLERY", "CONTACT"]
    const [active, setActive] = useState("HOME")

    return (
      <nav className="flex items-center gap-8 px-6 md:px-16 py-4 border-b border-dark-700 bg-dark-950/80 backdrop-blur sticky top-0 z-50">
        <MuscleIcon className="w-30 h-30 md:w-30 md:h-30 shrink-0" />

         {/* <img src={Logo} alt="Logo" className="w-25 h-25 md:w-24 md:h-24 shrink-0" /> */}

         {/* <span className="text-white font-extrabold text-lg tracking-wider whitespace-nowrap">
          IRON <span className="text-neon-orange">ELITE</span> PERFORMANCE
        </span> */}

        <div className="flex items-center gap-6 ml-auto">
          <ul className="hidden md:flex gap-6">
            {links.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  onClick={() => setActive(link)}
                  className={`relative text-sm tracking-widest transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-neon-orange after:origin-left after:scale-x-0 after:transition-transform after:duration-300 ${
                    active === link
                      ? "text-neon-orange after:scale-x-100 after:animate-underline-grow"
                      : "text-muted hover:text-neon-orange hover:after:animate-underline-grow"
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="border border-neon-orange text-neon-orange px-5 py-2 rounded-full text-sm font-bold tracking-wider hover:bg-neon-orange hover:text-white transition-all duration-200"
          >
            JOIN NOW
          </a>
        </div>
      </nav>
    )
  }

  export default Navbar
