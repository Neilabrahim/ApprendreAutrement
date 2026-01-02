import { Play, BookMarked } from 'lucide-react';

/**
 * Composant Hero
 * 
 * Affiche la bannière principale (section "au-dessus de la ligne de flottaison").
 * Contient :
 * - Le titre principal accrocheur
 * - Une sous-titre explicatif
 * - Des boutons d'appel à l'action (Call-to-Action)
 * 
 * @returns {JSX.Element} La section Hero.
 */
export function Hero() {
  return (
    <section
      className="bg-gradient-to-b from-blue-50 to-white py-16 px-4"
      aria-labelledby="hero-title"
      role="region"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-8">
          {/* Titre principal avec taille de police adaptative */}
          <h1 id="hero-title" className="text-5xl sm:text-6xl lg:text-7xl text-blue-900 tracking-wide max-w-4xl mx-auto leading-tight">
            Apprendre à ton rythme
          </h1>

          <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4">
            Une plateforme éducative conçue pour tous les élèves,
            avec des outils adaptés à tes besoins.
          </p>

          {/* Boutons d'action principaux */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6">
            <button
              className="flex items-center gap-3 px-8 py-5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-lg"
              aria-label="Commencer votre apprentissage maintenant"
            >
              <Play className="w-6 h-6" fill="white" aria-hidden="true" />
              <span className="text-xl">Commencer</span>
            </button>

            <button
              className="flex items-center gap-3 px-8 py-5 bg-white text-blue-600 border-4 border-blue-600 rounded-xl hover:bg-blue-50 transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-lg"
              aria-label="Explorer toutes les matières disponibles"
            >
              <BookMarked className="w-6 h-6" strokeWidth={2.5} aria-hidden="true" />
              <span className="text-xl">Explorer</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}