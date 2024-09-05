// app/pages/contact.js
import Navbar from "../components/Navbar";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Contacto</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="message">
              Mensaje
            </label>
            <textarea
              id="message"
              className="w-full border border-gray-300 rounded-md p-2"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}
