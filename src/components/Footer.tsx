import React from 'react';
import { Settings, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const services = [
    'Développement Web',
    'Marketing Digital',
    'Design Graphique',
    'Stratégie SEO',
    'Applications Mobiles'
  ];

  const company = [
    'À propos',
    'Notre équipe',
    'Carrières',
    'Blog',
    'Presse'
  ];

  const legal = [
    'Mentions légales',
    'Politique de confidentialité',
    'Conditions générales',
    'Politique de cookies',
    'Contact'
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Settings className="text-purple-400 text-2xl mr-2" />
              <span className="text-xl font-bold">ServicePro</span>
            </div>
            <p className="text-gray-400 mb-4">
              Solutions professionnelles pour votre entreprise. Nous vous accompagnons dans votre transformation digitale.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Légal</h4>
            <ul className="space-y-2">
              {legal.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© 2023 ServicePro. Tous droits réservés.</p>
          <div className="flex space-x-6">
            {['Mentions légales', 'Politique de confidentialité', 'Conditions générales'].map((item, index) => (
              <a key={index} href="#" className="text-gray-400 hover:text-white transition duration-300">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;