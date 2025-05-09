import React from 'react';
import { AlertTriangle, Ban, TrendingDown, UserX } from 'lucide-react';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#e5e5e5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001a5a] mb-4">
            Você recebeu uma notificação de suspensão da CNH?
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            A suspensão da sua CNH pode trazer sérias consequências para sua vida profissional e pessoal. 
            Entenda os riscos:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Ban className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-[#001a5a] mb-2 text-center">
              Perda da Habilitação
            </h3>
            <p className="text-gray-600 text-center">
              Suspensão temporária ou até cassação do direito de dirigir, impedindo seu trabalho.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingDown className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-[#001a5a] mb-2 text-center">
              Perda de Renda
            </h3>
            <p className="text-gray-600 text-center">
              Sem poder dirigir, sua fonte de sustento fica comprometida, afetando você e sua família.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-[#001a5a] mb-2 text-center">
              Multas Pesadas
            </h3>
            <p className="text-gray-600 text-center">
              Além da suspensão, as multas podem gerar um impacto financeiro significativo.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserX className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-[#001a5a] mb-2 text-center">
              Curso Obrigatório
            </h3>
            <p className="text-gray-600 text-center">
              Necessidade de realizar curso de reciclagem e novos exames, gerando custos e tempo perdido.
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-2xl font-bold text-[#001a5a] mb-6">
            Não deixe que isso aconteça com você!
          </p>
          <a 
            href="https://api.whatsapp.com/send?phone=555599922774&text=Ol%C3%A1%2C%20entrei%20no%20site%20e%20preciso%20de%20um%C2%A0advogado" 
             
            className="bg-[#001a5a] hover:bg-[#00134a] text-white font-bold py-3 px-8 rounded-lg text-center inline-block transition-all duration-300"
          >
            Quero Resolver Minha Situação
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;