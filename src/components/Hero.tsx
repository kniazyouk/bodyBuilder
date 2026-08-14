import heroBg from "../assets/hero.jpeg"

const Hero = () => {
    return (
      <section className="relative min-h-screen flex items-center px-6 md:px-16 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-dark-900 via-dark-950 to-black" />
        <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_70%_30%,#FF550033,transparent_50%)]" />
        <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_20%_80%,#00E5FF22,transparent_50%)]" />

        <div className="max-w-2xl">
          <p className="text-neon-cyan text-sm tracking-[0.3em] mb-4 font-bold">
            IRON ELITE COACHING
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white uppercase leading-tight mb-6">
            Unleash your inner beast.{" "}
            <span className="text-neon-orange">Build the body you deserve.</span>
          </h1>

          <p className="text-muted text-lg mb-8">
            Join Iron Elite Coaching. Expert training. Real results.
          </p>

          <a
            href="#"
            className="inline-block bg-neon-orange text-white font-bold px-8 py-4 rounded-2xl text-sm tracking-wider uppercase shadow-[0_0_30px_#FF550088] hover:shadow-[0_0_50px_#FF5500] transition-shadow"
          >
            Get Started Now
          </a>
        </div>

         <p   className="absolute inset-0 -z-10 bg-cover bg-center opacity-40" style={{ backgroundImage: `url(${heroBg})` }}>
         </p>

         <p className="absolute bottom-8 right-8 text-neon-cyan text-sm tracking-widest font-bold">
            TRAINER: ALEX THOMPSON
         </p>
      </section>
    )
  }

  export default Hero