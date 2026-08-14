const NeonLights = ({ lights }: { lights: string[] }) => (
    <>
      {lights.map((cls, i) => (
        <div
          key={i}
          aria-hidden
          className={`pointer-events-none absolute z-0 ${cls}`}
        />
      ))}
    </>
  )

  export default NeonLights
