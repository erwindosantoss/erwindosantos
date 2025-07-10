import Navbar from './Navbar';

export default function Home() {
  return (
    <section id="home" className="bg-[#0a192f] text-white min-h-screen font-sans">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 pt-32">
        <p className="text-sky-400 text-lg">Hi, my name is</p>
        <h1 className="text-5xl md:text-6xl font-extrabold mt-2">Erwin Dosantos.</h1>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-400 mt-1">
          I build things for the web.
        </h2>
        <p className="text-slate-400 mt-6 leading-relaxed max-w-2xl">
          I'm a Fullstack Developer with a strong focus on web development using TypeScript.
          While I may not have formal industry experience yet, I’ve built various fullstack
          projects that showcase my technical skills and problem-solving ability. I'm passionate
          about learning, keeping up with the latest tech trends, and continuously improving my craft.
        </p>

        <a
          href="/cv.pdf" 
          className="inline-block mt-8 border border-sky-400 text-sky-400 px-6 py-3 rounded hover:bg-sky-400 hover:text-[#0a192f] transition"
        >
          View my CV here!
        </a>
      </div>
    </section>
  );
}
