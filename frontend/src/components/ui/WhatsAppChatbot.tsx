"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  MessageCircle,
  X,
  Send,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  CheckCheck,
  ExternalLink,
  ArrowLeft,
  RotateCcw,
  Sparkle,
  Calendar,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import {
  ActionType,
  LeadDetails,
  generateWhatsAppMessage,
  openWhatsApp,
} from "@/lib/whatsapp";

// Quick action configuration
interface QuickAction {
  id: ActionType;
  label: string;
  icon: string;
  subtitle: string;
}

const QUICK_ACTIONS: QuickAction[] = [
  { id: "bridal", label: "Bridal Collection", icon: "👰", subtitle: "Maharani Zardozi & Handloom Silk" },
  { id: "groom", label: "Groom Collection", icon: "🤵", subtitle: "Royal Sherwanis & Achkans" },
  { id: "womens_wear", label: "Women's Wear", icon: "👗", subtitle: "Gowns, Sarees & Anarkalis" },
  { id: "mens_wear", label: "Men's Wear", icon: "👔", subtitle: "Bandhgalas, Tuxedos & Suits" },
  { id: "tailoring", label: "Custom Tailoring", icon: "🧵", subtitle: "Bespoke Artisanal Fits" },
  { id: "appointment", label: "Book Appointment", icon: "📅", subtitle: "Private Atelier Consultation" },
  { id: "talk_to_stylist", label: "Talk to Fashion Stylist", icon: "💬", subtitle: "Direct Live WhatsApp Chat" },
];

// Question Definition for Lead Gen Flow
interface QuestionConfig {
  key: keyof LeadDetails;
  label: string;
  placeholder?: string;
  required: boolean;
  type: "text" | "tel" | "options";
  options?: string[];
  helpText?: string;
}

const FLOW_QUESTIONS: Record<ActionType, QuestionConfig[]> = {
  bridal: [
    { key: "name", label: "May we have your full name?", placeholder: "e.g., Ananya Sharma", required: true, type: "text" },
    { key: "city", label: "Which city or region are you located in?", placeholder: "e.g., Mumbai, Delhi, London, Dubai", required: false, type: "text" },
    { key: "weddingDate", label: "When is your upcoming wedding date or season?", placeholder: "e.g., December 2026 / Spring 2027", required: false, type: "text" },
    { key: "budget", label: "What is your estimated bridal outfit budget?", required: false, type: "options", options: ["₹1.5L – ₹3.0L", "₹3.0L – ₹5.0L", "₹5.0L – ₹10.0L+", "Bespoke Unlimited"] },
    { key: "preferredOutfit", label: "Which style of bridal ensemble are you looking for?", required: false, type: "options", options: ["Maharani Zardozi Lehenga", "Handloom Katan Silk Saree", "Indo-Western Bridal Gown", "Custom Bridal Concept"] },
    { key: "phone", label: "Please share your phone or WhatsApp number:", placeholder: "e.g., +91 98765 43210", required: true, type: "tel" },
  ],
  groom: [
    { key: "name", label: "May we have your full name?", placeholder: "e.g., Vikramaditya Roy", required: true, type: "text" },
    { key: "city", label: "Which city are you currently based in?", placeholder: "e.g., Delhi, Bangalore, New York", required: false, type: "text" },
    { key: "occasion", label: "What is the main wedding occasion?", required: false, type: "options", options: ["Wedding Day / Baraat", "Sangeet & Cocktail", "Reception Gala", "Pre-Wedding Ceremonies"] },
    { key: "sherwaniSize", label: "What is your preferred size or fit?", required: false, type: "options", options: ["38R (Small)", "40R (Medium)", "42R (Large)", "44R (XL)", "Custom Made-to-Measure"] },
    { key: "budget", label: "What is your targeted budget range?", required: false, type: "options", options: ["₹1.0L – ₹2.5L", "₹2.5L – ₹5.0L", "₹5.0L+", "Bespoke Royal Couture"] },
    { key: "phone", label: "What is your phone or WhatsApp number?", placeholder: "e.g., +91 98765 43210", required: true, type: "tel" },
  ],
  womens_wear: [
    { key: "name", label: "What is your full name?", placeholder: "e.g., Natasha Verma", required: true, type: "text" },
    { key: "productInterested", label: "Which luxury outfit type interests you most?", required: false, type: "options", options: ["Haute Couture Evening Gown", "Varanasi Pure Silk Saree", "Royal Chikankari Anarkali", "Luxury Cocktail Ensemble", "Custom Fashion Design"] },
    { key: "size", label: "What is your size choice?", required: false, type: "options", options: ["XS", "S", "M", "L", "XL", "Bespoke Custom Fit"] },
    { key: "colorPreference", label: "What is your preferred color palette?", required: false, type: "options", options: ["Imperial Gold & Cream", "Obsidian Black", "Emerald Green", "Royal Crimson", "Pastel Rose Gold", "Custom Palette"] },
    { key: "budget", label: "What is your budget range?", required: false, type: "options", options: ["Under ₹1.0 Lakh", "₹1.0L – ₹2.5L", "₹2.5L – ₹5.0L", "₹5.0L+ Couture"] },
    { key: "phone", label: "Please share your WhatsApp contact number:", placeholder: "e.g., +91 98765 43210", required: true, type: "tel" },
  ],
  mens_wear: [
    { key: "name", label: "What is your full name?", placeholder: "e.g., Siddharth Kapoor", required: true, type: "text" },
    { key: "product", label: "Which garment type are you looking for?", required: false, type: "options", options: ["Royal Achkan Jacket", "Italian Silk Tuxedo", "Hand-tailored Bandhgala", "Designer Kurta Set", "Custom Tailored Suit"] },
    { key: "size", label: "What is your size preference?", required: false, type: "options", options: ["38R", "40R", "42R", "44R", "Custom Measurement"] },
    { key: "budget", label: "What is your budget range?", required: false, type: "options", options: ["Under ₹1.0 Lakh", "₹1.0L – ₹2.0L", "₹2.0L – ₹4.0L", "₹4.0L+ Luxury"] },
    { key: "phone", label: "Please provide your contact phone number:", placeholder: "e.g., +91 98765 43210", required: true, type: "tel" },
  ],
  tailoring: [
    { key: "name", label: "What is your full name?", placeholder: "e.g., Rhea & Kabir", required: true, type: "text" },
    { key: "garmentType", label: "What custom garment would you like us to tailor?", required: false, type: "options", options: ["Bespoke Sherwani / Achkan", "Bridal Lehenga / Saree", "Couture Gown / Tuxedo", "Hand-embroidered Jacket"] },
    { key: "fabricPreference", label: "Do you have a preferred luxury fabric?", required: false, type: "options", options: ["24k Gold Zari Banarasi Silk", "Italian Silk Velvet", "Pure Raw Mulberry Silk", "Chanderi / Silk Organza", "Stylist Recommendation"] },
    { key: "occasion", label: "What occasion is this garment being crafted for?", required: false, type: "options", options: ["Grand Wedding Ceremony", "Red Carpet / Royal Gala", "Festive Gathering", "Private Celebration"] },
    { key: "budget", label: "What is your custom tailoring budget?", required: false, type: "options", options: ["₹1.5L – ₹3.0L", "₹3.0L – ₹6.0L", "₹6.0L+", "Bespoke Unlimited"] },
    { key: "phone", label: "Please enter your phone or WhatsApp number:", placeholder: "e.g., +91 98765 43210", required: true, type: "tel" },
  ],
  appointment: [
    { key: "name", label: "What is your full name?", placeholder: "e.g., Devika Malhotra", required: true, type: "text" },
    { key: "phone", label: "What is your contact phone number?", placeholder: "e.g., +91 98765 43210", required: true, type: "tel" },
    { key: "preferredDate", label: "What is your preferred date for the appointment?", placeholder: "e.g., Saturday, 24th October 2026", required: false, type: "text" },
    { key: "preferredTime", label: "What time slot suits your schedule best?", required: false, type: "options", options: ["11:00 AM – 1:00 PM", "2:00 PM – 4:00 PM", "4:00 PM – 6:00 PM", "6:00 PM – 8:00 PM"] },
    { key: "purpose", label: "What is the primary purpose of your consultation?", required: false, type: "options", options: ["Bridal Lehenga Fitting", "Groom Sherwani Consultation", "Custom Measurements & Fabrics", "Atelier Private Tour"] },
  ],
  talk_to_stylist: [],
};

// Message structure for history display
interface ChatBubble {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
}

export function WhatsAppChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeAction, setActiveAction] = useState<ActionType | null>(null);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [leadData, setLeadData] = useState<LeadDetails>({});
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const [chatHistory, setChatHistory] = useState<ChatBubble[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [isOpen, chatHistory, currentStepIndex, isTyping, isCompleted]);

  // Reset conversation to initial screen
  const handleReset = () => {
    setActiveAction(null);
    setCurrentStepIndex(0);
    setLeadData({});
    setInputValue("");
    setErrorMessage("");
    setIsTyping(false);
    setIsCompleted(false);
    setChatHistory([]);
  };

  // Handle Quick Action Selection from main screen
  const handleSelectAction = (actionId: ActionType) => {
    setErrorMessage("");

    if (actionId === "talk_to_stylist") {
      const waMsg = generateWhatsAppMessage("talk_to_stylist", {});
      openWhatsApp(waMsg);
      return;
    }

    setActiveAction(actionId);
    setCurrentStepIndex(0);
    setLeadData({});
    setIsCompleted(false);

    const firstQuestion = FLOW_QUESTIONS[actionId][0];
    const initialBubbles: ChatBubble[] = [
      {
        id: `b-init-${Date.now()}`,
        sender: "bot",
        text: `Splendid choice! Let's tailor your inquiry so our Fashion Stylist can best assist you.`,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ];

    setChatHistory(initialBubbles);
    setIsTyping(true);

    setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        {
          id: `b-q0-${Date.now()}`,
          sender: "bot",
          text: firstQuestion.label,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      setIsTyping(false);
    }, 400);
  };

  // Process user answer for current step
  const handleAnswer = (answerValue: string) => {
    if (!activeAction) return;

    const questions = FLOW_QUESTIONS[activeAction];
    const currentQ = questions[currentStepIndex];

    const cleanAnswer = answerValue.trim();

    // Validation check for required fields
    if (currentQ.required && !cleanAnswer) {
      setErrorMessage(`Please provide your ${currentQ.key === "phone" ? "phone number" : "name"} to proceed.`);
      return;
    }

    setErrorMessage("");
    const updatedLeadData = { ...leadData, [currentQ.key]: cleanAnswer || "Not specified" };
    setLeadData(updatedLeadData);

    // Append user answer bubble
    const userBubble: ChatBubble = {
      id: `u-${currentStepIndex}-${Date.now()}`,
      sender: "user",
      text: cleanAnswer || "Skipped",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setChatHistory((prev) => [...prev, userBubble]);
    setInputValue("");

    const nextIndex = currentStepIndex + 1;

    // Check if flow is finished
    if (nextIndex >= questions.length) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setIsCompleted(true);

        const summaryBubble: ChatBubble = {
          id: `b-complete-${Date.now()}`,
          sender: "bot",
          text: `Thank you! Your requirements have been collected. Click below to launch WhatsApp and connect with our Couture Specialist directly.`,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
        setChatHistory((prev) => [...prev, summaryBubble]);

        // Auto open WhatsApp with formatted message
        const finalMsg = generateWhatsAppMessage(activeAction, updatedLeadData);
        openWhatsApp(finalMsg);
      }, 500);
    } else {
      // Advance to next question
      setCurrentStepIndex(nextIndex);
      const nextQ = questions[nextIndex];
      setIsTyping(true);

      setTimeout(() => {
        const nextBotBubble: ChatBubble = {
          id: `b-q${nextIndex}-${Date.now()}`,
          sender: "bot",
          text: nextQ.label,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
        setChatHistory((prev) => [...prev, nextBotBubble]);
        setIsTyping(false);
      }, 450);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAnswer(inputValue);
  };

  // Current active question
  const currentQuestion = activeAction ? FLOW_QUESTIONS[activeAction][currentStepIndex] : null;
  const totalSteps = activeAction ? FLOW_QUESTIONS[activeAction].length : 0;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Luxury Chatbot Container */}
      {isOpen && (
        <div className="mb-4 flex flex-col h-[560px] max-h-[82vh] w-[360px] sm:w-[420px] overflow-hidden rounded-3xl border border-[#D4AF37]/40 bg-[#121214]/95 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl transition-all duration-300">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-stone-800/80 bg-gradient-to-r from-black via-[#161619] to-[#121214] px-4 py-3.5 shadow-md">
            <div className="flex items-center gap-3">
              {activeAction && (
                <button
                  onClick={handleReset}
                  aria-label="Back to Main Options"
                  className="rounded-full bg-stone-900/80 p-1.5 text-stone-400 hover:text-[#D4AF37] transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
              )}
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37] bg-[#1A1812] text-[#D4AF37] shadow-lg">
                <Sparkles className="h-5 w-5" />
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-black bg-emerald-500"></span>
              </div>
              <div>
                <h3 className="font-serif text-sm font-bold tracking-wide text-stone-100 flex items-center gap-1.5">
                  AURA Atelier <ShieldCheck className="h-3.5 w-3.5 text-[#D4AF37]" />
                </h3>
                <p className="text-[10px] text-stone-400 font-mono flex items-center gap-1">
                  Fashion Consultant • Lead Desk
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {activeAction && (
                <button
                  onClick={handleReset}
                  title="Restart Flow"
                  className="rounded-full bg-stone-900/60 p-1.5 text-stone-400 hover:text-stone-200 transition-colors"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close Concierge Chat"
                className="rounded-full bg-stone-900/60 p-1.5 text-stone-400 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Progress Indicator Bar (When active flow is in progress) */}
          {activeAction && !isCompleted && (
            <div className="bg-[#18181B] border-b border-stone-800/60 px-4 py-2 flex items-center justify-between">
              <span className="text-[10px] font-mono font-medium text-[#D4AF37] tracking-wider uppercase">
                Step {currentStepIndex + 1} of {totalSteps}
              </span>
              <div className="w-36 h-1.5 bg-stone-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F5E096] transition-all duration-300 rounded-full"
                  style={{ width: `${((currentStepIndex + 1) / totalSteps) * 100}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Body Content Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs scrollbar-thin scrollbar-thumb-stone-800">
            
            {/* INITIAL WELCOME SCREEN */}
            {!activeAction ? (
              <div className="flex flex-col space-y-4">
                {/* Brand Welcome Banner */}
                <div className="rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#1A1810] via-[#141416] to-[#0E0E10] p-4 text-center shadow-lg">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/60 bg-[#121214] text-[#D4AF37] mb-2">
                    <Sparkle className="h-5 w-5" />
                  </div>
                  <h4 className="font-serif text-base font-bold text-stone-100 tracking-wide">
                    👋 Welcome to AURA Atelier
                  </h4>
                  <p className="mt-1 text-[11px] text-[#D4AF37] font-medium tracking-wide">
                    Luxury Fashion • Bridal Couture • Bespoke Tailoring
                  </p>
                  <p className="mt-2 text-[11px] text-stone-300 leading-relaxed border-t border-stone-800/80 pt-2">
                    Our Fashion Consultant is here to help.<br />Choose an option below to share your requirements.
                  </p>
                </div>

                {/* Quick Action List */}
                <div className="space-y-2">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-stone-400 px-1">
                    Select Consultation Category
                  </p>
                  {QUICK_ACTIONS.map((action) => (
                    <button
                      key={action.id}
                      onClick={() => handleSelectAction(action.id)}
                      className="group flex w-full items-center justify-between rounded-xl border border-stone-800/90 bg-[#18181C] p-3 text-left transition-all hover:border-[#D4AF37]/70 hover:bg-[#201D14] hover:shadow-md"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{action.icon}</span>
                        <div>
                          <p className="font-serif text-xs font-semibold text-stone-100 group-hover:text-[#D4AF37] transition-colors">
                            {action.label}
                          </p>
                          <p className="text-[10px] text-stone-400">
                            {action.subtitle}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-stone-500 group-hover:text-[#D4AF37] group-hover:translate-x-0.5 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              /* ACTIVE STEP-BY-STEP QUESTIONNAIRE FLOW */
              <div className="space-y-3">
                {chatHistory.map((bubble) => (
                  <div
                    key={bubble.id}
                    className={`flex flex-col ${bubble.sender === "user" ? "items-end" : "items-start"}`}
                  >
                    <div
                      className={`max-w-[88%] rounded-2xl px-4 py-3 shadow-md leading-relaxed ${
                        bubble.sender === "user"
                          ? "bg-[#D4AF37] text-black font-semibold rounded-br-none"
                          : "border border-stone-800 bg-[#18181C] text-stone-200 rounded-bl-none"
                      }`}
                    >
                      <p className="whitespace-pre-line text-xs">{bubble.text}</p>
                      <span
                        className={`mt-1 block text-[9px] ${
                          bubble.sender === "user" ? "text-stone-900 text-right font-normal" : "text-stone-500"
                        }`}
                      >
                        {bubble.timestamp} {bubble.sender === "user" && <CheckCheck className="inline h-3 w-3 ml-0.5" />}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Simulated Typing Indicator */}
                {isTyping && (
                  <div className="flex items-center gap-2 text-stone-400 text-[11px] italic bg-[#18181C] border border-stone-800/80 rounded-2xl rounded-bl-none px-3.5 py-2.5 w-max">
                    <span className="flex h-2 w-2 animate-ping rounded-full bg-[#D4AF37]"></span>
                    Consultant is typing...
                  </div>
                )}

                {/* Option Pills for Predefined Choices */}
                {!isTyping && !isCompleted && currentQuestion && currentQuestion.type === "options" && currentQuestion.options && (
                  <div className="mt-4 pt-2 border-t border-stone-800/60">
                    <p className="text-[10px] font-mono text-stone-400 mb-2 uppercase tracking-wider">
                      Select an option:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {currentQuestion.options.map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => handleAnswer(opt)}
                          className="rounded-xl border border-[#D4AF37]/40 bg-[#1D1B13] px-3.5 py-2.5 text-xs font-medium text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all shadow-sm text-left flex items-center justify-between gap-2"
                        >
                          <span>{opt}</span>
                          <ChevronRight className="h-3.5 w-3.5 opacity-60" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Validation Error Message */}
                {errorMessage && (
                  <div className="flex items-center gap-2 rounded-xl border border-rose-500/40 bg-rose-950/30 p-2.5 text-[11px] text-rose-300">
                    <AlertCircle className="h-4 w-4 shrink-0 text-rose-400" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* COMPLETED LEAD SUMMARY CARD */}
                {isCompleted && (
                  <div className="mt-4 rounded-2xl border border-[#D4AF37]/50 bg-gradient-to-b from-[#1C1A12] to-[#121214] p-4 shadow-xl space-y-3">
                    <div className="flex items-center gap-2 text-emerald-400 border-b border-stone-800 pb-2">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="font-serif font-bold text-xs text-stone-100">Requirements Captured</span>
                    </div>

                    <div className="text-[11px] space-y-1 text-stone-300 font-mono">
                      {Object.entries(leadData).map(([key, val]) => (
                        <div key={key} className="flex justify-between border-b border-stone-800/40 py-1">
                          <span className="text-stone-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                          <span className="font-semibold text-[#D4AF37] text-right truncate max-w-[180px]">{val}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => {
                        if (activeAction) {
                          const finalMsg = generateWhatsAppMessage(activeAction, leadData);
                          openWhatsApp(finalMsg);
                        }
                      }}
                      className="w-full mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 px-4 py-3 text-xs font-bold text-white shadow-lg hover:brightness-110 active:scale-[0.99] transition-all"
                    >
                      <ExternalLink className="h-4 w-4" /> Open WhatsApp with Details
                    </button>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Bottom Input Footer (For text/phone inputs during questionnaire) */}
          {activeAction && !isCompleted && currentQuestion && (currentQuestion.type === "text" || currentQuestion.type === "tel") && (
            <form
              onSubmit={handleFormSubmit}
              className="flex flex-col border-t border-stone-800 bg-[#0E0E10] p-3 gap-2"
            >
              <div className="flex items-center gap-2">
                <input
                  type={currentQuestion.type === "tel" ? "tel" : "text"}
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    if (errorMessage) setErrorMessage("");
                  }}
                  placeholder={currentQuestion.placeholder || "Type your response..."}
                  className="flex-1 rounded-xl border border-stone-800 bg-[#161619] px-4 py-2.5 text-xs text-stone-100 placeholder-stone-500 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                  autoFocus
                />
                <button
                  type="submit"
                  aria-label="Submit Answer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37] text-black font-bold hover:bg-white transition-all shadow-lg shrink-0"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              {!currentQuestion.required && (
                <div className="flex justify-between items-center px-1">
                  <span className="text-[10px] text-stone-400 italic">Optional question</span>
                  <button
                    type="button"
                    onClick={() => handleAnswer("Not specified")}
                    className="text-[10px] text-[#D4AF37] hover:underline"
                  >
                    Skip step ➔
                  </button>
                </div>
              )}
            </form>
          )}

          {/* Footer Branding */}
          <div className="border-t border-stone-800/80 bg-black px-4 py-2 text-center text-[10px] text-stone-400 font-mono flex items-center justify-between">
            <span>AURA Atelier VIP Concierge</span>
            <span className="text-[#D4AF37]">Lead Desk</span>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open AURA Atelier Lead Concierge Chatbot"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]/70 bg-[#141416] text-[#D4AF37] shadow-[0_10px_30px_rgba(212,175,55,0.3)] transition-all duration-300 hover:scale-105 hover:bg-[#D4AF37] hover:text-black focus:outline-none"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-emerald-500 border-2 border-black"></span>
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
