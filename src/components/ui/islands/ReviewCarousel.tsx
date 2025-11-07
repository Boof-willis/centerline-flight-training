import { useState, useEffect, useRef } from 'react';

interface Review {
  text: string;
  author: string;
  image: string;
}

const getInitials = (author: string): string => {
  // Extract name part before the comma (e.g., "Sarah Miller, Lawyer" -> "Sarah Miller")
  const namePart = author.split(',')[0].trim();
  const nameParts = namePart.split(' ');
  if (nameParts.length >= 2) {
    // Get first letter of first name and first letter of last name
    return (nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase();
  }
  // Fallback: just first two letters if only one name
  return namePart.substring(0, 2).toUpperCase();
};

const reviews: Review[] = [
  {
    text: "I did a Discovery Flight with Cole Barton from Centerline Aviation. He made sure I understood each part of the plane... They let me do all of the flying with assistance. Fantastic discovery flight and cheaper than most places I've seen. 5 stars!!!",
    author: 'Jordan London, Discovery Flight',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
  },
  {
    text: "Thank You so much for the memorable experience today! Had a discovery flight and it far exceeded our expectations!",
    author: 'Ken Martin, Discovery Flight',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  },
  {
    text: "I've had 2 different instructors at Centerline, both have been awesome. The planes are in really good shape and Spanish Fork airport is a great place to learn at. Would recommend.",
    author: 'Samuel Fleming, Student Pilot',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
  },
  {
    text: "Good safety record and excellent pass rate.",
    author: 'Nicholas Smout, Pilot',
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

      {/* Profile Initials */}
      <div className="flex justify-center gap-4 items-center">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`rounded-full transition-all duration-300 cursor-pointer hover:scale-105 flex items-center justify-center font-semibold text-white ${
              currentReview === index 
                ? 'w-[66px] h-[66px] scale-110 bg-gray-800 text-lg' 
                : 'w-[60px] h-[60px] bg-gray-600 text-base'
            }`}
            onClick={() => handleProfileClick(index)}
          >
            {getInitials(review.author)}
          </div>
        ))}
      </div>
    </div>
  );
}

