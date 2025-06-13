import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 via-yellow-300 to-amber-600 flex items-center justify-center">
                <span className="text-black font-bold text-lg">10°</span>
              </div>
              <h1 className="text-2xl font-light tracking-wider">
                10<span className="text-amber-400">°</span> North
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#collection" className="hover:text-amber-400 transition-colors duration-300">Collection</a>
              <a href="#heritage" className="hover:text-amber-400 transition-colors duration-300">Heritage</a>
              <a href="#craft" className="hover:text-amber-400 transition-colors duration-300">Craft</a>
              <a href="#contact" className="hover:text-amber-400 transition-colors duration-300">Contact</a>
            </div>
            <button className="bg-gradient-to-r from-amber-400 to-yellow-300 text-black px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-amber-400/25 transition-all duration-300 transform hover:scale-105">
              Discover
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-[10s] ease-out"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1610245169254-1cfd8bd165bf')`
          }}
        ></div>
        
        <div className="relative z-20 text-center max-w-6xl mx-auto px-6">
          <div className="backdrop-blur-sm bg-black/20 rounded-3xl p-12 border border-white/10">
            <h1 className="text-6xl md:text-8xl font-light mb-6 tracking-wider">
              <span className="bg-gradient-to-r from-white via-amber-200 to-amber-400 bg-clip-text text-transparent">
                Discover
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-light mb-8 text-amber-100">
              The Essence of 10<span className="text-amber-400">°</span> North
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Where luxury meets precision. Each fragrance crafted at the intersection of art and science, 
              capturing the mystique of northern latitudes.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group relative bg-gradient-to-r from-amber-400 to-yellow-300 text-black px-12 py-4 rounded-full text-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-amber-400/30 transform hover:scale-105">
                <span className="relative z-10">Explore Collection</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="border-2 border-white/30 text-white px-12 py-4 rounded-full text-lg font-light hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm">
                Watch Story
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Brand Heritage Section */}
      <section id="heritage" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">Heritage</span>
                <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-transparent mt-2"></div>
              </div>
              <h2 className="text-5xl md:text-6xl font-light leading-tight">
                Crafted in the 
                <span className="block text-amber-400">Northern Spirit</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Born from the pristine landscapes of the 10th parallel north, our fragrances capture 
                the essence of untouched wilderness and refined elegance. Each bottle tells a story 
                of meticulous craftsmanship and uncompromising quality.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h3 className="text-3xl font-light text-amber-400">1947</h3>
                  <p className="text-gray-400">Year Founded</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-light text-amber-400">75+</h3>
                  <p className="text-gray-400">Master Perfumers</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/20 to-transparent rounded-3xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1558369228-3cc48a8c391f" 
                alt="Premium ingredients"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-400 to-yellow-300 rounded-full blur-xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Collection */}
      <section id="collection" className="py-24 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">Collection</span>
            <h2 className="text-5xl md:text-6xl font-light mt-4 mb-8">Signature Fragrances</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Three distinct expressions of luxury, each capturing a unique facet of the northern mystique.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Aurora",
                description: "Fresh • Mysterious • Captivating",
                price: "$285",
                image: "https://images.unsplash.com/photo-1704118548916-1370403fb1e5"
              },
              {
                name: "Solstice",
                description: "Warm • Sophisticated • Timeless",
                price: "$320",
                image: "https://images.unsplash.com/photo-1704118548809-c2b50386cd7f"
              },
              {
                name: "Midnight",
                description: "Deep • Sensual • Alluring",
                price: "$350",
                image: "https://images.pexels.com/photos/5537950/pexels-photo-5537950.jpeg"
              }
            ].map((product, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-white/10 hover:border-amber-400/50 transition-all duration-500">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-light mb-3 group-hover:text-amber-400 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-gray-400 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-light text-amber-400">{product.price}</span>
                      <button className="bg-white/10 hover:bg-amber-400 hover:text-black text-white px-6 py-2 rounded-full transition-all duration-300 backdrop-blur-sm">
                        Discover
                      </button>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-400/0 via-transparent to-amber-400/0 group-hover:from-amber-400/10 group-hover:to-amber-400/5 transition-all duration-500 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section id="craft" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src="https://images.pexels.com/photos/6037582/pexels-photo-6037582.jpeg" 
                alt="Craftsmanship"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-amber-400 to-yellow-300 rounded-full blur-xl opacity-20"></div>
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <div className="inline-block">
                <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">Craftsmanship</span>
                <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-transparent mt-2"></div>
              </div>
              <h2 className="text-5xl md:text-6xl font-light leading-tight">
                Precision in 
                <span className="block text-amber-400">Every Drop</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                Our master perfumers blend tradition with innovation, using only the finest ingredients 
                sourced from around the world. Each fragrance undergoes months of careful development, 
                ensuring a scent that evolves beautifully throughout the day.
              </p>
              <div className="space-y-4">
                {[
                  "Hand-selected rare ingredients",
                  "Traditional French distillation methods",
                  "Minimum 6-month aging process",
                  "Limited edition releases"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1704118549325-81cad2f39ab7')`
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">Testimonials</span>
            <h2 className="text-5xl md:text-6xl font-light mt-4 mb-8">What They Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Isabella Chen",
                role: "Fashion Editor",
                testimonial: "10° North has redefined luxury fragrance for me. The Aurora scent is simply mesmerizing.",
                rating: 5
              },
              {
                name: "Marcus Thompson",
                role: "Art Director",
                testimonial: "Solstice is my signature scent. The craftsmanship and attention to detail is unparalleled.",
                rating: 5
              },
              {
                name: "Elena Rodriguez",
                role: "Interior Designer",
                testimonial: "Midnight captures elegance in a bottle. It's become an essential part of my evening ritual.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-amber-400/30 transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.testimonial}"</p>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-amber-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusive Offer CTA */}
      <section className="py-24 bg-gradient-to-r from-amber-400/10 via-yellow-300/5 to-amber-400/10">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <div className="backdrop-blur-sm bg-black/30 rounded-3xl p-12 border border-amber-400/20">
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Exclusive Launch Collection
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Be among the first to experience our limited-edition launch collection. 
              Only 500 sets available worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <button className="group relative bg-gradient-to-r from-amber-400 to-yellow-300 text-black px-12 py-4 rounded-full text-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-amber-400/30 transform hover:scale-105">
                <span className="relative z-10">Reserve Now - $850</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
            <p className="text-sm text-gray-400">Free worldwide shipping • 30-day return guarantee</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 via-yellow-300 to-amber-600 flex items-center justify-center">
                  <span className="text-black font-bold text-sm">10°</span>
                </div>
                <h3 className="text-xl font-light">10<span className="text-amber-400">°</span> North</h3>
              </div>
              <p className="text-gray-400">
                Luxury fragrances crafted with precision and passion.
              </p>
              <div className="flex space-x-4">
                {['facebook', 'instagram', 'twitter'].map((social) => (
                  <div key={social} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-400/20 transition-colors duration-300 cursor-pointer">
                    <div className="w-5 h-5 bg-white/70 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-amber-400">Collection</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-300">Aurora</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Solstice</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Midnight</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Limited Editions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-amber-400">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Heritage</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Craftsmanship</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-amber-400">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>1-800-10-NORTH</li>
                <li>hello@10degnorth.com</li>
                <li>New York • Paris • Tokyo</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 10° North. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Shipping Info</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;