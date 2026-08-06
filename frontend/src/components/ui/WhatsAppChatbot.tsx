"use client";

import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Sparkles, ShieldCheck, ChevronRight, CheckCheck, ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  options?: { label: string; action: string }[];
  showWhatsAppLink?: boolean;
}

export function WhatsAppChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "m-1",
      sender: "bot",
      text: "Namaste & Welcome to AURA Atelier. ⚜️ I am your automated AI sartorial assistant. How may I guide your luxury fashion inquiry today?",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      options: [
        { label: "👑 Private Fitting Appointment", action: "fitting" },
        { label: "🧵 Royal Bridal & Groom Sherwanis", action: "bridal" },
        { label: "📐 Custom Sizing & Tailoring", action: "sizing" },
        { label: "💎 Heritage Fabrics & Craftsmanship", action: "craft" },
      ],
    },
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [isOpen, messages, isTyping]);

  const handleOptionClick = (option: { label: string; action: string }) => {
    const userMsg: Message = {
      id: `u-${Date.now()}`,
      sender: "user",
      text: option.label,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      let botReply = "";
      let showLink = false;
      let nextOptions: { label: string; action: string }[] | undefined = undefined;

      if (option.action === "fitting") {
        botReply = "Our master tailors offer private fitting appointments at our Bandra West Atelier in Mumbai or via live 4K virtual consultations globally. Sessions include fabric swatch previewing and custom measurements.";
        nextOptions = [
          { label: "📅 Request Weekend Fitting", action: "fitting_weekend" },
          { label: "📍 Salon Location Details", action: "location" },
          { label: "📱 Open External WhatsApp", action: "external_wa" },
        ];
      } else if (option.action === "fitting_weekend") {
        botReply = "Weekend fitting slots are available Saturday & Sunday between 11:00 AM and 7:00 PM IST. Please state your preferred date and our concierge team will reserve it!";
      } else if (option.action === "location") {
        botReply = "AURA Atelier Salon is located at 124 Luxury Designer Boulevard, Bandra West, Mumbai 400050. Valet parking & champagne reception provided.";
      } else if (option.action === "bridal") {
        botReply = "Our Royal Bridal Lehengas & Groom Sherwanis feature authentic Jodhpur Zardozi gold embroidery and handloom Varanasi Kadhwa silk. Each piece takes 300 to 450+ artisan hours.";
        nextOptions = [
          { label: "👑 View Bridal Collection", action: "view_bridal" },
          { label: "🤵 View Groom Sherwanis", action: "view_sherwani" },
        ];
      } else if (option.action === "view_bridal") {
        botReply = "Our flagship Maharani Zardozi Bridal Lehenga starts from ₹3,85,000 including dual silk organza dupattas and custom fitting consultations.";
      } else if (option.action === "view_sherwani") {
        botReply = "Our Royal Banarasi Silk Brocade Sherwanis start from ₹2,45,000 featuring 24k gold zari weave, brass filigree buttons, and silk churidars.";
      } else if (option.action === "sizing") {
        botReply = "We craft all garments to your precise measurements. You can select standard sizes (XS-XL or 38R-44R) or choose 'Bespoke Made-to-Measure' at checkout.";
      } else if (option.action === "craft") {
        botReply = "We strictly use 100% Pure Mulberry Silk, Handloom Katan Silk, real 24k Gold Zari thread, and Italian Silk Velvet. All fabrics are Handloom Mark Certified.";
      } else if (option.action === "external_wa") {
        botReply = "Connecting you directly to our senior stylist on WhatsApp...";
        showLink = true;
      }

      const botMsg: Message = {
        id: `b-${Date.now()}`,
        sender: "bot",
        text: botReply,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        options: nextOptions,
        showWhatsAppLink: showLink,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 750);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMsgText = inputMessage.trim();
    const userMsg: Message = {
      id: `u-${Date.now()}`,
      sender: "user",
      text: userMsgText,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage("");
    setIsTyping(true);

    setTimeout(() => {
      const lower = userMsgText.toLowerCase();
      let reply = "";

      if (lower.includes("price") || lower.includes("cost") || lower.includes("rate")) {
        reply = "Our ready-to-wear accessories start from ₹28,000, heritage silk sarees from ₹1,45,000, groom sherwanis from ₹2,45,000, and royal bridal lehengas from ₹3,85,000.";
      } else if (lower.includes("address") || lower.includes("location") || lower.includes("mumbai") || lower.includes("where")) {
        reply = "Our physical salon is situated at 124 Luxury Designer Boulevard, Bandra West, Mumbai 400050. Open Monday through Saturday, 10 AM to 8 PM.";
      } else if (lower.includes("sherwani") || lower.includes("men") || lower.includes("groom")) {
        reply = "Our Men's Royal Couture line includes Kadhwa Banarasi Sherwanis, Jodhpur Velvet Achkans, and Italo-Indian Fusion Tuxedos.";
      } else if (lower.includes("lehenga") || lower.includes("bridal") || lower.includes("bride") || lower.includes("saree")) {
        reply = "Our Women's Royal Heritage line features Maharani Zardozi Lehengas, Varanasi Pure Gold Katan Sarees, and Lucknowi Chikankari Anarkalis.";
      } else {
        reply = `Thank you for asking about "${userMsgText}". Our atelier team specializes in bespoke royal tailoring, handcrafted zardozi embroidery, and global delivery.`;
      }

      const botMsg: Message = {
        id: `b-${Date.now()}`,
        sender: "bot",
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        options: [
          { label: "👑 Book Fitting Session", action: "fitting" },
          { label: "🧵 Explore Collections", action: "bridal" },
        ],
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 850);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Chat Drawer */}
      {isOpen && (
        <div className="mb-4 flex flex-col h-[520px] max-h-[80vh] w-[360px] sm:w-[400px] overflow-hidden rounded-2xl border border-[#D4AF37]/40 bg-[#121214] shadow-2xl backdrop-blur-xl transition-all duration-300">
          {/* Chat Header */}
          <div className="flex items-center justify-between border-b border-stone-800 bg-gradient-to-r from-black via-[#18181B] to-[#141416] p-4">
            <div className="flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37] bg-[#141416] text-[#D4AF37] shadow-lg">
                <Sparkles className="h-5 w-5" />
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-black bg-emerald-500"></span>
              </div>
              <div>
                <h3 className="font-serif text-sm font-bold text-stone-100 flex items-center gap-1.5">
                  AURA AI Concierge <ShieldCheck className="h-3.5 w-3.5 text-[#D4AF37]" />
                </h3>
                <p className="text-[10px] text-stone-400 font-mono">
                  In-App AI Assistant • Instant Response
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close Chat"
              className="rounded-full bg-stone-900 p-1.5 text-stone-400 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl px-4 py-3 shadow-md ${
                    msg.sender === "user"
                      ? "bg-[#D4AF37] text-black font-medium rounded-br-none"
                      : "border border-stone-800 bg-[#1A1A1E] text-stone-200 rounded-bl-none"
                  }`}
                >
                  <p className="leading-relaxed whitespace-pre-line">{msg.text}</p>
                  <span
                    className={`mt-1 block text-[9px] ${
                      msg.sender === "user" ? "text-stone-800 text-right" : "text-stone-500"
                    }`}
                  >
                    {msg.timestamp} {msg.sender === "user" && <CheckCheck className="inline h-3 w-3 ml-0.5" />}
                  </span>

                  {msg.showWhatsAppLink && (
                    <a
                      href={`https://wa.me/${SITE_CONFIG.contact.whatsappPhone}?text=${encodeURIComponent(
                        "Hello AURA Atelier, I am inquiring via the website chatbot."
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-500 transition-all shadow-md"
                    >
                      <ExternalLink className="h-4 w-4" /> Open WhatsApp App
                    </a>
                  )}
                </div>

                {/* Quick Action Chips */}
                {msg.options && (
                  <div className="mt-3 flex flex-col gap-2 w-full">
                    {msg.options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleOptionClick(opt)}
                        className="flex items-center justify-between rounded-xl border border-[#D4AF37]/30 bg-[#1A1810] px-3.5 py-2.5 text-[11px] font-medium text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all text-left"
                      >
                        <span>{opt.label}</span>
                        <ChevronRight className="h-3.5 w-3.5 opacity-60" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-stone-400 text-[11px] italic">
                <span className="flex h-2 w-2 animate-ping rounded-full bg-[#D4AF37]"></span>
                AURA AI is typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSendMessage}
            className="flex items-center gap-2 border-t border-stone-800 bg-[#0E0E10] p-3"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask about fitting, price, lehengas, sherwanis..."
              className="flex-1 rounded-xl border border-stone-800 bg-[#141416] px-4 py-2.5 text-xs text-stone-100 placeholder-stone-500 focus:border-[#D4AF37] focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37] text-black hover:bg-white transition-all shadow-lg"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open AURA AI Concierge Chatbot"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]/60 bg-[#141416] text-[#D4AF37] shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#D4AF37] hover:text-black focus:outline-none"
      >
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D4AF37] opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-[#D4AF37]"></span>
        </span>
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6 transition-transform group-hover:rotate-12" />
        )}
      </button>
    </div>
  );
}

// Backwards compatibility export
export { WhatsAppChatbot as WhatsAppButton };
