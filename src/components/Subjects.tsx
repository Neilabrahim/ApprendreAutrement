import { Calculator, Globe, Beaker, Book, Music, Palette as PaletteIcon } from 'lucide-react';

const subjects = [
  {
    icon: Calculator,
    title: 'Mathématiques',
    lessons: '45 leçons',
    color: 'bg-blue-500',
    borderColor: 'border-blue-600',
    pattern: 'dots',
    description: 'Mathématiques avec 45 leçons disponibles'
  },
  {
    icon: Book,
    title: 'Français',
    lessons: '52 leçons',
    color: 'bg-green-500',
    borderColor: 'border-green-600',
    pattern: 'lines',
    description: 'Français avec 52 leçons disponibles'
  },
  {
    icon: Globe,
    title: 'Arabe',
    lessons: '48 leçons',
    color: 'bg-orange-500',
    borderColor: 'border-orange-600',
    pattern: 'grid',
    description: 'Arabe avec 48 leçons disponibles'
  },
  {
    icon: Beaker,
    title: 'Sciences',
    lessons: '38 leçons',
    color: 'bg-purple-500',
    borderColor: 'border-purple-600',
    pattern: 'dots',
    description: 'Sciences avec 38 leçons disponibles'
  }
];

export function Subjects() {
  return (
    <section 
      className="py-16 px-4 bg-gray-50" 
      aria-labelledby="subjects-title"
      role="region"
    >
      <div className="max-w-7xl mx-auto">
        <h2 id="subjects-title" className="text-4xl sm:text-5xl text-center text-blue-900 mb-4 tracking-wide">
          Matières disponibles
        </h2>
        <p className="text-xl text-center text-gray-700 mb-12 leading-relaxed max-w-2xl mx-auto">
          Choisis ta matière préférée et commence à apprendre
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {subjects.map((subject, index) => (
            <button
              key={index}
              className={`${subject.color} ${subject.borderColor} border-4 rounded-2xl p-8 text-white text-left hover:shadow-2xl transition-all transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400 relative overflow-hidden`}
              role="listitem"
              aria-label={`Sélectionner ${subject.description}`}
            >
              <div className="relative z-10 space-y-4">
                <div className="bg-white bg-opacity-30 w-16 h-16 rounded-xl flex items-center justify-center backdrop-blur-sm" aria-hidden="true">
                  <subject.icon className="w-8 h-8" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl tracking-wide">
                  {subject.title}
                </h3>
                <p className="text-lg opacity-90">
                  {subject.lessons}
                </p>
              </div>
              
              {/* Pattern overlay for additional visual distinction */}
              <div className="absolute inset-0 opacity-10" aria-hidden="true">
                {subject.pattern === 'dots' && (
                  <div className="w-full h-full" style={{
                    backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
                    backgroundSize: '20px 20px'
                  }} />
                )}
                {subject.pattern === 'lines' && (
                  <div className="w-full h-full" style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, white, white 2px, transparent 2px, transparent 10px)',
                  }} />
                )}
                {subject.pattern === 'grid' && (
                  <div className="w-full h-full" style={{
                    backgroundImage: 'linear-gradient(white 2px, transparent 2px), linear-gradient(90deg, white 2px, transparent 2px)',
                    backgroundSize: '20px 20px'
                  }} />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}