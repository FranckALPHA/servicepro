import React from 'react';
import { Code, Megaphone, Palette, CheckCircle, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Développement Web',
      description: 'Création de sites web sur mesure, e-commerce et applications web performantes avec les dernières technologies.',
      features: ['Sites vitrines', 'Boutiques en ligne', 'Applications web']
    },
    {
      icon: Megaphone,
      title: 'Marketing Digital',
      description: 'Stratégies de marketing digital complètes pour augmenter votre visibilité et générer plus de leads qualifiés.',
      features: ['SEO & référencement', 'Publicité en ligne', 'Réseaux sociaux']
    },
    {
      icon: Palette,
      title: 'Design Graphique',
      description: 'Créations visuelles impactantes pour renforcer votre identité de marque et captiver votre audience.',
      features: ['Logo & branding', 'Supports print', 'Illustrations']
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = element.offsetTop - 80;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre gamme complète de services professionnels conçus pour répondre à tous vos besoins.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-white rounded-xl shadow-md overflow-hidden p-6 hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="service-icon w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto transition-transform duration-300 hover:scale-110">
                <service.icon className="text-purple-600 text-2xl" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle className="text-purple-500 mr-2" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={scrollToContact}
                className="text-purple-600 font-medium hover:text-purple-800 inline-flex items-center"
              >
                En savoir plus <ArrowRight className="ml-2" size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;