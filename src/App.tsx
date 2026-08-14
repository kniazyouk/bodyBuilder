import Navbar from './components/Navbar'
  import Hero from './components/Hero'
  import ServiceCard from './components/ServiceCard'
  import Testimonials from './components/Testimonials'
  import VideoGallery from './components/VideoGallery'
  import Footer from './components/Footer'
  import NeonLights from './components/NeonLights'
  import { CoachIcon, AppleIcon, DumbbellIcon } from './components/Icons'

  function App() {
    return (
      <>
        <Navbar />
        <Hero />

        <section id="services" className="relative py-20 px-6 md:px-16 w-full">
          <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_80%_20%,#FF550033,transparent_50%)]" />
          <NeonLights
            lights={[
              "top-16 right-10 h-1.5 w-24 bg-neon-orange opacity-60 shadow-[0_0_12px_#FF550088]",
              "bottom-12 left-10 h-1.5 w-24 bg-neon-cyan opacity-60 shadow-[0_0_12px_#00E5FF88]",
            ]}
          />
          <h2 className="text-white font-extrabold text-3xl md:text-4xl uppercase tracking-wider mb-12">
            Our Elite Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              accent="cyan"
              icon={<CoachIcon color="#00E5FF" />}
              title="Personalized Coaching"
              items={["Detailed Plans", "1-on-1 Support"]}
            />
            <ServiceCard
              accent="orange"
              icon={<AppleIcon color="#FF5500" />}
              title="Nutrition Strategy"
              items={["Meal Plans", "Macros", "Supplementation"]}
            />
            <ServiceCard
              accent="cyan"
              icon={<DumbbellIcon color="#00E5FF" />}
              title="Workout Programs"
              items={["Strength", "Hypertrophy", "Competition Prep"]}
            />
          </div>
        </section>

        <Testimonials />
        <VideoGallery />
        <Footer />
      </>
    )
  }

  export default App