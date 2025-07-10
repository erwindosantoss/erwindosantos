import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0a192f] text-slate-400 py-8 text-center font-grotesk text-sm">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center space-x-6 mb-4 text-xl">
          <a
            href="https://linkedin.com/in/erwin-dosantos-285a76255" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/erwindosantoss" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com/erwindosantos_" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition"
          >
            <FaInstagram />
          </a>
        </div>

        <p>
          Built by <span className="text-sky-400 font-semibold">Erwin Dosantos Wowa</span> — © {new Date().getFullYear()}
        </p>
        <p className="mt-1">
          Made with ❤️ using React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
