import { BookOpen, Menu, LogIn } from 'lucide-react';
import { useState } from 'react';

/**
 * Composant Header
 * 
 * Ce composant affiche l'entête de l'application mobile et bureau.
 * Il contient :
 * - Le logo et le titre de l'application
 * - La navigation principale (liens vers les sections)
 * - Le bouton de connexion
 * - Le menu "burger" pour la version mobile
 * 
 * @returns {JSX.Element} L'élément JSX représentant l'entête.
 */
export function Header() {
  /**
   * État local pour gérer la visibilité du menu mobile.
   * - `false` (par défaut) : le menu est fermé.
   * - `true` : le menu est ouvert.
   */
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white shadow-lg" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <BookOpen className="w-10 h-10" strokeWidth={2.5} aria-hidden="true" />
            <span className="text-2xl tracking-wide">ÉduAccess</span>
          </div>

          <div className="flex items-center gap-4">
            {/* Bouton du menu mobile (visible uniquement sur petit écran) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-3 rounded-lg bg-blue-700 hover:bg-blue-800 transition-colors"
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
              aria-controls="main-navigation"
            >
              <Menu className="w-6 h-6" aria-hidden="true" />
            </button>

            {/* Navigation principale (visible uniquement sur grand écran) */}
            <nav id="main-navigation" className="hidden lg:flex gap-8 items-center" role="navigation" aria-label="Navigation principale">
              <a
                href="#accueil"
                className="px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-4 focus:ring-white"
                aria-label="Aller à la section accueil"
              >
                Accueil
              </a>
              <a
                href="#cours"
                className="px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-4 focus:ring-white"
                aria-label="Aller à la section cours"
              >
                Cours
              </a>
              <a
                href="#ressources"
                className="px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-4 focus:ring-white"
                aria-label="Aller à la section ressources"
              >
                Ressources
              </a>
              <a
                href="#aide"
                className="px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-4 focus:ring-white"
                aria-label="Aller à la section aide"
              >
                Aide
              </a>
              <button
                className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white"
                aria-label="Se connecter à votre compte"
              >
                <LogIn className="w-5 h-5" strokeWidth={2.5} aria-hidden="true" />
                <span>Connexion</span>
              </button>
            </nav>

            <button
              className="hidden max-lg:block lg:hidden px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all focus:outline-none focus:ring-4 focus:ring-white"
              aria-label="Se connecter à votre compte"
            >
              <LogIn className="w-5 h-5" strokeWidth={2.5} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Container du menu mobile (rendu conditionnel) */}
        {menuOpen && (
          <nav className="lg:hidden pb-4 space-y-2" role="navigation" aria-label="Navigation mobile">
            <a
              href="#accueil"
              className="block px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              aria-label="Aller à la section accueil"
            >
              Accueil
            </a>
            <a
              href="#cours"
              className="block px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              aria-label="Aller à la section cours"
            >
              Cours
            </a>
            <a
              href="#ressources"
              className="block px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              aria-label="Aller à la section ressources"
            >
              Ressources
            </a>
            <a
              href="#aide"
              className="block px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              aria-label="Aller à la section aide"
            >
              Aide
            </a>
            <button
              className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300"
              aria-label="Se connecter à votre compte"
            >
              <LogIn className="w-5 h-5" strokeWidth={2.5} aria-hidden="true" />
              <span>Connexion</span>
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}