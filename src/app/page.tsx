import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="text-center my-12 px-6">
        <h1 className="text-4xl font-bold text-gray-800">
          Empieza a vender hoy
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Convierte tus talentos o negocio en un éxito con YamApp.
        </p>
        <div className="mt-6">
          <Link href="/opciones">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-500">
              ¡Comenzar Ahora!
            </button>
          </Link>
        </div>
      </section>

      {/* Opciones de Venta */}
      <section className="w-full max-w-4xl px-6 my-12">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
          ¿Qué deseas hacer?
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/crear-presencia">
            <div className="bg-white w-64 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-bold text-blue-600 mb-2">
                Crear mi presencia
              </h3>
              <p className="text-gray-600">
                Construye tu espacio único y vende más.
              </p>
            </div>
          </Link>
          <Link href="/publicar-talento">
            <div className="bg-white w-64 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-bold text-blue-600 mb-2">
                Publicar mi talento
              </h3>
              <p className="text-gray-600">
                Conecta con personas que necesitan tus servicios.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

