import { useEffect, useState, useRef } from 'react';

interface Aircraft {
  id: string;
  title: string;
  primaryDesc: string;
  secondaryDesc?: string;
  price: string;
  image: string;
}

const aircraft: Aircraft[] = [
  {
    id: 'da40-xl',
    title: 'DIAMOND DA40 XL',
    primaryDesc: 'The DiamondStar is a great cross-country plane and instrument trainer.',
    secondaryDesc: "Equipped with the Garmin G1000 'glass cockpit.'",
    price: '$265 per hour',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&h=1067&fit=crop&q=80',
  },
  {
    id: 'da20-eclipse-1',
    title: 'DIAMOND DA20 ECLIPSE',
    primaryDesc: 'The DA20 is our primary 2-seat trainer.',
    price: '$165/hr',
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1600&h=1067&fit=crop&q=80',
  },
  {
    id: 'da20-eclipse-2',
    title: 'DIAMOND DA20 ECLIPSE',
    primaryDesc: 'The DA20 is our primary 2-seat trainer.',
    price: '$165/hr',
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1600&h=1067&fit=crop&q=80',
  },
  {
    id: 'da40',
    title: 'DIAMOND DA40',
    primaryDesc: 'The DiamondStar is a great cross-country plane and instrument trainer.',
    secondaryDesc: "Equipped with the Garmin G1000 'glass cockpit.'",
    price: '$240/hr',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&h=1067&fit=crop&q=80',
  },
];

export default function AircraftShowcase() {
  const [activeAircraft, setActiveAircraft] = useState('da40-xl');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const sections = aircraft
      .map((plane) => sectionRefs.current[plane.id])
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section with highest visibility in the center of viewport
        let maxRatio = 0;
        let mostVisibleId = activeAircraft;

        entries.forEach((entry) => {
          const id = entry.target.getAttribute('data-aircraft');
          if (id && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleId = id;
          }
        });

        if (maxRatio > 0 && mostVisibleId !== activeAircraft) {
          setActiveAircraft(mostVisibleId);
        }
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: '-40% 0px -40% 0px', // Center 20% of viewport
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [activeAircraft]);

  return (
    <div className="max-w-[1200px] mx-auto px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Column: Scrolling Text Cards */}
        <div className="space-y-[100px] lg:space-y-[30vh]">
          {aircraft.map((plane) => (
            <div
              key={plane.id}
              data-aircraft={plane.id}
              ref={(el) => (sectionRefs.current[plane.id] = el)}
              className="lg:min-h-[100vh] flex flex-col justify-center"
            >
              {/* Mobile: Simple Layout */}
              <div className="lg:hidden">
                <img
                  src={plane.image}
                  alt={plane.title}
                  className="w-full h-[300px] object-cover rounded-3xl mb-6"
                  loading="lazy"
                />
                <h2 className="text-[36px] sm:text-[40px] font-medium text-white mb-6 leading-tight font-heading">
                  {plane.title}
                </h2>
                <p className="mb-6 leading-relaxed text-base text-white font-heading">
                  {plane.primaryDesc}
                  {plane.secondaryDesc && (
                    <span className="text-gray-400"> {plane.secondaryDesc}</span>
                  )}
                </p>
                <div className="text-lg font-semibold text-white mb-6 font-heading">{plane.price}</div>
                <a href="#contact" className="cta-button">
                  Book Discovery Flight
                </a>
              </div>

              {/* Desktop: Clean Layout with Animations */}
              <div className="hidden lg:block">
                <h2 className="text-[36px] sm:text-[40px] lg:text-[52px] font-medium text-white mb-6 leading-tight font-heading">
                  {plane.title}
                </h2>
                <p className="mb-6 leading-relaxed text-base text-white font-heading">
                  {plane.primaryDesc}
                  {plane.secondaryDesc && (
                    <span className="text-gray-400"> {plane.secondaryDesc}</span>
                  )}
                </p>
                <div className="text-lg font-semibold text-white mb-6 font-heading">{plane.price}</div>
                <a href="#contact" className="cta-button">
                  Book Discovery Flight
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Sticky Image Stack (Desktop Only) */}
        <div className="hidden lg:block relative">
          {/* Spacer to align image with first text card */}
          <div className="h-[calc(50vh-250px)]"></div>
          <div className="sticky top-[50vh] -translate-y-1/2 h-[500px]">
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-900">
              {aircraft.map((plane) => (
                <img
                  key={plane.id}
                  src={plane.image}
                  alt={plane.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    activeAircraft === plane.id ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

