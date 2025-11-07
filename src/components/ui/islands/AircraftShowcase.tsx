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
    id: 'da20-eclipse',
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
  return (
    <div className="max-w-[1200px] mx-auto px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {aircraft.map((plane) => (
          <div
            key={plane.id}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col border border-gray-800"
          >
            <img
              src={plane.image}
              alt={plane.title}
              className="w-full h-[250px] object-cover"
              loading="lazy"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-medium text-white mb-4 leading-tight font-heading">
                {plane.title}
              </h2>
              <p className="mb-4 leading-relaxed text-base text-gray-300 font-heading flex-grow">
                {plane.primaryDesc}
                {plane.secondaryDesc && (
                  <span className="text-gray-400 block mt-2">{plane.secondaryDesc}</span>
                )}
              </p>
              <div className="text-lg font-semibold text-white mb-6 font-heading">
                {plane.price}
              </div>
              <a
                href="#contact"
                className="cta-button self-start"
              >
                Book Discovery Flight
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

