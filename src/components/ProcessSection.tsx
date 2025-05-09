import React from 'react';
import { Scale, FileText } from 'lucide-react';

const ProcessSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#001a5a]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nossas Soluções
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-[#e5e5e5]">
            Soluções especializadas para cada situação
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-start mb-6">
              <div className="bg-[#001a5a] p-3 rounded-full mr-4">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#001a5a]">
                Recursos e Defesas
              </h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-[#001a5a] rounded-full mr-3"></div>
                Defesa e recurso de multas de trânsito
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-[#001a5a] rounded-full mr-3"></div>
                Recurso para manter a CNH provisória em caso de infração
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-[#001a5a] rounded-full mr-3"></div>
                Recurso contra decisão de cassação da CNH
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-[#001a5a] rounded-full mr-3"></div>
                Indicação de condutor responsável por infração
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-start mb-6">
              <div className="bg-[#001a5a] p-3 rounded-full mr-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#001a5a]">
                Serviços Especializados
              </h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-[#001a5a] rounded-full mr-3"></div>
                Solicitação de liberação de veículo apreendido
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-[#001a5a] rounded-full mr-3"></div>
                Atuação em casos relacionados à Lei Seca
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-[#001a5a] rounded-full mr-3"></div>
                Representação em ações judiciais de seguro veicular
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-[#001a5a] rounded-full mr-3"></div>
                Defesa e recurso contra suspensão da CNH
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700">
          Independentemente da dificuldade que você esteja enfrentando, sabemos como essas situações podem gerar dúvidas e preocupação. Nossa equipe, especializada em direito de trânsito, está pronta para orientar você com segurança e tranquilidade ao longo do processo.
          </p>
          <div className="mt-8">
            <a 
              href="https://api.whatsapp.com/send?phone=555599922774&text=Ol%C3%A1%2C%20entrei%20no%20site%20e%20preciso%20de%20um%C2%A0advogado" 
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-center inline-flex items-center transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Fale com um Especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;