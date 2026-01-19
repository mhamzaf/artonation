
import React, { useState } from 'react';

const Portfolio: React.FC = () => {
  const categories = ['All', 'Furry art', 'Anime art', 'Animation', 'Fur suit', 'Comic Art', 'Twitch A&M'];
  const [activeTab, setActiveTab] = useState('All');

  const galleryItems = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    title: `Art Piece ${i + 1}`,
    category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
    img: `https://picsum.photos/seed/art${i}/600/600`
  }));

  const filteredItems = activeTab === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <div className="py-20 bg-background dark:bg-slate-950 min-h-screen transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 dark:text-white">Our Portfolio</h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto font-medium text-lg">
            Explore a selection of our favorite commissions and personal projects.
          </p>
        </header>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-8 py-3 rounded-full font-bold transition-all ${
                activeTab === cat
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-white dark:bg-slate-800 text-gray-500 dark:text-gray-400 hover:text-primary-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="group relative bg-white dark:bg-slate-900 p-3 rounded-4xl shadow-lg overflow-hidden hover:-translate-y-2 transition-all duration-300 border border-pink-50 dark:border-slate-800"
            >
              <div className="aspect-square rounded-[2rem] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-sm text-gray-400 font-medium">{item.category}</p>
                </div>
                <button className="w-10 h-10 rounded-full bg-pink-50 dark:bg-slate-800 text-primary-500 flex items-center justify-center hover:bg-primary-500 hover:text-white transition-colors">
                  <i className="fa-solid fa-eye"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-400 dark:text-gray-500 font-medium mb-8 italic">Want something similar for yourself?</p>
          <a
            href="#/services"
            className="inline-block bg-primary-500 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-primary-600 transition-all hover:scale-105"
          >
            Start Your Commission
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
