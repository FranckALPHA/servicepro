import React from 'react';
import { Users, Trophy } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Notre équipe"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">À propos de nous</h2>
            <p className="text-lg text-gray-600 mb-6">
              ServicePro est une agence de services professionnels fondée en 2015 avec pour mission d'accompagner 
              les entreprises dans leur transformation digitale et leur croissance.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Notre philosophie</h3>
              <p className="text-gray-600 mb-4">
                Nous croyons en des solutions sur mesure, adaptées aux besoins spécifiques de chaque client. 
                Notre approche collaborative nous permet de comprendre en profondeur vos objectifs pour vous 
                proposer les meilleures solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <Users className="text-purple-600" size={20} />
                  </div>
                  <h4 className="font-semibold text-gray-900">Notre équipe</h4>
                </div>
                <p className="text-gray-600 text-sm">15 experts passionnés dans leurs domaines respectifs.</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <Trophy className="text-purple-600" size={20} />
                  </div>
                  <h4 className="font-semibold text-gray-900">Nos réalisations</h4>
                </div>
                <p className="text-gray-600 text-sm">Plus de 200 projets réussis depuis notre création.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;