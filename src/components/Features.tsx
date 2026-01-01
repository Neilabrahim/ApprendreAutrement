import { Volume2, Type, Palette, Clock } from 'lucide-react';

const features = [
  {
    icon: Volume2,
    title: 'Lecture audio',
    description: 'Écoute tous les textes avec la synthèse vocale intégrée.',
    color: 'bg-green-100 text-green-700 border-green-300',
    iconBg: 'bg-green-200',
    ariaLabel: 'Fonctionnalité de lecture audio : Écoute tous les textes avec la synthèse vocale intégrée'
  },
  {
    icon: Type,
    title: 'Police adaptée',
    description: 'Textes avec espacement large et police claire pour faciliter la lecture.',
    color: 'bg-purple-100 text-purple-700 border-purple-300',
    iconBg: 'bg-purple-200',
    ariaLabel: 'Fonctionnalité de police adaptée : Textes avec espacement large et police claire pour faciliter la lecture'
  },
  {
    icon: Palette,
    title: 'Contrastes élevés',
    description: 'Couleurs contrastées adaptées aux daltoniens.',
    color: 'bg-orange-100 text-orange-700 border-orange-300',
    iconBg: 'bg-orange-200',
    ariaLabel: 'Fonctionnalité de contrastes élevés : Couleurs contrastées adaptées aux daltoniens'
  },
  {
    icon: Clock,
    title: 'À ton rythme',
    description: 'Apprends sans stress, avec tout le temps nécessaire.',
    color: 'bg-blue-100 text-blue-700 border-blue-300',
    iconBg: 'bg-blue-200',
    ariaLabel: 'Apprentissage à ton rythme : Apprends sans stress, avec tout le temps nécessaire'
  }
];

export function Features() {
  return (
    <section 
      className="py-16 px-4 bg-white" 
      aria-labelledby="features-title"
      role="region"
    >
      <div className="max-w-7xl mx-auto">
        <h2 id="features-title" className="text-4xl sm:text-5xl text-center text-blue-900 mb-12 tracking-wide">
          Fonctionnalités accessibles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.color} border-4 rounded-2xl p-8 space-y-4 hover:shadow-xl transition-all transform hover:scale-105`}
              role="listitem"
              aria-label={feature.ariaLabel}
            >
              <div className={`${feature.iconBg} w-16 h-16 rounded-xl flex items-center justify-center`} aria-hidden="true">
                <feature.icon className="w-8 h-8" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl tracking-wide">
                {feature.title}
              </h3>
              <p className="text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}