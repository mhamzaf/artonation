
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-white dark:bg-slate-950 transition-colors pt-8 lg:pt-12">
      {/* Signature CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 lg:mb-24">
        <div className="bg-gradient-to-br from-primary-500 via-purple-500 to-primary-600 p-1 rounded-3xl lg:rounded-[3.5rem] shadow-2xl transform hover:scale-[1.01] transition-all duration-500 group">
           <div className="bg-white dark:bg-slate-900 rounded-[1.8rem] lg:rounded-[3.3rem] px-6 py-10 lg:px-20 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl lg:text-5xl font-black text-gray-900 dark:text-white mb-4 lg:mb-6 tracking-tighter leading-none uppercase">Ready to <br className="hidden sm:block" /> Start?</h3>
                <p className="text-gray-500 dark:text-gray-400 font-bold text-sm lg:text-xl leading-relaxed max-w-sm lg:max-w-lg mx-auto lg:mx-0">Let's turn your imagination into a high-resolution masterpiece. 🐾✨</p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-6 w-full lg:w-auto">
                <Link to="/services" className="w-full sm:w-auto bg-primary-500 hover:bg-primary-600 text-white px-8 lg:px-12 py-4 lg:py-6 rounded-2xl lg:rounded-full font-black text-base lg:text-xl shadow-xl transition-all active:scale-95 text-center uppercase tracking-widest">
                  Book A Slot
                </Link>
                <Link to="/portfolio" className="w-full sm:w-auto bg-pink-50 dark:bg-slate-800 text-primary-500 dark:text-primary-400 px-8 lg:px-12 py-4 lg:py-6 rounded-2xl lg:rounded-full font-black text-base lg:text-xl transition-all active:scale-95 text-center border-2 border-pink-100 dark:border-slate-800 uppercase tracking-widest">
                  Gallery
                </Link>
              </div>
           </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-slate-50 dark:bg-slate-900/40 py-12 lg:py-24 border-t border-pink-50 dark:border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-24 mb-12 lg:mb-20">
            {/* Branding Column */}
            <div className="lg:col-span-5 text-center sm:text-left">
              <Link to="/" className="flex items-center gap-3 mb-6 group justify-center sm:justify-start">
                <div className="bg-primary-500 text-white p-2.5 rounded-xl w-10 h-10 flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                  <i className="fa-solid fa-palette text-lg"></i>
                </div>
                <span className="text-2xl font-black tracking-tighter dark:text-white uppercase leading-none">Artistry</span>
              </Link>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8 text-sm lg:text-lg font-bold">
                Premium, inclusive art sanctuary for your beloved characters. Verified Safe Space. 🏳️‍🌈
              </p>
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                {[
                  { icon: 'fa-twitter', color: 'hover:bg-[#1DA1F2]', label: 'Twitter' },
                  { icon: 'fa-instagram', color: 'hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7]', label: 'Instagram' },
                  { icon: 'fa-discord', color: 'hover:bg-[#5865F2]', label: 'Discord' }
                ].map((social, idx) => (
                  <a key={idx} href="#" aria-label={social.label} className={`w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 flex items-center justify-center text-gray-500 hover:text-white transition-all hover:scale-110 ${social.color}`}>
                    <i className={`fa-brands ${social.icon} text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-2 hidden sm:block">
              <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-6">Explore</h4>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300 font-black uppercase tracking-widest">
                <li><Link to="/" className="hover:text-primary-500 transition-colors">Home</Link></li>
                <li><Link to="/portfolio" className="hover:text-primary-500 transition-colors">Gallery</Link></li>
                <li><Link to="/services" className="hover:text-primary-500 transition-colors">Pricing</Link></li>
                <li><Link to="/faq" className="hover:text-primary-500 transition-colors">FAQ</Link></li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className="lg:col-span-4 lg:col-span-3">
              <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-6 text-center sm:text-left">Join the Pack</h4>
              <p className="text-gray-500 dark:text-gray-400 text-xs font-bold mb-6 text-center sm:text-left">Get notified when slots open!</p>
              <div className="relative">
                <input type="email" placeholder="Your creative email" className="w-full h-14 pl-5 pr-14 bg-white dark:bg-slate-900 border-2 border-transparent focus:border-primary-500 rounded-2xl font-bold transition-all placeholder:text-gray-300 dark:text-white text-sm" />
                <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-primary-500 text-white w-11 h-11 rounded-xl flex items-center justify-center shadow-lg transition-all active:scale-95" aria-label="Subscribe">
                  <i className="fa-solid fa-paper-plane text-sm"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">
               <span>© 2024 ARTISTRY</span>
               <div className="w-1 h-1 rounded-full bg-pink-500 hidden sm:block"></div>
               <span className="hidden sm:block">Bringing dreams to life</span>
            </div>
            
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 text-[10px] font-black text-gray-400 hover:text-primary-500 transition-colors uppercase tracking-[0.2em] bg-white dark:bg-slate-800 px-6 py-3 rounded-full border border-gray-100 dark:border-slate-800 shadow-sm active:scale-95"
            >
              Back to Top <i className="fa-solid fa-arrow-up text-[8px]"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
