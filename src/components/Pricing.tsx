import React, { useState } from 'react';
import { Check, X, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
  const [message, setMessage] = useState('');

  const plans = [
    {
      name: 'Starter',
      description: 'Parfait pour les petites entreprises et startups',
      price: '99€',
      features: [
        { text: 'Site web basique', included: true },
        { text: '5 pages maximum', included: true },
        { text: 'Design responsive', included: true },
        { text: 'Pas de SEO avancé', included: false },
        { text: 'Support limité', included: false }
      ],
      popular: false,
      buttonStyle: 'bg-gray-100 text-gray-800 hover:bg-gray-200'
    },
    {
      name: 'Professionnel',
      description: 'Solution complète pour les entreprises en croissance',
      price: '299€',
      features: [
        { text: 'Site web complet', included: true },
        { text: "Jusqu'à 15 pages", included: true },
        { text: 'SEO de base', included: true },
        { text: 'Formulaire de contact', included: true },
        { text: 'Support prioritaire', included: true }
      ],
      popular: true,
      buttonStyle: 'bg-purple-600 text-white hover:bg-purple-700'
    },
    {
      name: 'Entreprise',
      description: 'Solution premium pour les grandes entreprises',
      price: '599€',
      features: [
        { text: 'Site web sur mesure', included: true },
        { text: 'Pages illimitées', included: true },
        { text: 'SEO avancé', included: true },
        { text: 'Intégration CRM', included: true },
        { text: 'Support 24/7', included: true }
      ],
      popular: false,
      buttonStyle: 'bg-gray-100 text-gray-800 hover:bg-gray-200'
    }
  ];

  const handlePlanSelection = (planName: string) => {
    setMessage(`Vous avez sélectionné le plan "${planName}". Redirection vers la page de paiement...`);
    
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    
    setTimeout(() => setMessage(''), 5000);
  };

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
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos Tarifs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions adaptées à tous les budgets avec une qualité irréprochable.
          </p>
        </div>
        
        {message && (
          <div className="mb-6 p-4 bg-blue-100 text-blue-700 rounded-lg text-center animate-fadeIn">
            {message}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-md overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 ${
                plan.popular ? 'transform scale-105 shadow-lg relative' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Populaire
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">/mois</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={`flex items-center ${!feature.included ? 'text-gray-400' : ''}`}>
                      {feature.included ? (
                        <Check className="text-purple-500 mr-2" size={20} />
                      ) : (
                        <X className="text-gray-400 mr-2" size={20} />
                      )}
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handlePlanSelection(plan.name)}
                  className={`w-full px-4 py-3 rounded-lg font-medium transition duration-300 ${plan.buttonStyle}`}
                >
                  Choisir ce plan
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Vous avez des besoins spécifiques ? Nous proposons également des solutions personnalisées.
          </p>
          <button
            onClick={scrollToContact}
            className="text-purple-600 font-medium hover:text-purple-800 inline-flex items-center"
          >
            Contactez-nous pour un devis personnalisé <ArrowRight className="ml-2" size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;