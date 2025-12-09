import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import logo from "../assets/splogo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-8 backdrop-blur-mdbg-black/30 border-b border-white/10">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2 hover:scale-110 transition-transform duration-300" width={50} height={33} alt="Logo" />
        </a>
      </div>
      <div className="flex items-center justify-center gap-6 text-2xl text-white">
        <a
          href="https://www.linkedin.com/in/satyam-pandey-a278821b2/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
          className="hover:text-blue-500 hover:scale-125 transition-all duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/satyam1708"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-gray-400 hover:scale-125 transition-all duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/SatyamP40424099"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-blue-400 hover:scale-125 transition-all duration-300"
        >
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;