import React from 'react';

const GoogleCalendarScheduling = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6 md:mb-8">
          Agende uma consulta
        </h2>
        
        {/* Container com sombra mais intensa e efeito de "flutuação" */}
        <div className="mb-8 rounded-xl overflow-hidden shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-300 transform hover:-translate-y-1">
          <div className="aspect-w-16 aspect-h-9 md:aspect-none bg-white p-1 rounded-xl">
            <iframe 
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2uM-__AsHGdZDy9DR_PAjo7MafVtvywi5CbocHcIG9PL53JYbgFMVMxSfRcvpGTMyecy5K9Yll?gv=true" 
              style={{ border: 0 }}
              className="w-full h-[1600px] md:h-[1800px] rounded-lg"
              frameBorder="0"
              title="Agendamento de Consulta"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleCalendarScheduling;