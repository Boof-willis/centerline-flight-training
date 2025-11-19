import { useState, useEffect, useRef } from 'react';

export default function ContactHeaderClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const lastScrollY = useRef(0);
  const scrollHistory = useRef<Array<{ y: number; time: number }>>([]);
  const minScrollDistance = 80;
  const scrollTimeWindow = 150;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();
      setScrolled(currentScrollY > 50);

      if (isMobile) {
        if (currentScrollY < 50) {
          setHeaderVisible(true);
          scrollHistory.current = [];
        } else if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
          setHeaderVisible(false);
          scrollHistory.current = [];
        } else if (currentScrollY < lastScrollY.current) {
          scrollHistory.current.push({ y: currentScrollY, time: currentTime });
          
          const cutoffTime = currentTime - scrollTimeWindow;
          scrollHistory.current = scrollHistory.current.filter(
            (entry) => entry.time > cutoffTime
          );
          
          if (scrollHistory.current.length >= 2) {
            const oldest = scrollHistory.current[0];
            const newest = scrollHistory.current[scrollHistory.current.length - 1];
            const scrollDistance = oldest.y - newest.y;
            
            if (scrollDistance >= minScrollDistance) {
              setHeaderVisible(true);
            }
          }
        }
      } else {
        setHeaderVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const scrollToMap = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const mapSection = document.querySelector('#map-section');
    if (mapSection) {
      mapSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed md:absolute top-0 left-0 right-0 z-[1000] py-4 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'} md:bg-transparent md:shadow-none ${
        headerVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="flex justify-between items-center w-full px-8 max-w-[1200px] mx-auto relative z-[1001]">
        <div className="flex items-center gap-6">
          <div className="flex items-center">
            <a href="/">
              <img
                src="/images/logo/Centerline-Logo.svg"
                alt="Centerline Flight Training"
                className={`h-20 w-auto transition-all duration-300 ${mobileMenuOpen || (scrolled && isMobile) ? 'invert' : ''}`}
              />
            </a>
          </div>
          <div className="w-[3px] h-6 bg-white/30 hidden md:block"></div>
          <ul className="hidden md:flex list-none gap-8">
            <li>
              <a
                href="/"
                className="text-white !font-normal relative inline-block group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#map-section"
                onClick={scrollToMap}
                className="text-white !font-normal relative inline-block group"
              >
                Find Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:+18014770418" className="secondary-button !hidden md:!flex">
            (801) 477-0418
          </a>
          <button
            className={`md:hidden bg-none border-none cursor-pointer flex items-center justify-start w-10 h-10 relative`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div 
              className={`h-0.5 w-6 rounded-full transition-all duration-500 absolute ${
                scrolled || mobileMenuOpen ? 'bg-black' : 'bg-white'
              } ${
                mobileMenuOpen ? 'rotate-90 top-1/2 left-[12px] -translate-x-1/2 -translate-y-1/2' : 'top-[calc(50%-3.3px)] left-0 translate-x-0 translate-y-0'
              }`}
            ></div>
            <div 
              className={`h-0.5 rounded-full transition-all duration-500 absolute ${
                scrolled || mobileMenuOpen ? 'bg-black' : 'bg-white'
              } ${
                mobileMenuOpen ? 'w-6 top-1/2 left-[12px] -translate-x-1/2 -translate-y-1/2' : 'w-4 top-[calc(50%+3.3px)] left-0 translate-x-0 translate-y-0'
              }`}
            ></div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div 
        className={`md:hidden fixed top-0 left-0 right-0 bg-white shadow-lg overflow-hidden transition-all duration-500 ease-in-out z-[999] ${
          mobileMenuOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
        } ${
          headerVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col items-center" style={{ marginTop: '88px', paddingTop: '24px' }}>
          <div className="w-[90%] h-px bg-gray-200 mb-6"></div>
          <ul className="flex flex-col list-none gap-6 pb-4 items-center">
            <li>
              <a
                href="/"
                className="text-gray-900 font-heading font-normal text-base relative inline-block group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#map-section"
                onClick={scrollToMap}
                className="text-gray-900 font-heading font-normal text-base relative inline-block group"
              >
                Find Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="tel:+18014770418"
                className="inline-flex items-center justify-center bg-gray-900 text-white py-4 px-12 rounded-full font-heading font-normal text-base hover:bg-gray-800 transition-colors"
              >
                (801) 477-0418
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

