// components/TestimonialsSection.tsx
import React, { useState, useEffect, useRef } from 'react';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [slidesToShow, setSlidesToShow] = useState(3); // Default para desktop

  const testimonials = [
    {
      name: "Andressa Vale Peres",
      date: "02/05/2025",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUNqUllBsI59jj5hSZbmZsRLtdYEKsgiXR5yuNwaggvW4Q4qVM=w90-h90-p-rp-mo-br100",
      rating: 5,
      text: "Ótimo profissional, possui um atendimento diferenciado. Recomendo"
    },
    {
      name: "Julia Severo teix",
      date: "04/06/2025",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXisWr1JJQlg_n-3S95gT4pF7aSBmhrWAyOhgNHeLdbEG385aRI=w90-h90-p-rp-mo-br100",
      rating: 5,
      text: "Ótimo profissional. podem confiar!"
    },
    {
      name: "Geane Carvalho Padilha",
      date: "10/12/2024",
      avatar: "https://lh3.googleusercontent.com/a/ACg8ocI1aV25ahdN1GGY0eSIFj1oJmO-I-ABuMowAXBmHCs_dtMcvQ=w90-h90-p-rp-mo-br100",
      rating: 5,
      text: "Excelente profissional, disposto ajudar e atender seus clientes da melhor forma possível. Seus serviços são muito respeitados e recomendados!"
    },
    {
      name: "Kethellen Lima",
      date: "28/12/2024",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUCsqOgjA2LsWQTv98d0qypCdTFbCLvJce9exhgW6tYxT5xBe-w=w90-h90-p-rp-mo-br100",
      rating: 5,
      text: "Ótimo profissional, me auxílio com tudo que precisei, indico muito."
    },
    {
      name: "Vivi Graziely",
      date: "15/11/2024",
      avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXEJNB-_c4EZwK40innjll_54rZRVAExJzSU28q_NN-N4JKYpJj5Q=w90-h90-p-rp-mo-ba3-br100",
      rating: 5,
      text: "Atendimento diferenciado! Existe todo um cuidado e um olhar para o cliente. Extremamente organizado e responsável. Todas e quaisquer dúvidas durante o atendimento ele se dispõe a tirar."
    },
    
  ];

  // Ajustar número de slides visíveis conforme tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) { // Tailwind's 'md' breakpoint
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize(); // Chamar imediatamente para definir o estado inicial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calcular largura do slide
  const slideWidth = containerRef.current ? containerRef.current.offsetWidth / slidesToShow : 0;

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % (testimonials.length - slidesToShow + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length, slidesToShow]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">O que nossos clientes dizem</h2>
        

        <div className="relative overflow-hidden" ref={containerRef}>
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentSlide * slideWidth}px)`,
              width: `${testimonials.length * slideWidth}px`
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="flex-shrink-0 px-2"
                style={{ width: `${slideWidth}px` }}
              >
                <div className="bg-white rounded-lg shadow-md p-4 h-full flex flex-col">
                  <div className="flex items-center mb-3">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-800 truncate">{testimonial.name}</h4>
                      <p className="text-gray-500 text-xs">{testimonial.date}</p>
                    </div>
                    <img 
                      src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg" 
                      alt="Google" 
                      className="h-4 ml-2"
                    />
                  </div>
                  
                  <div className="flex mb-2 text-yellow-400 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>
                        {i < testimonial.rating ? '★' : '☆'}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-700 text-sm flex-grow">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6">
          {[...Array(testimonials.length - slidesToShow + 1)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full mx-1 ${currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'}`}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;