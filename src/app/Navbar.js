"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Alternar apertura/cierre del menú
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className="bg-[#FFFFFF] shadow-md relative">
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
          {/* Logo */}
          <div className="w-28 md:w-40">
            <img
              src="https://i.postimg.cc/1XH94WmQ/yam-Logo-Color.png"
              alt="Logo"
              className="w-full"
            />
          </div>

          {/* Botón del menú para móviles */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-[#23242A] focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen
                    ? "M6 18L18 6M6 6l12 12" // Ícono "X" al cerrar
                    : "M4 6h16M4 12h16M4 18h16" // Líneas del menú hamburguesa
                }
              />
            </svg>
          </button>

          {/* Opciones del menú */}
          <ul
            className={`fixed top-0 left-0 w-full h-full bg-[#FFFFFF] flex flex-col items-center justify-center space-y-8 lg:space-y-0 lg:flex lg:static lg:flex-row lg:space-x-8 lg:h-auto lg:opacity-100 transition-all duration-300 ${
              menuOpen ? "z-50 opacity-100" : "z-[-10] opacity-0 lg:z-auto"
            }`}
          >
            {/* Botón de cierre del menú en la parte superior derecha */}
            {menuOpen && (
              <button
                onClick={toggleMenu}
                className="absolute top-4 right-4 text-[#23242A] focus:outline-none lg:hidden"
              >
                <svg
                  className="w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12" // Ícono de cerrar
                  />
                </svg>
              </button>
            )}

            <li>
              <Link href="#inicio" className="text-lg text-[#23242A] hover:text-[#0E6FFF]">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="#beneficios" className="text-lg text-[#23242A] hover:text-[#0E6FFF]">
                Beneficios
              </Link>
            </li>
            <li>
              <Link href="#funciones" className="text-lg text-[#23242A] hover:text-[#0E6FFF]">
                Funciones
              </Link>
            </li>
            <li>
              <Link href="#opiniones" className="text-lg text-[#23242A] hover:text-[#0E6FFF]">
                Opiniones
              </Link>
            </li>
            <li>
              <Link href="#empieza-gratis" className="text-lg text-[#23242A] hover:text-[#0E6FFF]">
                Empieza Gratis
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
