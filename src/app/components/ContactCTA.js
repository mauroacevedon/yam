
export default function ContactCTA() {
    return (
      <div className="relative bg-sky-500 flex flex-col lg:flex-row items-center justify-between min-h-[400px] p-6 lg:p-16 rounded-lg">
        {/* Contenedor de Texto */}
        <div className="lg:w-1/2 text-left">
          <h2 className="text-white text-4xl font-bold mb-4 leading-tight">
            ¿Listo para comenzar con YamApp?
          </h2>
          <p className="text-white text-lg mb-6">
            Descubre cómo puedes gestionar y vender en línea de manera eficiente
            y sencilla con nuestras herramientas.
          </p>
          <button className="bg-white text-sky-500 py-3 px-6 rounded-lg text-lg font-medium hover:bg-gray-100 transition">
            Comenzar Ya
          </button>
        </div>
  
        {/* Contenedor de Imagen */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0">
          <img
            src="https://i.postimg.cc/8cgVJQj1/cta-yam-app.jpg"
            alt="YamApp CTA"
            className="object-cover rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    );
  }
  