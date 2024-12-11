// components/HeroSection.js
export default function HeroSection() {
  return (
    <div className="m-5% relative flex flex-col lg:flex-row items-center justify-between min-h-screen bg-white px-6 lg:px-20 py-10">
      {/* Contenedor del Texto */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="font-bold text-4xl lg:text-5xl mb-6 text-custom-dark">
          Descubre el poder de YamApp
        </h1>
        <p className="text-custom-dark text-lg lg:text-xl mb-8">
          Descubre el poder para crear, gestionar y vender en línea con YamApp.
        </p>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
          <button className="bg-primary-main text-white py-3 px-6 rounded-md text-lg font-medium hover:bg-primary-hover transition">
            Regístrate Ahora
          </button>
          <button className="border border-primary-main text-primary-main py-3 px-6 rounded-md text-lg font-medium hover:bg-primary-hover hover:text-white transition">
            Prueba Gratis
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
