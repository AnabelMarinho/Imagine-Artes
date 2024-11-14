"use client";

import { useState } from "react";
import { Contact, HouseIcon, Menu, Palette, Tag, User, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", window.location.pathname); 
    }
    setIsOpen(false); 
  };

  return (
    <>
      <nav className="bg-preto text-branco p-4 fixed top-0 left-0 w-full z-50 h-16 flex items-center shadow-xl">
        <div className="container flex items-center justify-between">
          <div className="flex items-center">
           
            <img src="/img/logo.jpeg" alt="Logo" className="w-[50px] rounded-full border border-amarelo hidden sm:flex" />
          </div>

          <div className="md:flex space-x-2 hidden">

            <button onClick={() => scrollToSection("s1")} className="hover:text-amarelo transition rounded px-3 py-1">Início</button>
            <button onClick={() => scrollToSection("s2")} className="hover:text-amarelo transition rounded px-3 py-1">Obras</button>
            <button onClick={() => scrollToSection("s3")} className="hover:text-amarelo transition rounded px-3 py-1">Preços</button>
            <button onClick={() => scrollToSection("s4")} className="hover:text-amarelo transition rounded px-3 py-1">Contato</button>
            <button onClick={() => scrollToSection("s5")} className="hover:text-amarelo transition rounded px-3 py-1">Sobre</button>
          </div>

         
          <div className="md:hidden flex">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

     
      <div className={`bg-preto fixed text-white w-[250px] top-0 right-0 h-full shadow-md p-4 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden z-50`}>
  <button onClick={() => setIsOpen(false)} className="w-full p-2">
    <X className="w-5 mb-5" />
  </button>
  <div className="flex flex-col justify-center items-center flex-grow">
    {[
      { href: "s1", icon: <HouseIcon />, text: "Início" },
      { href: "s2", icon: <Palette />, text: "Obras" },
      { href: "s3", icon: <Tag />, text: "Preços" },
      { href: "s4", icon: <Contact />, text: "Contato" },
      { href: "s5", icon: <User />, text: "Sobre" },
    ].map(({ href, icon, text }) => (
      <button
        key={href}
        onClick={() => scrollToSection(href)}
        className="flex items-center p-2 cursor-pointer hover:text-amarelo rounded my-2 font-oswald"
      >
        {icon}
        <span className="ml-2">{text}</span>
      </button>
    ))}
  </div>


        <div className="absolute bottom-20 left-[45px]">
          <img src="/img/logo.jpeg" alt="Logo" className="w-[160px] rounded-full opacity-45" />
        </div>
      </div>
    </>
  );
}
