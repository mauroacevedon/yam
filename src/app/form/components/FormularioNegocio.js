'use client'
import { useState } from 'react';

export default function FormularioNegocio() {
  // Estado inicial para almacenar los datos del formulario
  const [datosFormulario, setDatosFormulario] = useState({
    nombreEmpresa: '', // Guarda el nombre de la empresa o emprendimiento
    logo: null, // Guarda el archivo cargado como logo
    problemaSolucion: '', // Guarda la descripción del problema que resuelve el negocio
    llamadaAccion: '', // Guarda la llamada a la acción seleccionada
    testimonios: '', // Guarda los testimonios o casos de éxito ingresados
    estiloPagina: '', // Guarda el estilo preferido para el tono de la página
    beneficioClave: '', // Guarda el beneficio clave que se destacará
    fuentesTrafico: [], // Guarda las plataformas o medios seleccionados para tráfico
  });

  // Función para manejar los cambios en los campos del formulario
  const manejarCambio = (e) => {
    const { name, value, type, files } = e.target; // Extraer datos del campo modificado
    if (type === 'file') {
      // Almacenar el archivo cargado en el estado
      setDatosFormulario({ ...datosFormulario, [name]: files[0] });
    } else if (type === 'checkbox') {
      // Manejar selección múltiple para las fuentes de tráfico
      const fuentesSeleccionadas = datosFormulario.fuentesTrafico.includes(value)
        ? datosFormulario.fuentesTrafico.filter((fuente) => fuente !== value)
        : [...datosFormulario.fuentesTrafico, value];
      setDatosFormulario({ ...datosFormulario, fuentesTrafico: fuentesSeleccionadas });
    } else {
      // Actualizar el estado con el valor ingresado en el campo
      setDatosFormulario({ ...datosFormulario, [name]: value });
    }
  };

  // Función para manejar el envío del formulario
  const manejarEnvio = (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    console.log('Datos del formulario enviados:', datosFormulario);
    // Aquí podemos enviar los datos a Firebase o utilizarlos como prompt para IA
  };

  return (
    <form
      className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-6"
      onSubmit={manejarEnvio} // Asignar la función de manejo de envío
    >
      <h1 className="text-2xl font-bold text-gray-800">Formulario de Negocio</h1>

      {/* Campo para el nombre de la empresa */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          ¿Cuál es el nombre de tu empresa o emprendimiento?
        </label>
        <input
          type="text"
          name="nombreEmpresa" // Campo correspondiente en el estado
          value={datosFormulario.nombreEmpresa} // Vincular al estado
          onChange={manejarCambio} // Manejar cambios en el valor
          className="w-full border border-gray-300 rounded-lg p-3"
          placeholder="Escribe el nombre de tu negocio"
        />
      </div>

      {/* Campo para cargar el logo */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">¿Tienes logo?</label>
        <input
          type="file"
          name="logo" // Campo correspondiente en el estado
          onChange={manejarCambio} // Manejar carga de archivo
          className="w-full border border-gray-300 rounded-lg p-3"
        />
      </div>

      {/* Campo para describir el problema que resuelve */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          ¿Qué problema específico resuelve tu oferta para tus clientes?
        </label>
        <input
          type="text"
          name="problemaSolucion" // Campo correspondiente en el estado
          value={datosFormulario.problemaSolucion} // Vincular al estado
          onChange={manejarCambio} // Manejar cambios en el valor
          className="w-full border border-gray-300 rounded-lg p-3"
          placeholder="Describe el problema que resuelves"
        />
      </div>

      {/* Campo para seleccionar llamada a la acción */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          ¿Cuál es tu llamada de acción preferida?
        </label>
        <select
          name="llamadaAccion" // Campo correspondiente en el estado
          value={datosFormulario.llamadaAccion} // Vincular al estado
          onChange={manejarCambio} // Manejar cambios en la selección
          className="w-full border border-gray-300 rounded-lg p-3"
        >
          <option value="">Selecciona una opción</option>
          <option value="Reservar">Reservar</option>
          <option value="Comprar">Comprar</option>
          <option value="Llamar">Llamar</option>
          <option value="Cotizar">Cotizar</option>
        </select>
      </div>

      {/* Campo para testimonios */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          ¿Tienes testimonios o casos de éxito que validen tu producto o servicio?
        </label>
        <textarea
          name="testimonios" // Campo correspondiente en el estado
          value={datosFormulario.testimonios} // Vincular al estado
          onChange={manejarCambio} // Manejar cambios en el texto
          className="w-full border border-gray-300 rounded-lg p-3"
          placeholder="Describe los testimonios o casos de éxito"
        />
      </div>

      {/* Campo para seleccionar el estilo de la página */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          ¿Qué estilo prefieres que sea el tono de tu página?
        </label>
        <select
          name="estiloPagina" // Campo correspondiente en el estado
          value={datosFormulario.estiloPagina} // Vincular al estado
          onChange={manejarCambio} // Manejar cambios en la selección
          className="w-full border border-gray-300 rounded-lg p-3"
        >
          <option value="">Selecciona un estilo</option>
          <option value="Informativo y tranquilo">Informativo y tranquilo</option>
          <option value="Formal y serio">Formal y serio</option>
          <option value="Inspirador y humano">Inspirador y humano</option>
          <option value="Técnico y amable">Técnico y amable</option>
        </select>
      </div>

      {/* Campo para describir el beneficio clave */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          ¿Qué beneficio clave debemos destacar en tu página?
        </label>
        <input
          type="text"
          name="beneficioClave" // Campo correspondiente en el estado
          value={datosFormulario.beneficioClave} // Vincular al estado
          onChange={manejarCambio} // Manejar cambios en el valor
          className="w-full border border-gray-300 rounded-lg p-3"
          placeholder="Describe el beneficio clave"
        />
      </div>

      {/* Campo para seleccionar las fuentes de tráfico */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          ¿Qué plataforma o medios utilizarás para llevar tráfico a tu página web?
        </label>
        <div className="flex flex-wrap gap-4">
          {/* Opciones múltiples */}
          <label className="text-black flex items-center space-x-2">
            <input
              type="checkbox"
              name="fuentesTrafico"
              value="Redes sociales"
              checked={datosFormulario.fuentesTrafico.includes('Redes sociales')}
              onChange={manejarCambio} // Manejar selección múltiple
              className="rounded"
            />
            <span>Redes sociales</span>
          </label>
          <label className="text-black flex items-center space-x-2">
            <input
              type="checkbox"
              name="fuentesTrafico"
              value="Anuncios pagados"
              checked={datosFormulario.fuentesTrafico.includes('Anuncios pagados')}
              onChange={manejarCambio} // Manejar selección múltiple
              className="rounded"
            />
            <span>Anuncios pagados</span>
          </label>
          <label className="text-black flex items-center space-x-2">
            <input
              type="checkbox"
              name="fuentesTrafico"
              value="Email"
              checked={datosFormulario.fuentesTrafico.includes('Email')}
              onChange={manejarCambio} // Manejar selección múltiple
              className="rounded"
            />
            <span>Email</span>
          </label>
        </div>
      </div>

      {/* Botón para enviar el formulario */}
      <div>
        <button
          type="submit"
          className="bg-sky-500 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-sky-600 transition"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}
