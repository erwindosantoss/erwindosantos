export default function Portofolio() {
  const projects = [
    {
      name: "Pinarak Resto",
      image: "/images/pinarak.png",
      url: "https://svelteapp-erwin.vercel.app/",
      description:
        "This website was developed as part of the final assignment for the Front-End Web Developer Expert course by Dicoding. It serves as an informational platform where users can comment on each restaurant.",
      stack: "Javascript, Webpack, PWA, IDB, Jasmine, Karma, Sass",
    }
  ];

  return (
    <section id="project" className="bg-[#0a192f] py-24 px-6 text-white font-grotesk">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-100 mb-4">
          Past Project Experience
        </h2>
        <p className="text-center text-slate-400 mb-12">
          Explore how I consistently delivered maximum results in my previous projects.
        </p>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="bg-[#112240] rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{proj.name}</h3>
              <a href={proj.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="rounded-md mb-4 border border-slate-600 hover:scale-[1.01] transition"
                />
              </a>
              <p className="text-slate-400 text-sm mb-4">{proj.description}</p>
              <p className="text-xs text-sky-300">{proj.stack}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
