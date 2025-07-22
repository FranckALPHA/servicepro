import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sophie Martin',
      role: 'Directrice Marketing, EcoTech',
      image: 'https://randomuser.me/api/portraits/women/43.jpg',
      text: 'ServicePro a complètement transformé notre présence en ligne. Notre trafic a augmenté de 300% en seulement 6 mois grâce à leur expertise en SEO et développement web.',
      rating: 5
    },
    {
      name: 'Thomas Leroy',
      role: 'CEO, FoodExpress',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      text: 'Leur équipe a développé une application mobile exceptionnelle pour notre service de livraison. Leur professionnalisme et leur réactivité ont dépassé nos attentes.',
      rating: 5
    },
    {
      name: 'Élodie Dubois',
      role: 'Fondatrice, BelleNature',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      text: 'La refonte de notre identité visuelle par ServicePro a été un tournant pour notre marque. Leur compréhension de notre vision et leur créativité ont donné des résultats spectaculaires.',
      rating: 4.5
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="text-yellow-400 fill-current" size={16} />);
    }
    
    if (hasHalfStar) {
      stars.push(<Star key="half" className="text-yellow-400 fill-current opacity-50" size={16} />);
    }
    
    return stars;
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ce que disent nos clients</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les retours de nos clients satisfaits par nos services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-sm hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-purple-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <div className="flex">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;