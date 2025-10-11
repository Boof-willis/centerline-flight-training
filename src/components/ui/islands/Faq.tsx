import { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
}

function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white mb-4 rounded-lg overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
      <button
        className="p-6 bg-white border-none w-full text-left text-lg font-semibold text-gray-800 cursor-pointer flex justify-between items-center transition-colors hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className={`faq-icon transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      <div className={`faq-answer text-gray-600 ${isOpen ? 'active p-6' : 'p-0'}`}>
        {answer}
      </div>
    </div>
  );
}

export default function Faq() {
  const faqs = [
    {
      question: 'How long does it take to become an airline pilot?',
      answer:
        "From zero experience to airline-ready: 18-24 months training full-time, or 2-3 years part-time while working. Breakdown: Private Pilot (3-6 months) → Instrument (2-4 months) → Commercial (4-8 months) → CFI (2-3 months) → Build hours to 1,500 (8-12 months instructing). Our flexible Part 61 program lets you control the pace.",
    },
    {
      question: 'Can I really train while working full-time?',
      answer:
        "Yes! About half our students work full-time jobs. We offer early morning (7am), evening (after 5pm), and weekend availability. Most part-time students fly 2-3 times per week and complete their private pilot license in 6-9 months. Our pay-as-you-go model means you're never locked into a schedule.",
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
      question: 'Why does it matter that your planes are hangared?',
      answer:
        'Utah winters = snow, ice, and freezing temps. Planes parked outside need de-icing and extensive pre-heating, causing cancellations and delays. Our 100% hangared fleet means: (1) No frost/ice removal delays, (2) Engines start reliably in cold weather, (3) Protected avionics last longer, (4) You train year-round without weather-related cancellations. This is HUGE for maintaining training momentum.',
    },
    {
      question: 'Do you offer financing or payment plans?',
      answer:
        'Yes! We offer: (1) Pay-as-you-go—only pay for flights as you take them, (2) Third-party financing through approved lenders (check approval in minutes), (3) Many students have family help with financing. No large upfront payment required—start training for the cost of your discovery flight.',
    },
    {
      question: 'How do I get to your hangar at Spanish Fork Airport?',
      answer:
        "We're located at Hangar #122, Spanish Fork-Springville Airport (SPK). From I-15: Take Exit 257, head east on US-6 for 2 miles, turn right on Airport Road. Look for the large hangars—we're #122. Address: 2050 N 300 W, Spanish Fork, UT 84660. Text (801) 477-0418 if you can't find us—we'll guide you in!",
    },
    {
      question: "What's included in aircraft rental rates?",
      answer:
        "Aircraft rates ($165/hr DA20, $265/hr DA40) include: fuel, insurance, maintenance, and all operating costs. Instructor time is separate at $65/hr. Note: We don't rent to non-students—our aircraft are exclusively for training, meaning better availability and priority for our students.",
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

