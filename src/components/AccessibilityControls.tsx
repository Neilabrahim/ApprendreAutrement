import { useState } from 'react';
import { Settings, ZoomIn, ZoomOut, Volume2, Languages } from 'lucide-react';

export function AccessibilityControls() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [announcement, setAnnouncement] = useState('');
  const [speechLanguage, setSpeechLanguage] = useState<'fr-FR' | 'ar-SA'>('fr-FR');

  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 10, 150);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
    setAnnouncement(`Taille du texte augmentée à ${newSize} pourcent`);
  };

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 10, 80);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
    setAnnouncement(`Taille du texte réduite à ${newSize} pourcent`);
  };

  const contentTexts = {
    'fr-FR': "Bienvenue sur ÉduAccess, ta plateforme d'apprentissage accessible. Tu peux étudier les mathématiques, le français, l'arabe et les sciences. La plateforme offre une lecture audio, une police adaptée, des contrastes élevés et un apprentissage à ton rythme.",
    'ar-SA': "مرحباً بك في إيديو أكسس، منصتك التعليمية الميسرة. يمكنك دراسة الرياضيات، الفرنسية، العربية والعلوم. توفر المنصة قراءة صوتية، خط مناسب، تباينات عالية وتعلم بالسرعة التي تناسبك."
  };

  const speakText = (text: string, lang: 'fr-FR' | 'ar-SA') => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Arrêter toute lecture en cours
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
      setAnnouncement(`Lecture audio démarrée en ${lang === 'fr-FR' ? 'français' : 'arabe'}`);
    } else {
      setAnnouncement('La synthèse vocale n\'est pas disponible sur ce navigateur');
    }
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setAnnouncement(isOpen ? 'Panneau d\'accessibilité fermé' : 'Panneau d\'accessibilité ouvert');
  };

  const handleLanguageChange = (lang: 'fr-FR' | 'ar-SA') => {
    setSpeechLanguage(lang);
    setAnnouncement(`Langue de lecture changée en ${lang === 'fr-FR' ? 'français' : 'arabe'}`);
  };

  return (
    <div className="fixed top-24 right-4 z-50" role="complementary" aria-label="Contrôles d'accessibilité">
      {/* Annonces pour les lecteurs d'écran */}
      <div 
        role="status" 
        aria-live="polite" 
        aria-atomic="true" 
        className="sr-only"
      >
        {announcement}
      </div>

      <button
        onClick={handleToggle}
        className="bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
        aria-label="Ouvrir les paramètres d'accessibilité"
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <Settings className="w-7 h-7" strokeWidth={2.5} aria-hidden="true" />
      </button>

      {isOpen && (
        <div 
          id="accessibility-panel"
          className="mt-4 bg-white border-4 border-blue-600 rounded-2xl shadow-2xl p-6 space-y-4 w-80"
          role="dialog"
          aria-labelledby="accessibility-title"
        >
          <h3 id="accessibility-title" className="text-xl text-blue-900 mb-4 tracking-wide">
            Accessibilité
          </h3>

          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="font-size-control" className="block text-lg text-gray-700">
                Taille du texte
              </label>
              <div className="flex items-center gap-3" id="font-size-control" role="group" aria-label="Contrôle de la taille du texte">
                <button
                  onClick={decreaseFontSize}
                  className="p-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300"
                  aria-label={`Diminuer la taille du texte. Taille actuelle ${fontSize} pourcent`}
                  disabled={fontSize <= 80}
                >
                  <ZoomOut className="w-5 h-5" strokeWidth={2.5} aria-hidden="true" />
                </button>
                <span className="flex-1 text-center text-lg" aria-live="polite">{fontSize}%</span>
                <button
                  onClick={increaseFontSize}
                  className="p-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300"
                  aria-label={`Augmenter la taille du texte. Taille actuelle ${fontSize} pourcent`}
                  disabled={fontSize >= 150}
                >
                  <ZoomIn className="w-5 h-5" strokeWidth={2.5} aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="speech-language" className="block text-lg text-gray-700">
                <Languages className="w-5 h-5 inline mr-2" aria-hidden="true" />
                Langue de lecture
              </label>
              <div className="flex gap-2" role="group" aria-label="Sélection de la langue">
                <button
                  onClick={() => handleLanguageChange('fr-FR')}
                  className={`flex-1 px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300 ${
                    speechLanguage === 'fr-FR' 
                      ? 'bg-blue-600 text-white border-blue-600' 
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                  aria-label="Sélectionner le français comme langue de lecture"
                  aria-pressed={speechLanguage === 'fr-FR'}
                >
                  Français
                </button>
                <button
                  onClick={() => handleLanguageChange('ar-SA')}
                  className={`flex-1 px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300 ${
                    speechLanguage === 'ar-SA' 
                      ? 'bg-blue-600 text-white border-blue-600' 
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                  aria-label="Sélectionner l'arabe comme langue de lecture"
                  aria-pressed={speechLanguage === 'ar-SA'}
                >
                  العربية
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="audio-reading" className="block text-lg text-gray-700">
                Lecture audio
              </label>
              <button
                id="audio-reading"
                onClick={() => speakText(contentTexts[speechLanguage], speechLanguage)}
                className="w-full flex items-center justify-center gap-3 px-5 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors focus:outline-none focus:ring-4 focus:ring-green-300"
                aria-label={`Activer la lecture audio de la page d'accueil en ${speechLanguage === 'fr-FR' ? 'français' : 'arabe'}`}
              >
                <Volume2 className="w-5 h-5" strokeWidth={2.5} aria-hidden="true" />
                <span className="text-lg">
                  {speechLanguage === 'fr-FR' ? 'Écouter la page' : 'استماع للصفحة'}
                </span>
              </button>
            </div>

            <div className="pt-4 border-t-2 border-gray-200">
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong>Navigation au clavier :</strong> Utilisez Tab pour naviguer, Entrée pour activer, Échap pour fermer.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}