// app/pages/gallery.js
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Galería de Proyectos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-md overflow-hidden">
            <Image
              src="/images/image1.jpg" // Ruta correcta a la imagen
              alt="Proyecto 1"
              width={500} // Especifica un ancho fijo
              height={300} // Especifica una altura fija
              className="w-full h-48 object-cover"
            />
            <p className="p-4">Descripción del Proyecto 1</p>
          </div>
          <div className="border border-gray-200 rounded-md overflow-hidden">
            <Image
              src="/images/image2.jpg" // Ruta correcta a la imagen
              alt="Proyecto 2"
              width={500} // Especifica un ancho fijo
              height={300} // Especifica una altura fija
              className="w-full h-48 object-cover"
            />
            <p className="p-4">Descripción del Proyecto 2</p>
          </div>
          {/* Agrega más imágenes aquí */}
        </div>
      </div>
    </>
  );
}
