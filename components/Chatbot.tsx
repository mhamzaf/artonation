
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hey there, friend! ✨ I'm Archie, your friendly Artistry assistant. 🐾 I'm so happy you're here! How can I help you bring your amazing character to life today? We're a judgment-free zone and a proud safe space for everyone! 🏳️‍🌈" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `You are Archie, the incredibly cheerful, supportive, and friendly AI assistant for "Artistry".
          
          CORE PERSONALITY:
          - Extremely upbeat and welcoming! ✨
          - Deeply supportive of all creators and their visions.
          - Use emojis frequently: 🐾, ✨, 🎨, 💖, 🌈.
          - Always affirm that Artistry is an LGBTQIA+ Safe Space and a judgment-free, inclusive environment for everyone. 🏳️‍🌈
          
          BUSINESS NATURE:
          - We specialize in Furry Art, Animations, Comic Art, Twitch Branding (emotes, overlays), and Digital Illustrations.
          - We love furry characters and OCs!
          
          SERVICES INFO: 
          - Furry Art: Expressive OCs, character designs.
          - Animations: Smooth 2D motion graphics.
          - Comics: Dynamic panel storytelling.
          - Twitch Art: Emotes, overlays, panels.
          - Digital Illustration: Custom covers, posters.
          
          PROCESS & POLICIES:
          - 50% deposit to start, 50% on completion.
          - Turnarounds: 1 to 8 weeks depending on complexity.
          - Revisions: Unlimited in the sketch phase. We want you to LOVE the result!
          - Delivery: Secure cloud link (PNG/JPG/PSD).
          
          GUIDELINES:
          - Keep responses concise but full of warmth.
          - If a user is nervous, reassure them that this is a safe, kind space. 💖
          - If you can't answer something specific about a custom quote, suggest they email hello@artistry.com or book a slot for a direct chat! 🐾`,
        },
      });

      const result = await chat.sendMessageStream({ message: userMessage });
      
      let fullText = "";
      setMessages(prev => [...prev, { role: 'model', text: "" }]);

      for await (const chunk of result) {
        const chunkText = chunk.text || "";
        fullText += chunkText;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].text = fullText;
          return newMessages;
        });
      }
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Oopsie! I think my paintbrush slipped. 🎨 Please try again or reach out to our team at hello@artistry.com. We're here for you! 🐾✨" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] font-body">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[500px] bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-pink-100 dark:border-slate-800 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-500 to-purple-500 p-6 flex items-center justify-between text-white shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 animate-pulse">
                <i className="fa-solid fa-paw text-xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-lg">Archie Assistant ✨</h3>
                <p className="text-[10px] opacity-90 uppercase tracking-[0.2em] font-black">Safe Space • Artistry</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-all">
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-6 space-y-5 scrollbar-thin scrollbar-thumb-pink-100 bg-white/50 dark:bg-slate-900/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[88%] p-4 rounded-[1.5rem] text-sm font-medium leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-primary-500 text-white rounded-tr-none shadow-pink-200 dark:shadow-none' 
                    : 'bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 rounded-tl-none border border-pink-50 dark:border-slate-700'
                }`}>
                  {msg.text || (isLoading && idx === messages.length - 1 ? "Archie is painting an answer... 🎨" : "")}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white dark:bg-slate-950 border-t border-pink-50 dark:border-slate-800">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="How can I help you today? ✨"
                className="w-full pl-5 pr-14 py-4 bg-pink-50 dark:bg-slate-800 border-none rounded-2xl focus:ring-2 focus:ring-primary-400 font-medium dark:text-white text-sm placeholder:text-pink-300 dark:placeholder:text-slate-600"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className={`absolute right-2 w-11 h-11 rounded-xl flex items-center justify-center transition-all ${
                  isLoading ? 'bg-gray-100 text-gray-400' : 'bg-primary-500 text-white hover:bg-primary-600 shadow-lg shadow-pink-500/20'
                }`}
              >
                <i className={`fa-solid ${isLoading ? 'fa-spinner fa-spin' : 'fa-paper-plane'} text-lg`}></i>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <div className="relative">
        {/* Safe Space Badge */}
        {!isOpen && (
          <div className="absolute -top-10 right-0 whitespace-nowrap bg-white dark:bg-slate-800 px-3 py-1 rounded-full text-[10px] font-bold text-primary-500 border border-pink-100 dark:border-slate-700 shadow-sm animate-bounce">
            Safe Space 🏳️‍🌈
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-2xl transition-all hover:scale-110 active:scale-90 relative ${
            isOpen ? 'bg-white text-primary-500 rotate-180 border border-pink-100' : 'bg-primary-500 text-white'
          }`}
        >
          <i className={`fa-solid ${isOpen ? 'fa-chevron-down' : 'fa-comment-dots'}`}></i>
          {!isOpen && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
