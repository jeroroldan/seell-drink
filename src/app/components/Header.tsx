"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronUp } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showVendorInfo, setShowVendorInfo] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleVendorInfo = () => setShowVendorInfo(!showVendorInfo);

  return (
    <header className="py-6 px-4 md:px-0 bg-gray-900 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight text-neon-blue">
          Speed Unlimited
        </h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <Link
                href="#productos"
                className="hover:text-neon-blue transition-colors"
              >
                Productos
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="hover:text-neon-blue transition-colors"
              >
                Sobre Nosotros
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden md:block relative">
          <Button
            variant="outline"
            className={`border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300 ${
              showVendorInfo ? "transform -translate-y-full" : ""
            }`}
            onClick={toggleVendorInfo}
          >
            Contacto
            <ChevronUp
              className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                showVendorInfo ? "rotate-180" : ""
              }`}
            />
          </Button>
          {showVendorInfo && (
            <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-gray-800 rounded-md shadow-lg">
              <h3 className="text-neon-blue font-semibold mb-2">
                Información del Vendedor
              </h3>
              <p className="text-white">Nombre: Juan Pérez</p>
              <p className="text-white">Email: juan@speedunlimited.com</p>
              <p className="text-white">Teléfono: +1 234 567 8900</p>
            </div>
          )}
        </div>
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900 py-4">
          <nav className="container mx-auto px-4">
            <ul className="space-y-2">
              <li>
                <Link
                  href="#productos"
                  className="block py-2 hover:text-neon-blue transition-colors"
                  onClick={toggleMenu}
                >
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="block py-2 hover:text-neon-blue transition-colors"
                  onClick={toggleMenu}
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Button
                  variant="outline"
                  className="w-full mt-4 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black flex justify-between items-center"
                  onClick={toggleVendorInfo}
                >
                  Contacto
                  <ChevronUp
                    className={`h-4 w-4 transition-transform duration-300 ${
                      showVendorInfo ? "rotate-180" : ""
                    }`}
                  />
                </Button>
                {showVendorInfo && (
                  <div className="mt-4 p-4 bg-gray-800 rounded-md shadow-lg">
                    <h3 className="text-neon-blue font-semibold mb-2">
                      Información del Vendedor
                    </h3>
                    <p className="text-white">Nombre: Juan Pérez</p>
                    <p className="text-white">Email: juan@speedunlimited.com</p>
                    <p className="text-white">Teléfono: +1 234 567 8900</p>
                  </div>
                )}
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
