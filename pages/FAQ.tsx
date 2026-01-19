
import React, { useState, useMemo } from 'react';

interface FAQData {
  question: string;
  answer: string | React.ReactNode;
}

interface Category {
  id: string;
  title: string;
  icon: string;
  items: FAQData[];
}

const FAQItem: React.FC<{ question: string; answer: string | React.ReactNode }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border border-pink-100 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-3xl overflow-hidden transition-all hover:border-pink-200 dark:hover:border-slate-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full text-left px-6 py-5 lg:px-8 lg:py-6 flex justify-between items-center gap-4 hover:bg-pink-50/30 dark:hover:bg-slate-800/50 transition-colors"
      >
        <span className="text-lg font-bold text-gray-900 dark:text-white leading-tight">{question}</span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-pink-50 dark:bg-slate-800 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 bg-primary-500 text-white' : 'text-primary-500'}`}>
          <i className="fa-solid fa-chevron-down text-sm"></i>
        </div>
      </button>
      <div 
        className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
      >
        <div className="px-6 pb-6 lg:px-8 lg:pb-8 text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
          {typeof answer === 'string' ? (
            <p className="whitespace-pre-line">{answer}</p>
          ) : (
            answer
          )}
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('process');

  const categories: Category[] = [
    {
      id: 'process',
      title: 'Commission Process',
      icon: 'fa-gears',
      items: [
        {
          question: "How do I place a commission?",
          answer: "Simply visit our Booking page, fill out the commission form with your details, and choose your preferred date and time. We'll send you a confirmation email with next steps, pricing details, and our contract. Reply with confirmation and payment details to proceed!"
        },
        {
          question: "What information do I need to provide?",
          answer: (
            <div className="space-y-2">
              <p>Please provide:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Your name and contact email</li>
                <li>Type of art you want (furry, comic, animation, etc.)</li>
                <li>Detailed description of your vision</li>
                <li>Reference images or links (character sheets, mood boards, etc.)</li>
                <li>Your budget or preferred service tier</li>
                <li>Any specific preferences or requirements</li>
              </ul>
            </div>
          )
        },
        {
          question: "What's the typical timeline?",
          answer: (
            <div className="space-y-2">
              <p>Timelines vary by service:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Digital Illustrations: 1-3 weeks</li>
                <li>Furry Art Commissions: 2-4 weeks</li>
                <li>Comic Panels: 3-6 weeks</li>
                <li>Character Design: 2-5 weeks</li>
                <li>Custom Animations: 4-8 weeks</li>
              </ul>
              <p className="mt-2 font-bold text-primary-500 dark:text-primary-400 italic">Rush commissions are available with an additional fee. Contact us for details!</p>
            </div>
          )
        },
        {
          question: "Can I request revisions?",
          answer: "Yes! We include unlimited revision rounds during the design phase to ensure you're completely happy. Once we move to final art, minor adjustments are included. Major changes after final approval may incur additional fees. We always prioritize your satisfaction!"
        }
      ]
    },
    {
      id: 'pricing',
      title: 'Pricing & Payment',
      icon: 'fa-hand-holding-dollar',
      items: [
        {
          question: "How are prices determined?",
          answer: (
            <div className="space-y-2">
              <p>Pricing depends on several factors:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Complexity and detail level</li>
                <li>Number of characters/scenes</li>
                <li>Timeline urgency</li>
                <li>Commercial usage rights</li>
                <li>Revisions and additional services</li>
              </ul>
              <p>We provide custom quotes for all commissions. Contact us or book a consultation for exact pricing!</p>
            </div>
          )
        },
        {
          question: "What payment methods do you accept?",
          answer: (
            <div className="space-y-2">
              <p>We accept multiple payment methods for your convenience:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Credit/Debit cards (Visa, Mastercard, American Express)</li>
                <li>PayPal</li>
                <li>Stripe</li>
                <li>Bank transfer (international)</li>
              </ul>
              <p className="font-bold">Payment is typically split: 50% deposit to start, 50% upon completion.</p>
            </div>
          )
        },
        {
          question: "Is a deposit required?",
          answer: "Yes, we require a 50% deposit to secure your slot and begin work. This reserves your spot in our queue and shows mutual commitment. The remaining 50% is due upon completion before final file delivery."
        },
        {
          question: "Do you offer payment plans?",
          answer: "For larger commissions, we can discuss payment arrangements. Please mention this during booking or contact us directly at hello@artistry.com. We're happy to work with you within reason!"
        }
      ]
    },
    {
      id: 'delivery',
      title: 'Delivery & Files',
      icon: 'fa-box-open',
      items: [
        {
          question: "What file formats will I receive?",
          answer: (
            <div className="space-y-2">
              <p>You'll receive your artwork in multiple formats:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>High-resolution PNG (transparent background option)</li>
                <li>High-resolution JPG</li>
                <li>Original layered file (PSD or equivalent)</li>
                <li>Web-optimized versions (300x300, 1200x1200, etc.)</li>
              </ul>
              <p>All files are delivered via cloud download link or email attachment.</p>
            </div>
          )
        },
        {
          question: "Can I use the art commercially?",
          answer: (
            <div className="space-y-2">
              <p>Yes! For most commissions, you receive full commercial usage rights. You can use the artwork for:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Personal projects and social media</li>
                <li>Merchandise and product packaging</li>
                <li>Books and published materials</li>
                <li>Commercial resale (with proper credit)</li>
                <li>Streaming and video content</li>
              </ul>
              <p>Check the terms in your commission agreement for specific details.</p>
            </div>
          )
        },
        {
          question: "Will you post my commission on social media?",
          answer: "We love to showcase our work! We'll ask for permission to post your commission on our Instagram, Twitter, and portfolio. You can request privacy if you prefer we don't share it publicly. Either way, we'll always credit you and link your accounts (if you want)!"
        },
        {
          question: "How will I receive my files?",
          answer: "We provide files via a secure cloud download link (Google Drive or Dropbox). You'll also receive a completion email with all file formats. Files are typically ready within 24 hours after final payment confirmation."
        }
      ]
    },
    {
      id: 'policies',
      title: 'Policies & Rights',
      icon: 'fa-scale-balanced',
      items: [
        {
          question: "What's your revision policy?",
          answer: (
            <div className="space-y-2">
              <ul className="list-disc pl-5 space-y-1">
                <li>Unlimited revisions during design phase (sketch, color blocking)</li>
                <li>2-3 revisions after final line art</li>
                <li>1 final round of minor tweaks before delivery</li>
              </ul>
              <p>Significant changes requested after final approval may incur additional charges to fairly compensate for extra work.</p>
            </div>
          )
        },
        {
          question: "What's your refund policy?",
          answer: (
            <div className="space-y-2">
              <ul className="list-disc pl-5 space-y-1">
                <li>Refund available up to 7 days after booking (before work begins)</li>
                <li>50% refund if cancellation occurs within first 2 weeks of work</li>
                <li>No refund after project reaches halfway completion</li>
                <li>In case of unsatisfactory work, we'll redo up to 2 complete restarts</li>
              </ul>
              <p>We're committed to your satisfaction. If you're unhappy, we'll work until you're happy!</p>
            </div>
          )
        },
        {
          question: "What if I need to cancel my commission?",
          answer: (
            <div className="space-y-2">
              <p>We understand plans change! Contact us immediately at hello@artistry.com. Cancellation fees depend on how far along we are:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Before work starts: Full refund minus 10% processing fee</li>
                <li>Within 2 weeks: 50% refund</li>
                <li>After 50% completion: Keep the deposit, no additional refund</li>
              </ul>
            </div>
          )
        },
        {
          question: "Can you work with adult/NSFW content?",
          answer: (
            <div className="space-y-2">
              <p>We accept adult/NSFW commissions within reason. We require:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>All characters must be 18+ or explicitly adult species</li>
                <li>No extreme violence, gore, or illegal content</li>
                <li>No hate speech or discriminatory themes</li>
                <li>Proper age verification for sensitive content</li>
              </ul>
              <p>As an LGBTQIA+-friendly studio, we celebrate consensual adult content. Please be upfront during booking!</p>
            </div>
          )
        }
      ]
    },
    {
      id: 'values',
      title: 'Safe Space & Values',
      icon: 'fa-rainbow',
      items: [
        {
          question: "What does \"LGBTQIA+ Safe Space\" mean?",
          answer: (
            <div className="space-y-2">
              <p>At Artistry, we're committed to being a genuinely safe space where:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>All identities, orientations, and expressions are celebrated</li>
                <li>Pronouns are respected and never assumed</li>
                <li>Discrimination of any kind is never tolerated</li>
                <li>We actively work to uplift marginalized communities</li>
                <li>Your art is never judged—only celebrated</li>
                <li>Requests involving LGBTQIA+ themes are handled with respect and care</li>
              </ul>
            </div>
          )
        },
        {
          question: "Are furry commissions OK here?",
          answer: "Absolutely! Furry art is a huge part of our specialty. We celebrate furry culture, fursuiters, OCs, and the entire furry community. We're proud to serve you and your creative vision without judgment. This is a judgment-free zone! 🐾"
        },
        {
          question: "Do you discriminate based on content?",
          answer: (
            <div className="space-y-2">
              <p>We have a non-discrimination policy. We won't refuse commissions based on:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Sexual orientation or gender identity</li>
                <li>Race, ethnicity, or cultural background</li>
                <li>Disability or neurodivergence</li>
                <li>Body type or appearance</li>
                <li>Legitimate adult content (consensual, age-appropriate)</li>
              </ul>
              <p>We will refuse work involving hate speech, extreme violence, or illegal content. Otherwise, we're here to celebrate your vision!</p>
            </div>
          )
        },
        {
          question: "How do you handle sensitive or personal commissions?",
          answer: "We treat every commission with confidentiality and respect. Personal, intimate, or sensitive commissions are handled with 100% confidentiality—we never share details publicly. We always ask before posting any work!"
        },
        {
          question: "What's your stance on diversity in art?",
          answer: "We actively celebrate diversity in all forms. We welcome diverse character designs, celebrate LGBTQIA+ characters, and create art reflecting different cultures respectfully. We're committed to inclusive and equitable practices."
        }
      ]
    },
    {
      id: 'support',
      title: 'Technical Support',
      icon: 'fa-headset',
      items: [
        {
          question: "Do you offer rush commissions?",
          answer: "Yes! Rush commissions are available for an additional fee (typically 25-50% extra depending on urgency). Let us know your deadline during booking, and we'll let you know if we can accommodate it!"
        },
        {
          question: "What if I have technical issues with file delivery?",
          answer: (
            <div className="space-y-2">
              <p>We provide 30 days of post-delivery support. If you have issues:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Email us immediately with details</li>
                <li>We'll resend files in different formats</li>
                <li>We can help troubleshoot compatibility issues</li>
                <li>Alternative delivery methods available upon request</li>
              </ul>
            </div>
          )
        },
        {
          question: "Do you offer edits after delivery?",
          answer: "Yes! We offer 30 days of post-delivery support for minor edits. Small color adjustments, typo fixes, or minor tweaks are free. Significant changes may incur additional fees. We want you to be completely happy with your artwork!"
        }
      ]
    }
  ];

  const activeCategoryData = useMemo(() => 
    categories.find(c => c.id === activeCategory) || categories[0], 
  [activeCategory]);

  return (
    <div className="py-12 lg:py-24 bg-background dark:bg-slate-950 min-h-screen transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-3 bg-white dark:bg-slate-900 px-6 py-2 rounded-full shadow-sm border border-pink-100 dark:border-slate-800 mb-8 animate-bounce">
            <span className="text-primary-500">✨</span>
            <span className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400">Help Center</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
            Frequently Asked <br className="hidden md:block" /> <span className="text-primary-500">Questions</span>
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our process, timeline, policies, and our commitment to being a safe space.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Navigation Sidebar */}
          <aside className="lg:w-1/4">
            <div className="sticky top-32 space-y-2 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm p-4 rounded-4xl border border-white dark:border-slate-800 shadow-xl">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${
                    activeCategory === cat.id
                      ? 'bg-primary-500 text-white shadow-lg shadow-pink-500/20 translate-x-2'
                      : 'text-gray-500 dark:text-gray-400 hover:bg-white dark:hover:bg-slate-800 hover:text-primary-500'
                  }`}
                >
                  <i className={`fa-solid ${cat.icon} text-lg`}></i>
                  <span>{cat.title}</span>
                </button>
              ))}
            </div>
          </aside>

          {/* FAQ Content Area */}
          <div className="lg:w-3/4">
            <div className="bg-white/40 dark:bg-slate-900/40 p-1 rounded-[3rem] backdrop-blur-sm">
              <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl p-8 lg:p-12 border border-pink-50 dark:border-slate-800">
                <div className="flex items-center gap-4 mb-10 pb-6 border-b border-pink-50 dark:border-slate-800">
                  <div className="w-14 h-14 rounded-2xl bg-pink-50 dark:bg-slate-800 text-primary-500 flex items-center justify-center text-2xl">
                    <i className={`fa-solid ${activeCategoryData.icon}`}></i>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{activeCategoryData.title}</h2>
                </div>

                <div className="space-y-4">
                  {activeCategoryData.items.map((item, idx) => (
                    <FAQItem key={idx} question={item.question} answer={item.answer} />
                  ))}
                </div>
              </div>
            </div>

            {/* Values Highlight */}
            {activeCategory === 'values' && (
              <div className="mt-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-[3rem] p-10 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                  <div className="text-5xl">🏳️‍🌈</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Our commitment to inclusion</h3>
                    <p className="text-pink-100 font-medium">
                      Artistry is more than just a studio; it's a sanctuary for creativity. We take pride in being a 
                      judgment-free zone where your identity is celebrated and your art is treated with respect.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Contact CTA */}
            <div className="mt-20 text-center">
              <div className="bg-white dark:bg-slate-900 inline-block p-10 rounded-5xl shadow-xl border border-pink-50 dark:border-slate-800">
                <h3 className="text-2xl font-bold mb-4 dark:text-white">Still have questions?</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-8 font-medium">
                  We're happy to help! Send us a DM on Discord or email us directly.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href="mailto:hello@artistry.com" 
                    className="flex items-center gap-3 px-8 py-4 bg-primary-500 text-white rounded-full font-bold shadow-lg shadow-pink-500/20 hover:bg-primary-600 transition-all hover:-translate-y-1"
                  >
                    <i className="fa-solid fa-envelope"></i>
                    hello@artistry.com
                  </a>
                  <button className="flex items-center gap-3 px-8 py-4 bg-white dark:bg-slate-800 border-2 border-primary-500 text-primary-500 dark:text-primary-400 rounded-full font-bold hover:bg-pink-50 dark:hover:bg-slate-700 transition-all hover:-translate-y-1">
                    <i className="fa-brands fa-discord"></i>
                    Join Discord Support
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
