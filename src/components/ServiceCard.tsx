interface ServiceCardProps {
    accent: "orange" | "cyan"
    icon: React.ReactNode
    title: string
    items: string[]
  }

  const ServiceCard = ({ accent, icon, title, items }: ServiceCardProps) => {
    const isOrange = accent === "orange"

    return (
      <div
        className={`rounded-2xl p-[1.5px] bg-gradient-to-r from-neon-orange to-neon-cyan transition-all duration-300 hover:-translate-y-1 shadow-[0_0_15px_#FF550066]`}
      >
        <div className="bg-dark-800 rounded-[calc(1rem-1.5px)] p-6 flex flex-col gap-4 h-full">
        <div className={isOrange ? "text-neon-orange" : "text-neon-cyan"}>
          {icon}
        </div>

        <h3 className="text-white font-bold text-xl uppercase tracking-wide">
          {title}
        </h3>

        <ul className="flex flex-col gap-2 mt-auto">
          {items.map((item) => (
            <li key={item} className="text-muted text-sm flex items-center gap-2">
              <span className={isOrange ? "text-neon-orange" : "text-neon-cyan"}>
                +
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      </div>
    )
  }

  export default ServiceCard