export default function Project() {
  const projects = [
    {
      name: "Build and Deploy App with Docker",
      image: "",
      url: "https://svelteapp-erwin.vercel.app/",
      description:
        "A simple web application built with Svelte and Vite as part of Operating System lab assignment. The project demonstrates how to build, containerize using Docker, push to Docker Hub, and deploy the app publicly with Vercel.",
      stack: "Svelte, Vite, Docker, Docker Hub, GitHub, Vercel",
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
