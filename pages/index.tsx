"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
        }
      });
    }, options);

    sections.forEach((section) => {
      section.classList.add("opacity-0", "translate-y-8", "transition-all", "duration-700");
      observer.observe(section);
    });
  }, []);

  return (
    <>
      {/* Importar fonte elegante Playfair Display */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;800&display=swap');
      `}</style>

      {/* Menu de Navegação */}
      <header className="fixed top-0 w-full bg-white shadow z-50">
        <nav className="flex justify-center space-x-6 p-4 text-gray-800 font-semibold">
          <a href="#introducao" className="hover:text-blue-600">Início</a>
          <a href="#documento" className="hover:text-blue-600">Documento</a>
          <a href="#video" className="hover:text-blue-600">Vídeo</a>
          <a href="#contato" className="hover:text-blue-600">Contato</a>
        </nav>
      </header>

      <main className="scroll-smooth pt-5">
        {/* Seção introdução com foto + degradê + texto */}
        <section
          id="introducao"
          className="relative h-screen bg-cover bg-center text-white flex items-center justify-center px-4"
          style={{ backgroundImage: "url('/img/foto.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black"></div>

          <div className="relative z-10 max-w-3xl text-center -translate-y-4">
            <h1 className="text-5xl font-bold mb-4 font-serif drop-shadow-lg">
              Visibilidade aos Invisíveis
            </h1>
            <p className="text-xl mb-6 font-light drop-shadow-md">
              Um projeto que dá voz àqueles que vivem nas sombras da cidade.
            </p>
            <a
              href="#documento"
              className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition font-semibold"
            >
              Conheça o Projeto
            </a>
          </div>
        </section>

        {/* Seção Documento com Flip Card */}
        <section
          id="documento"
          className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-100 py-20 px-6 flex items-center justify-center"
        >
          <div
            className="relative w-full max-w-5xl h-[500px] perspective cursor-pointer"
            onClick={() => setFlip(!flip)}
          >
            <div
              className={`relative w-full h-full transition-transform duration-700 ease-in-out transform-style-preserve-3d ${
                flip ? "rotate-y-180" : ""
              }`}
            >
              {/* Frente do cartão */}
              <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-2xl flex flex-col items-center justify-center p-8">
                <img
                  src="/img/foto2.webp"
                  alt="Miniatura do Documento"
                  className="w-70 h-50 object-cover rounded-lg shadow-lg mb-6"
                />
                <audio controls className="mb-6">
                  <source src="mp3/chico.mp3" type="audio/mpeg" />
                  Seu navegador não suporta áudio.
                </audio>
                <h2
                  className="text-3xl font-['Playfair_Display'] font-extrabold text-gray-900 mb-4 tracking-wide text-center"
                >
                  O Documento
                </h2>
                <p className="text-gray-700 text-center text-base font-light mb-6 max-w-md leading-relaxed tracking-wide">
                  Clique ou toque para explorar um resumo do conteúdo completo.
                </p>
                <a
                  href="/documento_do_projeto.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition shadow"
                  onClick={(e) => e.stopPropagation()}
                >
                  Acessar PDF
                </a>
              </div>

              {/* Verso do cartão */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-xl shadow-2xl p-8 flex flex-col justify-center text-center">
                <h3
                  className="text-2xl font-['Playfair_Display'] font-bold text-gray-900 mb-4 tracking-wide"
                >
                  Resumo do Documento
                </h3>
                <p className="text-gray-700 text-lg font-light leading-relaxed tracking-wide px-6 max-w-2xl mx-auto">
                  O documento reúne reflexões sociológicas sobre pessoas em situação de rua, com entrevistas,
                  dados públicos e propostas reais de intervenção social baseadas em pesquisa de campo.
                </p>
              </div>
            </div>

            <style jsx>{`
              .perspective {
                perspective: 1500px;
              }
              .backface-hidden {
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
              }
              .rotate-y-180 {
                transform: rotateY(180deg);
              }
              .transform-style-preserve-3d {
                transform-style: preserve-3d;
              }
            `}</style>
          </div>
        </section>

        {/* Seção Vídeo com degradê do claro para cinza escuro */}
        <section
          id="video"
          className="min-h-screen py-20 px-4 flex items-center justify-center"
          style={{
            background: "linear-gradient(to bottom, #f3f4f6, #4b5563)",
          }}
        >
          <div className="max-w-4xl w-full text-center text-gray-900">
            <h2 className="text-4xl font-bold mb-6 font-serif">Vídeo no YouTube</h2>
            <p className="text-lg mb-8">
              O vídeo documentário apresenta os bastidores do projeto, entrevistas com especialistas e cidadãos em situação de rua.
            </p>
            <div className="aspect-video w-full rounded overflow-hidden shadow-xl">
            <iframe
  className="w-full h-full"
  src="https://www.youtube.com/embed/MW9QsltAYIs"
  title="YouTube Video"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

            </div>
          </div>
        </section>

        {/* Seção Contato e Créditos com fundo escuro */}
        <section
          id="contato"
          className="relative bg-gray-900 text-white py-20 px-4 text-center overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-center bg-cover opacity-20 pointer-events-none"
            style={{ backgroundImage: "url('/fundo-creditos.jpg')" }}
          ></div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4 font-serif">Contato e Créditos</h2>
            <p className="text-lg mb-4">
              dissh_xz
            </p>
            <p className="text-sm text-gray-400">"© Dielson Cordeiro. Todos os direitos reservados.</p>
          </div>
        </section>
      </main>
    </>
  );
}
