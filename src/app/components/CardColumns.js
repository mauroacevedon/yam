
export default function CardColumns() {
    const cards = [
      {
        title: 'Llega a publico nuevo',
        subtitle: 'Conectado a Google, Yam es tu nueva tarjeta de presentación',
      },
      {
        title: 'Vende sin contratos',
        subtitle: 'Crea tu negocio digital gratis*',
      },
      {
        title: 'Amplia tu negocio',
        subtitle: 'Redes sociales no son suficientes, crece hoy con Yam',
      },
      {
        title: 'No necesitas conocimiento tecnico',
        subtitle: 'Nuestro Bot te apoyará a crear contenido que vende',
      },
    ];
  
    return (
      <div className="bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md border border-gray-200 p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.subtitle}</p>
            </div>
            <button className="mt-4 bg-sky-500 text-white py-2 px-4 rounded-md hover:bg-sky-600 transition">
              Ver más
            </button>
          </div>
        ))}
      </div>
    );
  }
  