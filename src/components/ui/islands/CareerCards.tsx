import { useEffect, useRef } from 'react';

interface CareerCardProps {
  icon: string;
  title: string;
  description: string;
  timeline: string;
  image?: string;
}

function CareerCard({ icon, title, description, timeline, image }: CareerCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const updateCardScale = () => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const cardTop = rect.top;
      const cardHeight = rect.height;
      const viewportHeight = window.innerHeight;

      const entryPoint = viewportHeight;
      const exitPoint = entryPoint - cardHeight;

      let scale = 0.9;

      if (cardTop <= entryPoint && cardTop >= exitPoint) {
        const progress = (entryPoint - cardTop) / (entryPoint - exitPoint);
        scale = 0.9 + 0.1 * Math.max(0, Math.min(1, progress));
      } else if (cardTop < exitPoint) {
        scale = 1.0;
      }

      cardRef.current.style.transform = `translateY(0) scale(${scale})`;
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateCardScale);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestTick, { passive: true });
    updateCardScale();

    return () => window.removeEventListener('scroll', requestTick);
  }, []);

  return (
    <div
      ref={cardRef}
      className="h-auto md:h-[500px] bg-white rounded-[32px] shadow-[0_0_32px_rgba(0,0,0,0.05)] overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 opacity-0 translate-y-8 scale-90 p-4 sticky top-32 md:top-8 w-[calc(100%+32px)] -ml-4 -mr-4"
      style={{ animation: 'fadeInUp 0.6s ease forwards' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-full">
        <div className="w-full h-[200px] md:h-full rounded-2xl overflow-hidden">
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-white text-lg font-semibold text-center p-8">PLACEHOLDER: {title} Image</span>
            </div>
          )}
        </div>

        <div className="flex flex-col justify-center gap-6">
          <div className="flex items-center gap-3">
            <h3 className="text-3xl font-bold text-gray-800 m-0 font-heading">{title}</h3>
          </div>

          <p className="text-base leading-relaxed text-gray-600 m-0 font-heading">{description}</p>

          <p className="text-base text-blue-600 m-0 font-heading">
            <strong>{timeline}</strong>
          </p>

          <a href="#contact" className="cta-button self-start !bg-[#F2F2F2] !border !border-[#E1E1E1] !shadow-none !h-[48px]">
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
}

export default function CareerCards() {
  return (
    <div className="flex flex-col gap-24 max-w-[1200px] mx-auto p-4">
      <CareerCard
        icon="✈️"
        title="Airline Pilot"
        description="Fly for major carriers like Delta, United, Southwest. Starting salaries $90K+, senior captains earn $400K+. High demand with pilot shortage expected through 2030s."
        timeline="Timeline: 18-24 months to airlines"
        image="/images/aircraft/commercial-airliner.png"
      />
      <CareerCard
        icon="🏢"
        title="Corporate Pilot"
        description="Fly private jets for businesses and executives. Better work-life balance, home most nights. Salaries $75K-$200K+ depending on aircraft type."
        timeline="Timeline: 12-18 months to entry positions"
        image="/images/aircraft/private-jet.png"
      />
      <CareerCard
        icon="🎖️"
        title="Military Pilot"
        description="Serve your country flying fighters, transports, or helicopters. Full benefits, retirement, and pathway to airlines afterward. Private pilot license gives you a competitive edge."
        timeline="Timeline: Start with PPL, then OCS/Academy"
        image="/images/aircraft/military-plane.png"
      />
    </div>
  );
}

