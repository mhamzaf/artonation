
import React from 'react';

interface ServiceItemProps {
  icon: string;
  title: string;
  description: string;
  turnaround: string;
  price: string;
  includes: string[];
  process: string[];
}

const ServiceCard: React.FC<ServiceItemProps> = ({ icon, title, description, turnaround, price, includes, process }) => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-5xl shadow-xl border border-pink-50 dark:border-slate-800 overflow-hidden flex flex-col h-full hover:shadow-2xl transition-all duration-300">
      <div className="p-8 lg:p-10 flex-grow">
        <div className="w-16 h-16 rounded-3xl bg-pink-50 dark:bg-slate-800 text-primary-500 flex items-center justify-center mb-6 text-3xl">
          <i className={`fa-solid ${icon}`}></i>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400 font-medium mb-8 leading-relaxed">
          {description}
        </p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-pink-50/50 dark:bg-slate-800/50 p-4 rounded-2xl">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Turnaround</p>
            <p className="text-sm font-bold text-gray-800 dark:text-gray-200">{turnaround}</p>
          </div>
          <div className="bg-purple-50/50 dark:bg-slate-800/50 p-4 rounded-2xl">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Starting Price</p>
            <p className="text-sm font-bold text-primary-600 dark:text-primary-400">{price}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-4">What's Included</h4>
            <ul className="space-y-3">
              {includes.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm font-semibold text-gray-600 dark:text-gray-400">
                  <i className="fa-solid fa-circle-check text-green-500 mt-1"></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-4">Our Process</h4>
            <div className="space-y-3">
              {process.map((step, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-gray-400 text-[10px] font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-8 bg-gray-50 dark:bg-slate-950 border-t border-pink-50 dark:border-slate-800">
        <button className="w-full py-4 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-2xl shadow-lg shadow-pink-500/20 transition-all hover:scale-[1.02] active:scale-95">
          Request Quote
        </button>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const servicesData: ServiceItemProps[] = [
    {
      icon: 'fa-paw',
      title: 'Furry Art Commissions',
      description: 'Custom character designs featuring your OC (Original Character) with expressive poses and professional quality.',
      turnaround: '2-4 weeks',
      price: 'Contact for quote',
      includes: ['Character concept sketches', 'Unlimited revisions', 'High-resolution file', 'Commercial usage rights'],
      process: ['Consultation & brief', 'Concept sketches', 'Design approval', 'Final artwork', 'Delivery & support']
    },
    {
      icon: 'fa-book-open',
      title: 'Comic Panel Creation',
      description: 'Dynamic comic panels and manga-style illustrations perfect for storytelling and sequential art projects.',
      turnaround: '3-6 weeks',
      price: 'Contact for quote',
      includes: ['Panel layout design', 'Character interactions', 'Background art', 'Color or B&W options'],
      process: ['Story review', 'Layout planning', 'Rough sketches', 'Line art & inking', 'Coloring & polish']
    },
    {
      icon: 'fa-clapperboard',
      title: 'Custom Animations',
      description: 'Smooth, engaging 2D animations and motion graphics for characters, logos, and promotional content.',
      turnaround: '4-8 weeks',
      price: 'Contact for quote',
      includes: ['Character rigging', 'Walk cycles & actions', 'Special effects', 'Sound integration ready'],
      process: ['Animation brief', 'Storyboarding', 'Character rigging', 'Animation blocking', 'Final polish & delivery']
    },
    {
      icon: 'fa-image',
      title: 'Digital Illustrations',
      description: 'Versatile digital artwork for any project—book covers, posters, merchandise, and more.',
      turnaround: '1-3 weeks',
      price: 'Contact for quote',
      includes: ['Concept development', 'Multiple style options', 'High-res files', 'Revision rounds'],
      process: ['Project briefing', 'Sketch concepts', 'Feedback & refinement', 'Final illustration', 'File delivery']
    },
    {
      icon: 'fa-wand-magic-sparkles',
      title: 'Custom Character Design',
      description: 'Complete character development from concept to final design sheets with personality and unique style.',
      turnaround: '2-5 weeks',
      price: 'Contact for quote',
      includes: ['Multiple design variations', 'Full character sheets', 'Outfit options', 'Design documentation'],
      process: ['Character concept discussion', 'Design sketches', 'Design refinement', 'Final character sheets', 'Delivery & usage guide']
    },
    {
      icon: 'fa-lightbulb',
      title: 'Consulting & Art Direction',
      description: 'Expert guidance on art projects, creative vision development, and project management.',
      turnaround: 'Hourly/Project',
      price: 'Contact for quote',
      includes: ['One-on-one consultation', 'Project planning', 'Creative feedback', 'Direction & guidance'],
      process: ['Initial consultation call', 'Project assessment', 'Creative planning', 'Ongoing support', 'Project completion']
    },
    {
      icon: 'fa-tv',
      title: 'Twitch Affiliate Art Package',
      description: 'Custom-designed Twitch branding including overlays, alerts, emotes, banners, transitions, and complete Twitch Affiliate visual identity.',
      turnaround: '2-4 weeks',
      price: 'Contact for quote',
      includes: ['Channel overlays & panels', 'Custom emotes (5-10)', 'Stream alerts & notifications', 'Brand identity guidelines'],
      process: ['Stream style consultation', 'Brand concept development', 'Asset design & creation', 'Testing & refinement', 'Final delivery & setup guide']
    }
  ];

  return (
    <div className="bg-background dark:bg-slate-950 min-h-screen pb-32 transition-colors">
      {/* Hero Header */}
      <section className="pt-20 pb-24 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-white dark:bg-slate-900 text-primary-500 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest mb-6 shadow-sm border border-pink-50 dark:border-slate-800">
            Professional Creative Studio
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-gray-900 dark:text-white tracking-tight">
            Our <span className="text-primary-500">Services</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
            Premium digital art services tailored to bring your creative vision to life. <br className="hidden md:block" />
            From expressive fursonas to dynamic animations, we've got you covered.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* Pricing Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
        <div className="bg-white dark:bg-slate-900 rounded-[4rem] shadow-2xl overflow-hidden border border-pink-50 dark:border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 lg:p-20 border-b lg:border-b-0 lg:border-r border-pink-50 dark:border-slate-800">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 flex items-center justify-center text-xl">
                  <i className="fa-solid fa-coins"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How Pricing Works</h2>
              </div>
              <p className="text-gray-500 dark:text-gray-400 font-medium mb-10 text-lg leading-relaxed">
                Our pricing is customized to ensure you only pay for exactly what you need. Every project is unique!
              </p>
              <ul className="space-y-6">
                {[
                  { label: 'Complexity', desc: 'The level of detail and character intricate design.' },
                  { label: 'Revisions', desc: 'Number of feedback cycles requested beyond standard.' },
                  { label: 'Timeline', desc: 'Urgent delivery or rush fees if required.' },
                  { label: 'Licensing', desc: 'Commercial usage rights for merch or branding.' },
                  { label: 'Add-ons', desc: 'Extra characters, props, or complex backgrounds.' }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2.5"></div>
                    <div>
                      <span className="font-bold text-gray-900 dark:text-white block">{item.label}</span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-12 lg:p-20 bg-pink-50/30 dark:bg-slate-900/50">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center text-xl">
                  <i className="fa-solid fa-circle-check"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What's Included</h2>
              </div>
              <p className="text-gray-500 dark:text-gray-400 font-medium mb-10 text-lg leading-relaxed">
                Regardless of the tier, we maintain high standards for every single client interaction.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  'Initial consultation',
                  'Concept sketches',
                  'Unlimited revisions (within reason)',
                  'High-resolution files',
                  'Email support',
                  'Post-delivery adjustments'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <i className="fa-solid fa-check text-green-500"></i>
                    <span className="font-bold text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-white dark:bg-slate-800 rounded-3xl border border-pink-100 dark:border-slate-700 shadow-sm">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Common Questions?</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-4">
                  Check out our FAQ page for more information about our process, timeline, and policies.
                </p>
                <a href="#/faq" className="text-primary-500 dark:text-primary-400 font-bold text-sm flex items-center gap-2 group">
                  Visit FAQ <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-32 text-center px-4">
        <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 py-16 px-8 rounded-[3.5rem] shadow-2xl border border-pink-50 dark:border-slate-800">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Ready to Get Started?</h2>
          <p className="text-gray-500 dark:text-gray-400 font-medium mb-10 text-lg">
            Choose your service and book your slot today to begin your artistic journey with us.
          </p>
          <button className="bg-primary-500 hover:bg-primary-600 text-white text-xl font-bold py-6 px-12 rounded-full shadow-2xl shadow-pink-500/30 transition-all hover:-translate-y-1 active:scale-95">
            Request Custom Quote
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
