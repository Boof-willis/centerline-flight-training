import { useEffect, useRef, useState } from 'react';

interface StatItemProps {
  number: string;
  label: string;
}

function StatItem({ number, label }: StatItemProps) {
  const [displayNumber, setDisplayNumber] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounter();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounter = () => {
    const target = parseInt(number.replace(/[^\d]/g, ''));
    const duration = 1200;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }

      let displayValue = Math.floor(current).toLocaleString();
      if (number.includes('+')) {
        displayValue += '+';
      }

      setDisplayNumber(displayValue);
    }, 16);
  };

  return (
    <div ref={elementRef} className="text-left pt-12 relative border-t-2 border-gray-300">
      <div
        className={`font-heading text-5xl font-medium text-gray-800 leading-none mb-2 transition-all duration-600 ${
          hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        {displayNumber}
      </div>
      <div className="text-base text-gray-800 font-normal leading-tight">{label}</div>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      <StatItem number="15+" label="Years of experience" />
      <StatItem number="200+" label="Pilots trained" />
      <StatItem number="500+" label="Flight hours logged" />
      <StatItem number="10,000+" label="Training hours" />
    </div>
  );
}

