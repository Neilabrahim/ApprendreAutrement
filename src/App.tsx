import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Subjects } from './components/Subjects';
import { AccessibilityControls } from './components/AccessibilityControls';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-4 focus:bg-blue-600 focus:text-white focus:rounded-lg"
      >
        Aller au contenu principal
      </a>
      <AccessibilityControls />
      <Header />
      <main id="main-content" role="main">
        <Hero />
        <Features />
        <Subjects />
      </main>
      <footer role="contentinfo" className="bg-gray-800 text-white py-8 px-4 text-center">
        <p className="text-lg">© 2026 ÉduAccess - Plateforme éducative accessible à tous</p>
      </footer>
    </div>
  );
}