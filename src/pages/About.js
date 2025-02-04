import React from 'react';
import { useLanguage } from '../context/LanguageContext';

function About() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">{t.about.title}</h1>
      
      {/* Hikaye Bölümü */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">{t.about.sections.story.title}</h2>
          <p className="text-lg leading-relaxed">{t.about.sections.story.content}</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-primary">{t.about.sections.mission.title}</h2>
          <p className="text-lg leading-relaxed">{t.about.sections.mission.content}</p>
        </div>
      </div>

      {/* Değerlerimiz */}
      <div className="bg-black/50 p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">{t.about.sections.values.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.about.sections.values.items.map((item, index) => (
            <div key={index} className="text-center space-y-3">
              <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Ustamızın Sözü */}
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-semibold text-primary">{t.about.sections.quote.title}</h2>
        <blockquote className="text-xl italic">
          "{t.about.sections.quote.content}"
        </blockquote>
        <p className="font-['Great_Vibes'] text-2xl text-primary">- İsmail Usta</p>
      </div>
    </div>
  );
}

export default About; 