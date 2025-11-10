import { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
}

function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="py-8 w-full text-left cursor-pointer flex justify-between items-center gap-8 group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-[20px] font-heading font-normal text-gray-900 leading-relaxed">
          {question}
        </span>
        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center transition-colors group-hover:bg-gray-200">
          <div className="relative w-4 h-4">
            {/* Horizontal line - always visible */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-600 transform -translate-y-1/2"></div>
            {/* Vertical line - rotates to horizontal when open */}
            <div className={`absolute top-0 left-1/2 w-0.5 h-full bg-gray-600 transform -translate-x-1/2 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}></div>
          </div>
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-8 text-gray-600 text-[14px] leading-[1.5] font-heading max-w-3xl">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const faqs = [
    {
      question: 'How long does it take to get my license?',
      answer:
        "Private Pilot License: 3-6 months part-time (flying 2-3 times per week) or 2-3 months full-time. Commercial Pilot License: 8-12 months part-time or 4-6 months full-time from zero experience. Our flexible Part 61 program lets you control the pace—train as often or as little as your schedule allows.",
    },
    {
      question: "How much does it cost to get my license?",
      answer:
        "Private Pilot License: $8,000-$12,000. Commercial Pilot License: $25,000-$35,000 from zero experience. Zero to Commercial (all ratings): $60,000-$80,000 total. We offer pay-as-you-go pricing—no large upfront payment required. Many students offset costs by becoming instructors and getting paid to build hours.",
    },
    {
      question: 'How long does it take to become an airline pilot?',
      answer:
        "From zero experience to airline-ready: 18-24 months training full-time, or 2-3 years part-time while working. Breakdown: Private Pilot (3-6 months) → Instrument (2-4 months) → Commercial (4-8 months) → CFI (2-3 months) → Build hours to 1,500 (8-12 months instructing). Our flexible Part 61 program lets you control the pace.",
    },
    {
      question: "What's the total cost from zero to airline pilot?",
      answer:
        'Approximately $60,000-$80,000 total: Private Pilot ($8-12K) + Instrument ($7-10K) + Commercial ($10-15K) + Multi-Engine ($3-5K) + CFI ($4-6K) + Time Building ($30-40K). We offer pay-as-you-go and financing options—no large upfront payment required. Many students offset costs by becoming instructors and getting paid to build hours.',
    },
    {
      question: "What's the difference between Part 61 and Part 141 training?",
      answer:
        "Part 141 schools follow rigid FAA-approved curriculums with set schedules—like traditional college. Part 61 (us) offers flexible, personalized training where YOU set the pace. Same FAA license and requirements, but Part 61 costs less (no facility overhead) and works around YOUR schedule. Perfect for working adults and students who want flexibility.",
    },
    {
      question: 'Can I really train while working full-time?',
      answer:
        "Yes! About half our students work full-time jobs. We offer early morning (7am), evening (after 5pm), and weekend availability. Most part-time students fly 2-3 times per week and complete their private pilot license in 6-9 months. Our pay-as-you-go model means you're never locked into a schedule.",
    },
  ];

  return (
    <div className="max-w-[800px] mx-auto">
      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}

