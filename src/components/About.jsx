export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#0a192f] px-6 py-24 text-white font-grotesk"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-sky-400 text-center">
          About Me
        </h2>
        <div className="space-y-5 text-slate-400 text-base leading-relaxed">
          <p>
            Hello! My name is <strong>Erwin Dosantos Wowa</strong>, a
            6th-semester Informatics Engineering student with a strong passion
            for Web Development. I specialize as a Fullstack Developer, with
            solid experience using JavaScript and TypeScript on both frontend
            and backend sides.
          </p>
          <p>
            As a student who actively explores the tech ecosystem, I’ve
            developed proficiency in the ReactJS ecosystem as well as backend
            frameworks like Node.js and Express. I enjoy building responsive and
            user-friendly web applications that are not only functional but also
            visually engaging.
          </p>
          <p>
            I’m committed to continuously sharpening my skills through hands-on
            projects, independent learning, and staying updated with the latest
            trends in software development. For me, consistency and curiosity
            are the keys to growth as a developer.
          </p>
        </div>
      </div>
    </section>
  );
}
