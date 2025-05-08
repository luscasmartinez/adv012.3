import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#001a5a] py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-[#e5e5e5] font-bold text-xl md:text-2xl">
          Eduardo Lemes Advocacia
          </span>
        </div>
        
        <div className="flex items-center space-x-4">
          <a href="tel:+5555912345678" className="hidden md:flex items-center text-[#e5e5e5] hover:text-[#dec8b6] transition-colors">
            <Phone size={18} className="mr-2" />
            <span>(55) 9 9992-2774</span>
          </a>
          
          <a 
            href="https://api.whatsapp.com/send?phone=555599922774&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Vi%20que%20voc%C3%AAs%20trabalham%20com%20suspens%C3%A3o%20de%20CNH%20e%20recursos%20de%20tr%C3%A2nsito.%20Recebi%20uma%20notifica%C3%A7%C3%A3o%20sobre%20a%20suspens%C3%A3o%20da%20minha%20carteira%20e%20estou%20muito%20preocupado%2C%20pois%20dependo%20dela%20para%20trabalhar.%20Gostaria%20de%20saber%20como%20funciona%20o%20atendimento%20de%20voc%C3%AAs%20e%20se%20podem%20me%20ajudar%20nesse%20caso.%20Obrigado%21" 
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 md:px-6 rounded-full transition-all duration-300 flex items-center font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;