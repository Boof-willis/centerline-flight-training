import { useState } from 'react';

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
    image: 'https://pub-b9b491aee0b94c2c8e6c5d1dde4848db.r2.dev/public/images/aircraft/DA40%20XL.png',
  },
  {
    id: 'da40',
    title: 'DIAMOND DA40',
    primaryDesc: 'The DiamondStar is a great cross-country plane and instrument trainer.',
    secondaryDesc: "Equipped with the Garmin G1000 'glass cockpit.'",
    price: '$240/hr',
    image: 'https://pub-b9b491aee0b94c2c8e6c5d1dde4848db.r2.dev/public/images/aircraft/DA40.png',
  },
  {
    id: 'da20-eclipse',
    title: 'DIAMOND DA20 ECLIPSE',
    primaryDesc: 'The DA20 is our primary 2-seat trainer.',
    price: '$165/hr',
    image: 'https://pub-b9b491aee0b94c2c8e6c5d1dde4848db.r2.dev/public/images/aircraft/953.png',
  },
  {
    id: 'da20-eclipse-2',
    title: 'DIAMOND DA20 ECLIPSE',
    primaryDesc: 'The DA20 is our primary 2-seat trainer.',
    price: '$165/hr',
    image: 'https://pub-b9b491aee0b94c2c8e6c5d1dde4848db.r2.dev/public/images/aircraft/359.png',
  },
];

export default function AircraftShowcase() {
  const [selectedAircraft, setSelectedAircraft] = useState(0);

  const selectedPlane = aircraft[selectedAircraft];

  return (
    <div className="max-w-[1200px] mx-auto px-8 py-20 md:py-0">
      {/* Section Title - Mobile */}
      <h2 className="text-[36px] lg:text-[52px] font-medium mb-8 text-white font-heading text-center md:hidden">
        Modern Fleet
      </h2>

      {/* Section Title - Desktop */}
      <h2 className="hidden md:block text-[36px] lg:text-[52px] font-medium mb-8 text-white font-heading text-center">
        Modern Fleet
      </h2>

      {/* Mobile Layout - Amazon Style */}
      <div className="md:hidden">
        {/* Large Main Image */}
        <div className="mb-4 rounded-xl overflow-hidden">
          <img
            src={selectedPlane.image}
            alt={selectedPlane.title}
            className="w-full h-[300px] object-cover"
            loading="lazy"
          />
        </div>

        {/* Thumbnail Row */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          {aircraft.map((plane, index) => (
            <button
              key={plane.id}
              type="button"
              onClick={() => setSelectedAircraft(index)}
              className={`rounded-lg overflow-hidden border-2 transition-all ${
                selectedAircraft === index
                  ? 'border-white'
                  : 'border-transparent opacity-60 hover:opacity-80'
              }`}
            >
              <img
                src={plane.image}
                alt={plane.title}
                className="w-full h-20 object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>

        {/* Description */}
        <div className="mb-6">
          <h3 className="text-xl font-medium text-white mb-2 font-heading">
            {selectedPlane.title}
          </h3>
          <p className="text-base leading-relaxed text-gray-300 font-heading mb-2">
            {selectedPlane.primaryDesc}
            {selectedPlane.secondaryDesc && (
              <span className="text-gray-400 block mt-2">{selectedPlane.secondaryDesc}</span>
            )}
          </p>
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="cta-button self-start block text-center"
        >
          Book Discovery Flight
        </a>
      </div>

      {/* Desktop Layout - Two Column with Vertical Options */}
      <div className="hidden md:block">
        <div className="grid grid-cols-2 gap-12 items-start">
          {/* Left Column - Vertical Options */}
          <div className="flex flex-col justify-between h-[320px]">
            {aircraft.map((plane, index) => (
              <button
                key={plane.id}
                type="button"
                onClick={() => setSelectedAircraft(index)}
                className={`text-left transition-all duration-300 ${
                  selectedAircraft === index
                    ? 'bg-white/10 rounded-lg px-6 py-4'
                    : 'opacity-60 hover:opacity-80 px-6 py-4'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm text-white/70 font-heading">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`font-heading ${
                      selectedAircraft === index
                        ? 'text-white text-xl font-medium'
                        : 'text-white/70 text-lg'
                    }`}
                  >
                    {plane.title}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Right Column - Image and Description */}
          <div className="flex flex-col">
            {/* Aircraft Image */}
            <div className="mb-6 rounded-xl overflow-hidden">
              <img
                src={selectedPlane.image}
                alt={selectedPlane.title}
                className="w-full h-[320px] object-cover"
                loading="lazy"
              />
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-2xl font-medium text-white mb-3 font-heading">
                {selectedPlane.title}
              </h3>
              <p className="text-base leading-relaxed text-gray-300 font-heading mb-2">
                {selectedPlane.primaryDesc}
                {selectedPlane.secondaryDesc && (
                  <span className="text-gray-400 block mt-2">{selectedPlane.secondaryDesc}</span>
                )}
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section - Bottom */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-medium text-white mb-2 font-heading">
                Ready to experience flight?
              </h3>
              <p className="text-gray-300 font-heading">
                Book your discovery flight and take the first step toward your pilot career.
              </p>
            </div>
            <a
              href="#contact"
              className="cta-button whitespace-nowrap"
            >
              Book Discovery Flight
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

