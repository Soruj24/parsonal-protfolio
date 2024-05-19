import logo from "../assets/logo.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

function Navbar() {
  return (
    <nav className="  mb-20 flex items-center justify-between py-6">
      <div className="flex items-center flex-shrink-0">
        <img className="h-16 w-16 rounded-full mx-2" src={logo} alt="logo" />
      </div>
      <div className=" flex items-center m-8 justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/feed/">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/Soruj24">
          {" "}
          <FaGithub />
        </a>
        <a href="https://x.com/home">
          <FaTwitter />
        </a>
        <a href="https://www.facebook.com/">
          <FaFacebook />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
