import { useState, useEffect, useRef } from 'react';

interface Review {
  text: string;
  author: string;
  image: string;
}

const reviews: Review[] = [
  {
    text: "I've learned more in the past few months with my coach than I did in years on my own. Their personalized approach made all the difference.",
    author: 'Sarah Miller, Lawyer',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
  },
  {
    text: 'The hangared fleet was a game-changer. I trained through December-February with ZERO weather cancellations while friends at other schools lost weeks to snow delays.',
    author: 'Marcus Chen, SkyWest Pilot',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  },
  {
    text: "As a working professional, the flexible scheduling was crucial. I flew before work twice a week and Saturdays. Got my PPL in 7 months without quitting my job.",
    author: 'Jennifer Martinez, Business Owner',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
  },
  {
    text: "Started at 47 years old as a bucket-list goal. The instructors never made me feel behind. Best investment I've ever made.",
    author: 'Robert Williams, Private Pilot',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  },
];

export default function ReviewCarousel() {
  const [currentReview, setCurrentReview] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      startCarousel();
    } else {
      stopCarousel();
    }

    return () => stopCarousel();
  }, [isInView]);

  const startCarousel = () => {
    intervalRef.current = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
  };

  const stopCarousel = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleProfileClick = (index: number) => {
    stopCarousel();
    setCurrentReview(index);
    if (isInView) {
      startCarousel();
    }
  };

  return (
    <div
      ref={sectionRef}
      className="max-w-[800px] mx-auto text-center relative"
      onMouseEnter={stopCarousel}
      onMouseLeave={() => isInView && startCarousel()}
    >
      {/* Stars */}
      <div className="mb-8">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-2xl mx-0.5">
            ★
          </span>
        ))}
      </div>

      {/* Review Text */}
      <div className="mb-8">
        <p className="text-2xl leading-relaxed text-gray-800 font-normal transition-opacity duration-500 min-h-[80px]">
          "{reviews[currentReview].text}"
        </p>
      </div>

      {/* Author */}
      <div className="mb-8">
        <span className="text-base text-gray-800 font-medium">{reviews[currentReview].author}</span>
      </div>

      {/* Profile Pictures */}
      <div className="flex justify-center gap-4 items-center">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`rounded-full overflow-hidden transition-all duration-300 cursor-pointer hover:scale-105 ${
              currentReview === index ? 'w-[66px] h-[66px] scale-110' : 'w-[60px] h-[60px]'
            }`}
            onClick={() => handleProfileClick(index)}
          >
            <img
              src={review.image}
              alt={review.author}
              className={`w-full h-full object-cover transition-all duration-300 ${
                currentReview === index ? 'grayscale-0' : 'grayscale'
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

