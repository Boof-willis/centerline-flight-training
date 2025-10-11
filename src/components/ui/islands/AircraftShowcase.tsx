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
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop',
  },
  {
    id: 'da20-eclipse-1',
    title: 'DIAMOND DA20 ECLIPSE',
    primaryDesc: 'The DA20 is our primary 2-seat trainer.',
    price: '$165/hr',
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=600&h=400&fit=crop',
  },
  {
    id: 'da20-eclipse-2',
    title: 'DIAMOND DA20 ECLIPSE',
    primaryDesc: 'The DA20 is our primary 2-seat trainer.',
    price: '$165/hr',
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=600&h=400&fit=crop',
  },
  {
    id: 'da40',
    title: 'DIAMOND DA40',
    primaryDesc: 'The DiamondStar is a great cross-country plane and instrument trainer.',
    secondaryDesc: "Equipped with the Garmin G1000 'glass cockpit.'",
    price: '$240/hr',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop',
  },
];

export default function AircraftShowcase() {
  const [activeAircraft, setActiveAircraft] = useState('da40-xl');
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const aircraftType = entry.target.getAttribute('data-aircraft');
            if (aircraftType) {
              setActiveAircraft(aircraftType);
            }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-50% 0px -50% 0px',
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      {/* Left Column: Scrolling Content */}
      <div className="pr-0 lg:pr-8">
        {aircraft.map((plane, index) => (
          <div
            key={plane.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            data-aircraft={plane.id}
            className="min-h-screen py-8 flex flex-col justify-center"
          >
            <h2 className="text-5xl font-bold text-white mb-8 leading-tight tracking-tight">{plane.title}</h2>
            <div className="mb-8 leading-relaxed">
              <span className="block text-xl text-white mb-2">{plane.primaryDesc}</span>
              {plane.secondaryDesc && <span className="block text-lg text-gray-400">{plane.secondaryDesc}</span>}
            </div>
            <div className="text-2xl font-semibold text-white mb-8">{plane.price}</div>
            <a
              href="#contact"
              className="inline-block bg-white text-black py-3.5 px-8 rounded-lg no-underline font-semibold text-base transition-all hover:bg-gray-100 hover:-translate-y-0.5"
            >
              Book Now
            </a>
          </div>
        ))}
      </div>

      {/* Right Column: Sticky Images */}
      <div className="sticky top-[50vh] -translate-y-1/2 h-fit hidden lg:block">
        {aircraft.map((plane) => (
          <div
            key={plane.id}
            className={`aircraft-image rounded-2xl overflow-hidden ${
              activeAircraft === plane.id ? 'active' : 'absolute top-0 left-0 w-full opacity-0'
            }`}
          >
            <img src={plane.image} alt={plane.title} className="w-full h-[500px] object-cover rounded-2xl" />
          </div>
        ))}
      </div>
    </div>
  );
}

