import { cn } from '@/lib/utils';
import { Plane, Cloud, Target, GraduationCap } from 'lucide-react';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const Feature = ({ title, description, icon, index }: FeatureProps) => {
  return (
    <div
      className={cn(
        'flex flex-col py-10 relative group/feature border-gray-200',
        // Mobile borders (single column) - all items get left, top border; last gets bottom
        'border-l border-t',
        index === 3 && 'border-b md:border-b-0',
        // Desktop borders (2x2 grid)
        'md:border-t-0 md:border-r',
        (index === 0 || index === 2) && 'md:border-l',
        index < 2 && 'md:border-b'
      )}
    >
      {index < 2 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-50 to-transparent pointer-events-none" />
      )}
      {index >= 2 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-blue-50 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-blue-600">
        {icon}
      </div>
      <div className="text-xl font-heading font-semibold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-300 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-gray-800 font-heading">
          {title}
        </span>
      </div>
      <p className="text-base font-heading text-gray-600 max-w-xs relative z-10 px-10 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default function TrainingPathway() {
  const features = [
    {
      title: 'Private Pilot License (PPL)',
      description:
        'Your foundation. Learn to fly for personal recreation and transportation. Minimum 40 flight hours required, most students complete in 50-60 hours.',
      icon: <Plane className="w-6 h-6" />,
    },
    {
      title: 'Instrument Rating (IFR)',
      description:
        'Fly in clouds and low visibility. Required for commercial operations and airline careers. Add 40-50 hours of instrument time.',
      icon: <Cloud className="w-6 h-6" />,
    },
    {
      title: 'Commercial Pilot License (CPL)',
      description:
        'Get paid to fly. Required for any professional pilot position. Build to 250 total hours with advanced maneuvers and cross-country experience.',
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: 'Certified Flight Instructor (CFI) (CFII)',
      description:
        'Build hours while getting paid to teach. Most airlines require 1,500 hours—instructing is the fastest way to build time.',
      icon: <GraduationCap className="w-6 h-6" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}
