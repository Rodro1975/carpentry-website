import React from "react";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="p-6">
        <h1 className="text-4xl font-bold text-center mb-4">
          ¡Bienvenido a Carpentry Website!
        </h1>
        <p className="text-lg text-center mb-6">
          Este es un proyecto de prueba para verificar los estilos de Tailwind
          CSS.
        </p>
        <div className="flex justify-center gap-4">
          {/* Botón Verde Musgo */}
          <button
            className="px-4 py-2 rounded text-white hover:brightness-90"
            style={{ backgroundColor: "#556B2F" }}
          >
            Botón Verde Musgo
          </button>
          {/* Botón Beige */}
          <button
            className="px-4 py-2 rounded text-black hover:brightness-90"
            style={{ backgroundColor: "#D2B48C" }}
          >
            Botón Beige
          </button>
        </div>
      </main>
    </>
  );
}
