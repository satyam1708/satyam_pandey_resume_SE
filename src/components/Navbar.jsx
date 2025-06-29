import { FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/splogo.png"
import { FaSquareXTwitter } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
                <img src={logo} className="mx-2" width={50} height={33} alt="Logo"/>
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/satyam-pandey-a278821b2/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Linkedin">
                <FaLinkedin/>
            </a>
            <a href="https://github.com/satyam1708" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub">
                <FaGithub/>
            </a>
            <a href="https://x.com/SatyamP40424099" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter">
                <FaSquareXTwitter/>
            </a>
        </div>
    </nav>
  )
}
export default Navbar;