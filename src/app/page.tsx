"use client";
import { useEffect } from "react";
import CardGrid from "@/componentes/ui/Card";
import Galeria from "@/componentes/ui/Galeria";
import Contato from "@/componentes/ui/Contato";
import Div from "@/componentes/ui/Div";
import WavesAnimation from "@/componentes/ui/SVGBackground2";
import AnimatedSection from "@/componentes/ui/Animacao";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <div>
      <main className="flex flex-col items-center sm:items-start font-oswald">
      <section id="s1" className="h-screen w-full flex flex-col items-center justify-center relative bg-preto mt-8">
        <img src="/tilulo2.png" className="w-[1000px] absolute opacity-5 select-none" />
        <div className="text-center z-10">
          <AnimatedSection>
          <img src="/img/logo.jpeg" className="w-[150px] rounded-full mx-auto mb-5 shadow-gray-300 shadow-sm" />
          <p className="text-lg text-gray-700 mb-8 px-4 md:px-8 max-w-[450px]">
            Explore uma coleção das minhas obras de arte, onde cada peça reflete a minha jornada criativa e a paixão pela arte.
          </p>
          <a href="https://wa.me/8481680840" className="text-lg text-amarelo font-bebas px-6 py-3 rounded-lg hover:bg-custom-gradient hover:text-branco border border-branco transition-all duration-300">
            Entre em contato
          </a>
          </AnimatedSection>
        </div>

      </section>


        <section id="s2" className="h-screen w-full content-center bg-custom-gradient sm:p-10 relative">
          <div className="flex justify-center items-center min-h-[60vh] p-4">
            <Galeria /> 
          </div>
        </section>

        <section id="s3" className="w-full bg-preto">
          <div className="flex justify-center mt-[120px] mb-4">
            <h2 className="text-4xl text-amarelo font-bebas">Preços</h2>
          </div>
          <div className="flex justify-center items-center min-h-[60vh] p-4">
            <CardGrid />
          </div>
        </section>

        <section id="s4" className="lg:min-h-screen w-full bg-branco">
          <div className="flex justify-center mt-[120px] mb-4">
            <h2 className="text-4xl text-preto font-bebas">Contato</h2>
          </div>
          <AnimatedSection>
          <div className="flex justify-center items-center h-[70%] p-4">
             <Contato />
          </div>
          </AnimatedSection>
        </section>

        <section className="w-full bg-branco xl:flex hidden">
          <Div />
        </section>

        <section id="s5" className="h-screen w-full bg-preto relative z-10">
        <WavesAnimation />
          <div className="flex justify-center  mt-[120px] mb-4">
            <h2 className="text-4xl text-amarelo font-bebas">Sobre Mim</h2>
          </div>
          <div className="flex flex-col items-center space-y-6 sm:flex-row sm:space-y-0 sm:space-x-8 sm:justify-around text-center">
            <AnimatedSection>
              <img src="/img/perfil.jpeg" className="w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] mt-10 sm:mt-0 object-cover rounded-full shadow-md shadow-black" alt="Perfil de Noemia Camila Silva Cabral" />
            </AnimatedSection>
            <div className="max-w-md text-center text-amber-200 p-4">
            <AnimatedSection>
              <p>
                Nascida em 04 de agosto de 2001, Noemia Camila Silva Cabral é uma artista visual autodidata, que começou a fazer suas artes desde sua infância. Residente da cidade de Água Nova, atualmente ela
                trabalha com telas produzindo todos os estilos de artes.
              </p>
            </ AnimatedSection>
            </div>
          </div>
        </section>

        <section className="w-full bg-branco">
          <Div />
        </section>

        <footer className="bg-preto w-full h-20 relative">
        <div className="flex flex-col items-center justify-center h-full px-4 text-sm">
          <p className="text-branco text-center">
            © {new Date().getFullYear()}, Noemia Camila. Todos os direitos reservados.
          </p>
        </div>
        <div className="absolute bottom-0 h-[2px] w-full bg-custom-gradient"></div>
      </footer>


      </main>
    </div>
  );
}
