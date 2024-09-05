// app/pages/services.js
import Navbar from "../components/Navbar";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Nuestros Servicios</h1>
        <ul className="space-y-4">
          <li className="p-4 border border-gray-200 rounded-md">
            <h2 className="text-xl font-semibold">Servicio 1</h2>
            <p>Descripción breve del Servicio 1.</p>
          </li>
          <li className="p-4 border border-gray-200 rounded-md">
            <h2 className="text-xl font-semibold">Servicio 2</h2>
            <p>Descripción breve del Servicio 2.</p>
          </li>
          {/* Agrega más servicios aquí */}
        </ul>
      </div>
    </>
  );
}
