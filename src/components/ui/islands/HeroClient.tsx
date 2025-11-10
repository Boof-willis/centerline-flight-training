import { useEffect, useRef } from 'react';

export default function HeroClient() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          // 50% scroll speed parallax effect on desktop, 30% on mobile for smoother performance
          const isMobile = window.innerWidth < 768;
          const parallaxSpeed = isMobile ? 0.3 : 0.5;
          const offset = scrolled * parallaxSpeed;
          
          // Directly update transform without state to avoid re-renders
          if (parallaxRef.current) {
            parallaxRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
          }
          if (contentRef.current) {
            contentRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Split text into characters for animation
  const wrapCharacters = (text: string) => {
    let charIndex = 0;
    const baseDelay = 0.5;
    const charDelay = 0.04;

    return text.split(' ').map((word, wordIndex) => (
      <span key={wordIndex} className="inline-block whitespace-nowrap mr-[18px]">
        {word.split('').map((char) => {
          const delay = baseDelay + charIndex * charDelay;
          charIndex++;
          return (
            <span key={charIndex} style={{ animationDelay: `${delay}s` }}>
              {char}
            </span>
          );
        })}
      </span>
    ));
  };

  return (
    <section className="relative h-[95vh] md:h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Parallax Container - moves background and content together */}
      <div ref={parallaxRef} className="absolute inset-0 w-full h-full" style={{ willChange: 'transform' }}>
        {/* Background Image */}
        <div
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-[1] opacity-0 scale-110"
          style={{
            backgroundImage:
              "url('/images/hero/Hero Background Desktop - Airplane Over Lake.png')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center 30%',
            animation: 'heroBackgroundZoomOut 3s cubic-bezier(0.12, 0.23, 0.5, 1) forwards',
            willChange: 'transform',
          }}
        />
      </div>

      {/* Hero Content */}
      <div ref={contentRef} className="relative z-[2] max-w-[1200px] w-full px-8" style={{ willChange: 'transform' }}>
        <div className="relative w-full max-w-[800px] text-left">
          {/* Preheading Badge */}
          <div className="inline-flex items-center gap-2.5 mb-6 pt-8 md:pt-0 font-heading text-base font-normal leading-6 tracking-[0.1em] text-white/95 opacity-0 translate-y-5 animate-[fadeInUp_0.8s_ease_0.3s_forwards]">
            <span className="w-14 h-0.5 bg-white/80 rounded-sm"></span>
            Spanish Fork Flight School
          </div>

          {/* H1 with Character Reveal */}
          <h1 className="hero-title font-heading text-5xl md:text-7xl font-medium leading-[1.2] mb-7 text-white tracking-tight max-w-[900px]">
            {wrapCharacters('Your Pilot Journey')}
            <br />
            {wrapCharacters('Starts Here')}
          </h1>

          {/* Subheading */}
          <h2 className="font-heading text-base leading-6 text-white/90 mb-10 max-w-[620px] font-normal opacity-0 translate-y-5 animate-[fadeInUp_0.8s_ease_0.9s_forwards]">
            Train for your private pilot license at Spanish Fork's premier Part 61 flight school. Flexible scheduling and transparent pricing make flying achievable for students and professionals alike. Pay-as-you-go from $140.
          </h2>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap mb-12 opacity-0 translate-y-5 animate-[fadeInUp_0.8s_ease_1.1s_forwards]">
            <a href="#contact" className="cta-button font-normal">
              Book a Free Consultation
            </a>
            <a href="#programs" className="secondary-button font-normal !hidden md:!inline-flex">
              Explore Career Paths
            </a>
          </div>

          {/* Google Reviews Widget */}
          <div className="mt-4 opacity-0 translate-y-5 animate-[fadeInUp_0.8s_ease_1.3s_forwards]">
            <div className="flex flex-col gap-1 pl-4 py-2 border-l-[3px] border-white/80">
              <div className="text-white text-lg tracking-[0.125rem] leading-none pb-5">★★★★★</div>
              <div className="text-sm text-white/95 font-normal leading-none">100+ Positive Client Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

