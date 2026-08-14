const videos = [
    { title: "TRAINING DRILLS", id: "Ge7ZVUzxjlM" },
    { title: "CLIENT PROGRESS", id: "AKBvl3-SBGw" },
    { title: "COACH TIPS", id: "Ge7ZVUzxjlM" },
    { title: "COMPETITION DAY", id: "PQmriSJJhYk" },
]

const VideoGallery = () => {
    return (
      <section id="videos" className="relative py-20 px-6 md:px-16 w-full">
        <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_70%_40%,#FF550033,transparent_50%)]" />
        <h2 className="text-white font-extrabold text-3xl md:text-4xl uppercase tracking-wider mb-12">
          Video Gallery
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video) => (
            <figure
              key={video.title}
              className="rounded-2xl overflow-hidden border border-dark-700 bg-dark-800 border-2 border-red-700 
              shadow-[0_0_15px_#FF550066]"
            >
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <figcaption className="text-white text-xs tracking-widest font-bold px-4 py-3 border-t border-dark-700">
                {video.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    )
}

export default VideoGallery
