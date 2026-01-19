
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      url: "https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&q=80&w=1080",
      label: "Premium Furry Art",
      tag: "Character Design"
    },
    {
      url: "https://images.unsplash.com/photo-1635322966219-b75ed372eb3c?auto=format&fit=crop&q=80&w=1080",
      label: "Vibrant Illustrations",
      tag: "Digital Painting"
    },
    {
      url: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=1080",
      label: "Dynamic Comic Art",
      tag: "Storytelling"
    },
    {
      url: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=1080",
      label: "Custom Animations",
      tag: "2D Motion"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const featuredWork = [
    { icon: 'fa-paw', title: 'Furry Art', desc: 'Expressive character art', color: 'bg-pink-50 dark:bg-pink-900/20 text-primary-500', borderColor: 'group-hover:border-primary-300' },
    { icon: 'fa-clapperboard', title: 'Animations', desc: 'Smooth, engaging motion', color: 'bg-purple-50 dark:bg-purple-900/20 text-accent', borderColor: 'group-hover:border-accent' },
    { icon: 'fa-book-open', title: 'Comic Art', desc: 'Sequential storytelling', color: 'bg-blue-50 dark:bg-blue-900/20 text-blue-500', borderColor: 'group-hover:border-blue-300' },
    { icon: 'fa-tv', title: 'Streaming', desc: 'Emotes and overlays', color: 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-500', borderColor: 'group-hover:border-indigo-300' },
    { icon: 'fa-image', title: 'Illustrations', desc: 'Custom digital works', color: 'bg-green-50 dark:bg-green-900/20 text-green-500', borderColor: 'group-hover:border-green-300' }
  ];

  return (
    <div className="overflow-hidden bg-background dark:bg-slate-950 transition-colors">
      {/* Hero Section */}
      <section className="relative pt-6 lg:pt-20 pb-12 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left order-2 lg:order-1 mt-8 lg:mt-0">
              <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-pink-100 dark:border-slate-800 rounded-full px-4 py-1.5 mb-6 shadow-sm">
                <span className="text-primary-500 animate-pulse text-xs">❤</span>
                <span className="text-[10px] lg:text-xs font-black text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                  Inclusive • Safe Space • 🏳️‍🌈
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[5.5rem] font-black leading-[1.1] mb-6 text-gray-900 dark:text-white tracking-tighter">
                Premium Art <br className="hidden sm:block" /> For Your <span className="text-primary-500 italic relative">
                  Fursona
                  <svg className="absolute -bottom-2 lg:-bottom-4 left-0 w-full h-3 text-pink-300/30 dark:text-pink-900/30 -z-10" preserveAspectRatio="none" viewBox="0 0 100 10">
                    <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path>
                  </svg>
                </span>
              </h1>

              <p className="text-base lg:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-bold">
                Bringing your characters to life with vibrant, high-quality illustrations in a welcoming space. 🐾✨
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-10 w-full sm:w-auto">
                <Link to="/services" className="w-full sm:w-auto bg-primary-500 hover:bg-primary-600 text-white text-lg font-black py-4 px-10 rounded-2xl shadow-xl shadow-pink-500/20 transition-all active:scale-95 text-center uppercase tracking-widest">
                  Start Project 🐾
                </Link>
                <Link to="/portfolio" className="w-full sm:w-auto bg-white dark:bg-slate-900 border-2 border-primary-500 text-primary-500 dark:text-primary-400 hover:bg-pink-50 dark:hover:bg-slate-800 text-lg font-black py-4 px-10 rounded-2xl transition-all active:scale-95 text-center uppercase tracking-widest">
                  Gallery
                </Link>
              </div>

              {/* Status Indicator */}
              <div className="inline-flex items-center gap-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-2.5 pr-6 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-800">
                <div className="relative">
                  <img src="https://picsum.photos/seed/archie/80/80" alt="Lead Artist" className="w-10 lg:w-12 h-10 lg:h-12 rounded-xl object-cover" />
                  <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full animate-pulse"></div>
                </div>
                <div className="text-left">
                  <p className="text-[8px] text-gray-400 font-black uppercase tracking-widest">Lead Artist</p>
                  <p className="text-sm font-black text-gray-800 dark:text-white">Slots <span className="text-green-500">Available!</span></p>
                </div>
              </div>
            </div>

            {/* Right Slider Content */}
            <div className="w-full lg:flex-1 order-1 lg:order-2">
              <div className="relative w-full max-w-sm mx-auto lg:max-w-lg">
                <div className="relative p-2 lg:p-4 bg-white dark:bg-slate-900 rounded-[2.5rem] lg:rounded-[4rem] shadow-2xl border-4 border-white dark:border-slate-800">
                  <div className="aspect-square lg:aspect-[4/5] rounded-[2rem] lg:rounded-[3.5rem] overflow-hidden relative bg-slate-100 dark:bg-slate-800">
                    {heroSlides.map((slide, index) => (
                      <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                      >
                        <img src={slide.url} alt={slide.label} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      </div>
                    ))}
                    
                    {/* Navigation Buttons - Always accessible on mobile */}
                    <button onClick={prevSlide} className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/30 backdrop-blur-md text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/50 transition-colors">
                      <i className="fa-solid fa-chevron-left text-xs"></i>
                    </button>
                    <button onClick={nextSlide} className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/30 backdrop-blur-md text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/50 transition-colors">
                      <i className="fa-solid fa-chevron-right text-xs"></i>
                    </button>

                    {/* Pagination Dots */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
                      {heroSlides.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentSlide ? 'bg-primary-500 w-8' : 'bg-white/50'}`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Grid */}
      <section className="py-16 lg:py-24 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tighter uppercase">Featured Categories</h2>
            <div className="w-12 h-1 bg-primary-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {featuredWork.map((work, idx) => (
              <Link 
                key={idx} 
                to="/portfolio" 
                className={`group bg-white dark:bg-slate-800 p-6 lg:p-8 rounded-[2rem] text-center transition-all duration-300 hover:shadow-xl border-2 border-transparent ${work.borderColor} active:scale-95`}
              >
                <div className={`w-14 lg:w-20 h-14 lg:h-20 ${work.color} rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 text-2xl lg:text-3xl transition-transform group-hover:scale-110`}>
                  <i className={`fa-solid ${work.icon}`}></i>
                </div>
                <h3 className="text-lg lg:text-xl font-black text-gray-900 dark:text-white mb-2 uppercase tracking-tight">{work.title}</h3>
                <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 font-bold leading-relaxed">{work.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-20 lg:py-32 bg-slate-50 dark:bg-slate-900/50 backdrop-blur-3xl border-y border-pink-50 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tighter uppercase">Our Creative Promise</h2>
            <p className="text-gray-500 dark:text-gray-400 font-bold max-w-xl mx-auto text-sm lg:text-lg">Excellence, inclusion, and the pure joy of creation. 🐾✨</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { icon: 'fa-shield-heart', color: 'text-primary-500', title: 'Safe Space', desc: 'Inclusive sanctuary for all identities. 🏳️‍🌈', blob: 'bg-pink-100 dark:bg-pink-900/30' },
              { icon: 'fa-bolt-lightning', color: 'text-purple-500', title: 'Fast Turnaround', desc: 'Sketches in under 24 hours. ⚡', blob: 'bg-purple-100 dark:bg-purple-900/30' },
              { icon: 'fa-wand-magic-sparkles', color: 'text-blue-500', title: 'Museum Grade', desc: '300 DPI high-res masterpieces. 🎨', blob: 'bg-blue-100 dark:bg-blue-900/30' },
              { icon: 'fa-ranking-star', color: 'text-yellow-500', title: 'Trusted', desc: 'Over 500+ happy commissioners. ⭐', blob: 'bg-yellow-100 dark:bg-yellow-900/30' },
            ].map((feature, idx) => (
              <div 
                key={idx} 
                className="group relative bg-white dark:bg-slate-800 p-8 lg:p-10 rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center border border-transparent hover:border-pink-50 active:scale-98"
              >
                <div className="relative mb-6">
                  <div className={`absolute inset-0 ${feature.blob} mask-blob transform group-hover:rotate-[20deg] transition-transform duration-1000 opacity-60`}></div>
                  <div className="relative w-16 lg:w-20 h-16 lg:h-20 flex items-center justify-center text-3xl z-10">
                    <i className={`fa-solid ${feature.icon} ${feature.color}`}></i>
                  </div>
                </div>
                <h3 className="text-lg lg:text-xl font-black text-gray-900 dark:text-white mb-3 tracking-tight uppercase">{feature.title}</h3>
                <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 font-bold leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Testimonials */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-3xl lg:text-5xl font-black mb-12 uppercase tracking-tighter text-gray-900 dark:text-white">What Clients Say</h2>
          <div className="flex flex-col md:flex-row gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-[2rem] border border-gray-100 dark:border-slate-800 flex-1 hover:border-pink-200 transition-colors">
                <div className="flex gap-1 mb-4 text-yellow-400 text-xs">
                  {[...Array(5)].map((_, s) => <i key={s} className="fa-solid fa-star"></i>)}
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic mb-6 font-medium text-sm lg:text-base">"The attention to detail is unmatched. Archie has a way of capturing exactly what's in my head!"</p>
                <div className="flex items-center gap-4">
                  <img src={`https://picsum.photos/seed/u${i}/80/80`} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-700" alt="Avatar" />
                  <div>
                    <p className="font-black text-gray-900 dark:text-white text-sm">Happy Client {i}</p>
                    <p className="text-[10px] text-gray-400 uppercase font-black">Commissioned Art</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
