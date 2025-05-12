import React from 'react';
import { ShieldCheck } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative text-white pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Imagem de fundo com overlay gradiente */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Fundo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001a5a] via-[#001a5a]/95 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <div className="bg-[#001a5a]/80 p-6 rounded-lg backdrop-blur-sm">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
                <span className="text-[#dec8b6]">Não perca sua CNH</span> e continue trabalhando!
              </h1>

              <p className="text-lg md:text-xl mb-6 text-[#e5e5e5]">
                Motorista profissional, não deixe que multas ou uma suspensão de CNH afete seu sustento e o de sua família.
                <span className="font-bold"> Nós podemos ajudar!</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">


              <a
                href="https://api.whatsapp.com/send?phone=555599922774&text=Ol%C3%A1%2C%20entrei%20no%20site%20e%20preciso%20de%20um%C2%A0advogado"
                className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-lg text-center transition-all duration-300 flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Falar no WhatsApp
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 bg-[#001a5a]/80 p-4 rounded-lg backdrop-blur-sm">


              <div className="flex items-center">
                <ShieldCheck className="w-6 h-6 text-[#dec8b6] mr-2" />
                <span className="text-sm">Atendimento Online</span>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <img
              src="https://raw.githubusercontent.com/luscasmartinez/adv012.3/refs/heads/main/src/static/adv.JPG"
              alt="Advogado especialista em recursos de multas e CNH"
              className="rounded-full shadow-xl w-64 h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;