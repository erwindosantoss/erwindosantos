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
            Hi! I'm a passionate and curious developer who loves learning by
            doing. I’ve built and deployed several web applications using modern
            frameworks like <strong>React</strong>, <strong>Svelte</strong>, and{" "}
            <strong>Vite</strong>. Through my academic projects, I’ve gained
            hands-on experience with <strong>Docker</strong>,{" "}
            <strong>GitHub</strong>, and <strong>Vercel</strong>, including
            containerizing apps and publishing them online.
          </p>
          <p>
            I enjoy exploring how things work under the hood, debugging tricky
            errors, and turning small ideas into working products. My current
            stack includes <strong>JavaScript</strong>,{" "}
            <strong>TypeScript</strong>, <strong>Tailwind CSS</strong>, and
            tools like <strong>Node.js</strong>, <strong>Postman</strong>, and{" "}
            <strong>Git</strong>.
          </p>
          <p>
            I'm continuously growing as a developer and always excited to build
            something new!
          </p>
        </div>
      </div>
    </section>
  );
}
