import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = element.offsetTop - 80;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Solutions professionnelles pour votre entreprise
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Nous offrons des services de qualité pour répondre à tous vos besoins professionnels. 
              Faites passer votre entreprise au niveau supérieur.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold text-lg text-center transition duration-300"
              >
                Demander un devis
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-6 py-3 rounded-lg font-semibold text-lg text-center transition duration-300"
              >
                Nos services
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Services professionnels"
              className="rounded-xl shadow-2xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .hero-bg {
          background: linear-gradient(135deg, #6b21a8 0%, #9333ea 50%, #4f46e5 100%);
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;