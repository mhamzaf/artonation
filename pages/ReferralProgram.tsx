
import React, { useState } from 'react';

const ReferralProgram: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const referralTiers = [
    { tier: 'Sparkle', milestone: '1st Referral', reward: '10% Discount', friend: '5% Discount', color: 'bg-pink-400' },
    { tier: 'Shimmer', milestone: '3 Referrals', reward: 'Free Bust Sketch', friend: '10% Discount', color: 'bg-purple-400' },
    { tier: 'Glow', milestone: '5 Referrals', reward: '20% Off Ref Sheet', friend: 'Free Headshot', color: 'bg-blue-400' },
    { tier: 'Radiant', milestone: '10+ Referrals', reward: 'FREE Full Body Art', friend: '15% Discount', color: 'bg-yellow-400' },
  ];

  return (
    <div className="py-12 lg:py-20 bg-background dark:bg-slate-950 min-h-screen transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Hero */}
        <div className="relative bg-gradient-to-br from-primary-500 via-purple-500 to-primary-600 rounded-3xl lg:rounded-[3rem] p-8 lg:p-20 overflow-hidden text-white shadow-2xl mb-12">
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 text-center lg:text-left">
              <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block">
                Artist Rewards
              </span>
              <h1 className="text-4xl lg:text-7xl font-black mb-6 leading-tight tracking-tighter uppercase">
                Refer a Friend, <br /> Earn <span className="text-pink-200 underline decoration-wavy decoration-white/40">Magic</span>
              </h1>
              <p className="text-base lg:text-xl text-pink-100 font-bold leading-relaxed mb-8 max-w-xl">
                Invite your friends to our studio and unlock exclusive art rewards and massive discounts. 🐾✨
              </p>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-2xl flex items-center shadow-lg max-w-md mx-auto lg:mx-0 group">
                <div className="flex-grow pl-4 text-white font-black truncate text-sm">artistry.com/ref/archie_92</div>
                <button className="bg-white text-primary-500 px-5 py-3 rounded-xl font-black text-xs uppercase transition-all active:scale-95">
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {[
            { step: '01', title: 'Share Link', desc: 'Send your unique invite to your artistic circle.', icon: 'fa-share-nodes' },
            { step: '02', title: 'Booking', desc: 'Wait for them to complete their first art commission.', icon: 'fa-user-check' },
            { step: '03', title: 'Earn Art', desc: 'Get free sketches or massive shop discounts!', icon: 'fa-gem' }
          ].map((item, i) => (
            <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-[2rem] shadow-xl border border-pink-50 dark:border-slate-800 relative group transition-all active:scale-[0.98]">
              <div className="absolute -top-4 left-8 w-10 h-10 bg-primary-500 text-white flex items-center justify-center rounded-xl font-black text-sm shadow-lg">
                {item.step}
              </div>
              <div className="w-14 h-14 bg-pink-50 dark:bg-slate-800 text-primary-500 flex items-center justify-center rounded-2xl mb-6">
                <i className={`fa-solid ${item.icon} text-xl`}></i>
              </div>
              <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2 uppercase tracking-tight">{item.title}</h3>
              <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 font-bold leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Referral Tiers - Adaptive Layout (Card-based on Mobile) */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-5xl font-black text-center mb-10 dark:text-white uppercase tracking-tighter">Reward Milestones</h2>
          
          {/* Desktop Table View */}
          <div className="hidden lg:block bg-white dark:bg-slate-900 p-12 rounded-[3rem] shadow-xl border border-pink-50 dark:border-slate-800">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-pink-50 dark:border-slate-800 text-gray-400 text-[10px] font-black uppercase tracking-widest">
                  <th className="pb-6">Tier</th>
                  <th className="pb-6">Milestone</th>
                  <th className="pb-6">Your Reward</th>
                  <th className="pb-6">Friend Reward</th>
                </tr>
              </thead>
              <tbody className="font-bold text-gray-800 dark:text-gray-200">
                {referralTiers.map((row, idx) => (
                  <tr key={idx} className="border-b border-pink-50 dark:border-slate-800 last:border-0 hover:bg-pink-50/20 transition-colors">
                    <td className="py-6"><div className="flex items-center gap-3"><div className={`w-3 h-3 rounded-full ${row.color}`}></div>{row.tier}</div></td>
                    <td className="py-6">{row.milestone}</td>
                    <td className="py-6 text-primary-500">{row.reward}</td>
                    <td className="py-6 text-purple-500">{row.friend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="lg:hidden space-y-4">
            {referralTiers.map((row, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-pink-50 dark:border-slate-800 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-widest text-gray-400">{row.milestone}</span>
                  <div className={`px-3 py-1 rounded-full text-[10px] font-black text-white ${row.color}`}>{row.tier}</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">You Get</p>
                    <p className="text-sm font-black text-primary-500">{row.reward}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Friend Gets</p>
                    <p className="text-sm font-black text-purple-500">{row.friend}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form optimized for touch */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] lg:rounded-[3.5rem] shadow-2xl overflow-hidden border border-pink-100 dark:border-slate-800">
            <div className="bg-primary-500 p-8 lg:p-14 text-center text-white relative">
              <h2 className="text-2xl lg:text-4xl font-black mb-2 relative z-10 uppercase tracking-tighter">Referral Claim Form</h2>
              <p className="text-pink-100 font-bold text-sm relative z-10">Help us credit the right artist! 🐾</p>
            </div>

            <div className="p-6 lg:p-16">
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <h3 className="text-xl font-black mb-2 text-gray-900 dark:text-white">Success!</h3>
                  <button onClick={() => setFormSubmitted(false)} className="text-primary-500 font-bold text-sm uppercase underline">Back to form</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Referral Source</label>
                    <select required className="w-full h-14 px-5 bg-pink-50 dark:bg-slate-800 border-none rounded-2xl font-bold text-gray-700 dark:text-white focus:ring-2 focus:ring-primary-500 transition-all">
                      <option value="">Choose how you found us...</option>
                      <option value="agent">Art Agent</option>
                      <option value="friend">Friend / Artist</option>
                      <option value="social">Social Media</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Agent Name</label>
                      <input type="text" placeholder="Who sent you?" className="w-full h-14 px-5 bg-pink-50 dark:bg-slate-800 border-none rounded-2xl font-bold dark:text-white focus:ring-2 focus:ring-primary-500 transition-all" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Agent Handle</label>
                      <input type="text" placeholder="@handle" className="w-full h-14 px-5 bg-pink-50 dark:bg-slate-800 border-none rounded-2xl font-bold dark:text-white focus:ring-2 focus:ring-primary-500 transition-all" />
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-primary-500 text-white font-black py-5 rounded-2xl shadow-xl shadow-pink-500/20 transition-all active:scale-95 text-lg uppercase tracking-widest">
                    Submit Referral
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralProgram;
