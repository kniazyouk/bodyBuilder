const socials = [
    { name: "Instagram", path: "M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zM12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM16.5 6.5h.5" },
    { name: "YouTube", path: "M3 7.5a3 3 0 013-3h12a3 3 0 013 3v9a3 3 0 01-3 3H6a3 3 0 01-3-3v-9zM10 9.5l5 2.5-5 2.5v-5z" },
    { name: "TikTok", path: "M14 3c.5 2.6 2.2 4.3 4.8 4.5v3c-1.8 0-3.4-.6-4.8-1.6v6.1a5.9 5.9 0 11-5.9-5.9c.3 0 .7 0 1 .1v3.1a2.8 2.8 0 101.9 2.7V3h3z" },
    { name: "Facebook", path: "M14 9h3l-.5 3H14v9h-3.5v-9H8V9h2.5V7.4c0-2 1.2-3.4 3.4-3.4H14V9z" },
  ]

  const Footer = () => {
    return (
      <footer className="relative py-10 px-6 md:px-16 mt-10 before:absolute before:top-0 before:left-0 before:h-0.5 before:w-full before:bg-gradient-to-r from-neon-orange to-neon-cyan">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href="#"
                aria-label={social.name}
                className="text-white hover:text-neon-cyan transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                  <path d={social.path} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ))}
          </div>

          <p className="text-muted text-sm text-center">
            contact@ironelite.com — +1 (555) 123-4567
          </p>

          <p className="text-muted text-xs">
            &copy; {new Date().getFullYear()} Iron Elite Performance. All rights reserved.
          </p>
        </div>
      </footer>
    )
  }

  export default Footer