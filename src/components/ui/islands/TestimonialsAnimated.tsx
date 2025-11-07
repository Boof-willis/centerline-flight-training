import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

const getInitials = (name: string): string => {
  const nameParts = name.split(' ');
  if (nameParts.length >= 2) {
    // Get first letter of first name and first letter of last name
    return (nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase();
  }
  // Fallback: just first two letters if only one name
  return name.substring(0, 2).toUpperCase();
};

const TestimonialsColumn = ({
  className,
  testimonials,
  duration = 10,
}: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={className}>
      <motion.div
        animate={{
          translateY: '-50%',
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2).fill(0)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, name, role }, i) => (
              <div
                className="p-8 rounded-3xl border border-gray-200 shadow-lg bg-white hover:shadow-xl hover:border-blue-300 transition-all duration-300 max-w-xs w-full flex flex-col"
                key={i}
              >
                <div className="text-gray-700 leading-relaxed mb-6 flex-grow font-heading">{text}</div>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="h-10 w-10 rounded-full bg-gray-600 flex items-center justify-center flex-shrink-0 text-white font-semibold text-sm">
                    {getInitials(name)}
                  </div>
                  <div className="flex flex-col">
                    <div className="font-semibold tracking-tight leading-5 text-gray-900 font-heading">{name}</div>
                    <div className="leading-5 text-gray-600 tracking-tight text-sm font-heading">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

const testimonials: Testimonial[] = [
  {
    text: "I did a Discovery Flight with Cole Barton from Centerline Aviation. He made sure I understood each part of the plane... They let me do all of the flying with assistance. Fantastic discovery flight and cheaper than most places I've seen. 5 stars!!!",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    name: 'Jordan London',
    role: 'Discovery Flight Student',
  },
  {
    text: "Thank You so much for the memorable experience today! Had a discovery flight and it far exceeded our expectations!",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    name: 'Ken Martin',
    role: 'Discovery Flight',
  },
  {
    text: "I did an introductory flight with Centerline Aviation. They were easy to work with and incredibly helpful. I did my flight with Cole who was generous in offering up his insights & knowledge of flying.",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    name: 'Kendall Rupp',
    role: 'Introductory Flight',
  },
  {
    text: "I've had 2 different instructors at Centerline, both have been awesome. The planes are in really good shape and Spanish Fork airport is a great place to learn at. Would recommend.",
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face',
    name: 'Samuel Fleming',
    role: 'Student Pilot',
  },
  {
    text: "Had a fantastic introductory flight. Would highly recommend flying with this company. The instructors are really cool.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    name: 'Kevin Ford',
    role: 'Introductory Flight',
  },
  {
    text: "My son and I had a great introductory flight with Nate. He explained everything very well. Plane was in good shape.",
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face',
    name: 'Ben McMillan',
    role: 'Introductory Flight',
  },
  {
    text: "We thoroughly enjoyed our discovery flight. Braken is a very professional and personable instructor.",
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face',
    name: 'Geniel McDonald',
    role: 'Discovery Flight',
  },
  {
    text: "Clean planes and great instructors!",
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face',
    name: 'Hannah Olivares',
    role: 'Student',
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function TestimonialsAnimated() {
  return (
    <section className="relative my-10">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-10"
        >
          <div className="flex justify-center">
            <div className="border border-blue-500 text-blue-600 py-1 px-4 rounded-lg text-sm font-medium font-heading">
              Testimonials
            </div>
          </div>

          <h2 className="text-[36px] lg:text-[52px] font-medium tracking-tight mt-5 text-center text-gray-900 font-heading">
            What our students say
          </h2>
          <p className="text-center mt-5 text-gray-600 font-heading">
            Real stories from Utah pilots who trained with us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={30} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={27} />
        </div>
      </div>
    </section>
  );
}

