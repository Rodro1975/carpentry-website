import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-[#8B4513] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Carpintería</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-[#F5F5DC]">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-[#F5F5DC]">
              Servicios
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="hover:text-[#F5F5DC]">
              Galería
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-[#F5F5DC]">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
