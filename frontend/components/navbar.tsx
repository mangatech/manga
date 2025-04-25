"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import logoManga from "@/public/logo-manga.png"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img src={logoManga.src} alt="Logo" className="h-10 w-10 mr-2 rounded-md" />
              <span className="text-xl font-bold text-gray-900">MangaTech</span>
            </Link>

            <nav className="hidden md:ml-10 md:flex md:space-x-8">
              <Link href="#" className="text-gray-600 hover:text-orange-500">
                Serviços
              </Link>
              <Link href="#" className="text-gray-600 hover:text-orange-500">
                Preços
              </Link>
              <Link href="#" className="text-gray-600 hover:text-orange-500">
                Recursos
              </Link>
              <Link href="#" className="text-gray-600 hover:text-orange-500">
                Clientes
              </Link>
              <Link href="#" className="text-gray-600 hover:text-orange-500">
                Blog
              </Link>
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="#" className="text-gray-600 hover:text-orange-500">
              Entrar
            </Link>
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
              Começar grátis
            </Button>
          </div>

          <div className="md:hidden">
            <button type="button" className="text-gray-600 hover:text-gray-900" onClick={toggleMenu}>
              <span className="sr-only">Abrir menu</span>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Serviços
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Preços
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Recursos
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Clientes
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <Link
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                onClick={toggleMenu}
              >
                Entrar
              </Link>
              <div className="mt-3 px-3">
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                  Começar grátis
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
