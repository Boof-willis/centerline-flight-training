import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

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
            {testimonials.map(({ text, image, name, role }, i) => (
              <div
                className="p-8 rounded-3xl border border-gray-200 shadow-lg bg-white hover:shadow-xl hover:border-blue-300 transition-all duration-300 max-w-xs w-full"
                key={i}
              >
                <div className="text-gray-700 leading-relaxed">{text}</div>
                <div className="flex items-center gap-3 mt-5">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <div className="font-semibold tracking-tight leading-5 text-gray-900">{name}</div>
                    <div className="leading-5 text-gray-600 tracking-tight text-sm">{role}</div>
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
    text: "Best decision I ever made. Cole walked me through everything from ground school to checkride prep. Now I'm building hours as a CFI here while working my IT job in Provo. The flexible schedule made it all possible.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    name: 'Jake Morrison',
    role: 'CFI, Former Software Engineer',
  },
  {
    text: "Started training at 52 thinking I was too old. The instructors never made me feel that way. Passed my checkride first try in 9 months while working full time in Salt Lake. Spanish Fork airport is perfect for training.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    name: 'David Chen',
    role: 'Private Pilot, Accountant',
  },
  {
    text: "The hangared fleet is clutch during Utah winters. I trained December through March with zero cancellations while my buddy at another school lost 3 weeks to weather. That alone made the difference.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    name: 'Tyler Jensen',
    role: 'Commercial Pilot',
  },
  {
    text: "As a mom of three in Lehi, I needed weekend and evening slots. Centerline made it work. Flying Saturdays and Tuesday evenings, I got my PPL in 8 months without sacrificing family time. Game changer.",
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    name: 'Sarah Thompson',
    role: 'Private Pilot, Business Owner',
  },
  {
    text: "Went from discovery flight to SkyWest FO in 20 months. The instructors know the exact standards airlines look for. Jack prepped me so well, my sim eval was easier than expected. Worth every penny.",
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face',
    name: 'Marcus Rodriguez',
    role: 'SkyWest First Officer',
  },
  {
    text: "The DA40 with G1000 is perfect for instrument training. Way more modern than the old steam gauge planes at other schools. My transition to airline glass cockpits was seamless.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    name: 'Emily Martinez',
    role: 'Instrument Rated, BYU Student',
  },
  {
    text: "Pay-as-you-go pricing saved me. I didn't have to take out a huge loan upfront like at Part 141 schools. Paid for each lesson as I went while working construction. No debt, just my license.",
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face',
    name: 'Brandon Wright',
    role: 'Private Pilot, Contractor',
  },
  {
    text: "Living in Spanish Fork and training here was perfect. 5 minutes from my house. The instructors are locals who actually care about your success, not just churning through students.",
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face',
    name: 'Jessica Park',
    role: 'CFI, Mapleton Resident',
  },
  {
    text: "Got my Private, Instrument, and Commercial here. Same instructors the whole way through—they knew exactly where I needed work. Now I'm instructing here and giving back. This place is family.",
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face',
    name: 'Ryan Nelson',
    role: 'CFI/CFII',
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
            <div className="border border-blue-500 text-blue-600 py-1 px-4 rounded-lg text-sm font-medium">
              Testimonials
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-5 text-center text-gray-900">
            What our students say
          </h2>
          <p className="text-center mt-5 text-gray-600">
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

