// components/GoogleCalendarScheduling.tsx
import React from 'react';

const GoogleCalendarScheduling = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Agende uma consulta</h2>
        
        {/* Iframe do Google Calendar (já inclui o botão internamente) */}
        <div className="mb-8">
          <iframe 
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2uM-__AsHGdZDy9DR_PAjo7MafVtvywi5CbocHcIG9PL53JYbgFMVMxSfRcvpGTMyecy5K9Yll?gv=true" 
            style={{ border: 0 }} 
            width="100%" 
            height="600" 
            frameBorder="0"
            title="Agendamento de Consulta"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default GoogleCalendarScheduling;