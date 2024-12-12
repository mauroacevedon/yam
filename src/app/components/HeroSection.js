
export default function HeroSectionu() {
  return (
    <div className="m-5% relative flex flex-col lg:flex-row items-center justify-between min-h-screen bg-white px-6 lg:px-20 py-10">
      {/* Contenedor del Texto */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="font-bold text-4xl lg:text-5xl mb-6 text-custom-dark">
          Tu negocio en internet Ya con Yam
        </h1>
        <p className="text-custom-dark text-lg lg:text-xl mb-8">
          Empieza a vender y gestionar tu presencia en linea con Yam
        </p>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
        <button class="bg-sky-500 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-sky-600 transition">
          Prueba Ahora Gratis
        </button>
        </div>
      </div>

      {/* Contenedor de la Imagen */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
        <a
          href="https://postimg.cc/py0Br9GW"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://i.postimg.cc/28Y9HhnZ/small-business-owners-startup-and-e-commerce-conc-2023-11-27-05-37-09-utc.jpg"
            alt="small business owners startup"
            className="object-contain max-w-full h-auto rounded-lg shadow-lg"
          />
        </a>
      </div>
    </div>
  );
}
