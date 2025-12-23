import React from "react";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import logo from "../assets/mLogo.png";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={50} height={50} alt="Logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-30 text-2xl">
        <a href="#tec" className="hover:text-gray-400">Tecnologias</a>
        <a href="#projects" className="hover:text-gray-400">Projetos</a>
        <a href="#experience" className="hover:text-gray-400">Experiência</a>
        <a href="#contact" className="hover:text-gray-400">Contato</a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/marco-cunha-0225762b8"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-gray-400"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/MarcoVCunha"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-gray-400"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/marcov_cunha"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-gray-400"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
