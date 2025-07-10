export default function Project() {
  const projects = [
    {
      name: "Build and Deploy App with Docker",
      url: "https://svelteapp-erwin.vercel.app/",
      description:
        "A simple web application built with Svelte and Vite as part of Operating System lab assignment.",
      stack: "Svelte, Vite, Docker, Docker Hub, GitHub, Vercel",
    },
  ];

  return (
    <section id="project" className="bg-[#0a192f] py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Project
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-[#112240] p-6 rounded-md">
              <h3 className="text-xl mb-2">{proj.name}</h3>
              <a
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:underline"
              >
                {proj.url}
              </a>
              <p className="text-sm text-slate-400 mt-2">{proj.description}</p>
              <p className="text-xs text-sky-300 mt-1">{proj.stack}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
