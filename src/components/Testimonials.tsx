import { useRef } from 'react'
import NeonLights from './NeonLights'

interface Testimonial {
    name: string
    quote: string
    initials: string
    active?: boolean
}

const testimonials: Testimonial[] = [
    {
      name: "JOHN CARTER",
      quote: "Lost 45 lbs and gained muscle! Best coach ever!",
      initials: "JC",
    },
    {
      name: "MARIA LOPEZ",
      quote: "Alex transformed my physique for my first competition.",
      initials: "ML",
      active: true,
    },
    {
      name: "DAVID KIM",
      quote: "The nutrition plan alone changed everything for me.",
      initials: "DK",
    },
    {
      name: "SARAH JONES",
      quote: "Stronger than I have ever been in my life. Thank you Alex!",
      initials: "SJ",
    },
    {
      name: "MIKE RODRIGUEZ",
      quote: "Won my first local show after 8 months of coaching.",
      initials: "MR",
    },
]

const Stars = () => (
    <div className="flex gap-1 text-yellow-400 text-lg">
      {"★★★★★".split("").map((star, i) => (
        <span key={i}>{star}</span>
      ))}
    </div>
)

const Testimonials = () => {
    const carousel = useRef<HTMLDivElement>(null)

    const scroll = (dir: number) => {
      carousel.current?.scrollBy({ left: dir * 400, behavior: "smooth" })
    }

    return (
      <section id="testimonials" className="relative py-20 px-6 md:px-16 w-full">
        <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_20%_80%,#00E5FF22,transparent_50%)]" />
        <NeonLights
          lights={[
            "top-16 right-10 h-1.5 w-28 bg-neon-orange opacity-60 shadow-[0_0_12px_#FF550088]",
            "bottom-12 left-10 h-1.5 w-24 bg-neon-cyan opacity-60 shadow-[0_0_12px_#00E5FF88]",
          ]}
        />
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-white font-extrabold text-3xl md:text-4xl uppercase tracking-wider">
            Transformations &amp; Testimonials
          </h2>

          <div className="flex gap-3">
            <button
              onClick={() => scroll(-1)}
              aria-label="Anterior"
              className="w-11 h-11 rounded-full border border-dark-700 text-white text-xl hover:border-neon-orange hover:text-neon-orange transition-colors"
            >
              ‹
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Siguiente"
              className="w-11 h-11 rounded-full border border-dark-700 text-white text-xl hover:border-neon-orange hover:text-neon-orange transition-colors"
            >
              ›
            </button>
          </div>
        </div>

        <div
          ref={carousel}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 [scrollbar-width:none]"
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`snap-start shrink-0 w-full md:w-1/2 lg:w-1/3 bg-dark-800 rounded-2xl p-6 flex flex-col items-center text-center gap-4 transition-all duration-300 ${
                t.active
                  ? "border-2 border-neon-orange shadow-[0_0_30px_#FF550088]"
                  : "border border-dark-700"
              }`}
            >
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl ${
                  t.active
                    ? "bg-gradient-to-br from-neon-orange to-neon-cyan"
                    : "bg-gradient-to-br from-dark-700 to-dark-900"
                }`}
              >
                {t.initials}
              </div>

              <p className="text-light italic text-sm leading-relaxed">
                "{t.quote}"
              </p>

              <Stars />

              <p className="text-white font-bold tracking-widest text-sm">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    )
}

export default Testimonials
