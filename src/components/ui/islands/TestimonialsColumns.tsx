import { cn } from '@/lib/utils';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "I recently completed my CFI and CFII at Centerline Aviation, finishing both within two months of starting the program. My instructor, Jack, was absolutely top-notch—professional, incredibly knowledgeable, and experienced.",
    name: 'Jordan C.',
    title: 'CFI & CFII Graduate',
  },
  {
    quote:
      "I did a Discovery Flight with Cole Barton from Centerline Aviation. He made sure I understood each part of the plane and how the controls worked. I felt very welcome and like they had a passion they were excited to share with me.",
    name: 'Jordan L.',
    title: 'Discovery Flight Student',
  },
  {
    quote:
      "The aircraft and the instructors are great. I've had 2 different instructors at Centerline, both have been awesome. The planes are in really good shape and Spanish Fork airport is a great place to learn at. Would recommend.",
    name: 'Kevin F.',
    title: 'Private Pilot Student',
  },
  {
    quote:
      "The hangared fleet was a game-changer. I trained through December-February with ZERO weather cancellations while friends at other schools lost weeks to snow delays.",
    name: 'Marcus Chen',
    title: 'SkyWest Pilot',
  },
  {
    quote:
      "As a working professional, the flexible scheduling was crucial. I flew before work twice a week and Saturdays. Got my PPL in 7 months without quitting my job.",
    name: 'Jennifer Martinez',
    title: 'Business Owner',
  },
  {
    quote:
      "Started at 47 years old as a bucket-list goal. The instructors never made me feel behind. Best investment I've ever made.",
    name: 'Robert Williams',
    title: 'Private Pilot',
  },
];

const TestimonialCard = ({ quote, name, title }: Testimonial) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-blue-300">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        {/* Quote icon */}
        <div className="mb-4">
          <svg
            className="w-10 h-10 text-blue-500 opacity-20"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Quote text */}
        <p className="text-gray-700 mb-6 leading-relaxed italic">{quote}</p>

        {/* Author info */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-lg">
            {name.charAt(0)}
          </div>
          <div>
            <div className="font-semibold text-gray-900">{name}</div>
            <div className="text-sm text-gray-600">{title}</div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-500" />
      </div>
    </div>
  );
};

export default function TestimonialsColumns() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
}

